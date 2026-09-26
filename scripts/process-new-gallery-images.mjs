#!/usr/bin/env node
/**
 * One-off processor for 19 new gallery images (BMW 1M, Mazda 6, BMW 1-Series M Sport, BMW i7).
 * - Converts source JPGs in source-images/gallery/ → 3× WebP variants in public/images/gallery/
 * - Injects GPS + IPTC + XMP geo-metadata (Urmston, Greater Manchester)
 * - Appends 19 new SiteImage entries to src/lib/images.ts WITHOUT touching existing entries
 *
 * Usage: node scripts/process-new-gallery-images.mjs [--dry-run]
 */

import { existsSync, readFileSync, statSync, writeFileSync } from 'fs';
import { basename, dirname, extname, join } from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { exiftool } from 'exiftool-vendored';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT     = join(__dirname, '..');
const SRC_DIR  = join(ROOT, 'source-images', 'gallery');
const OUT_DIR  = join(ROOT, 'public', 'images', 'gallery');
const MANIFEST = join(ROOT, 'src', 'lib', 'images.ts');

const DRY = process.argv.includes('--dry-run');

// ─── Business / geo metadata ───────────────────────────────────────────────────
const BIZ = {
  name:        'Latin King Detailing',
  city:        'Urmston',
  region:      'Greater Manchester',
  country:     'United Kingdom',
  countryCode: 'GBR',
  gpsLat:      53.446,
  gpsLon:      -2.372,
  copyright:   `© ${new Date().getFullYear()} Latin King Detailing. All rights reserved.`,
  url:         'https://latinkingdetailing.co.uk',
  creator:     'Latin King Detailing',
  keywords: [
    'mobile car wash', 'mobile valeting', 'car detailing', 'ceramic coating',
    'paint correction', 'Urmston', 'Trafford', 'Greater Manchester',
    'Latin King Detailing',
  ],
};

const WIDTHS = [1280, 800, 480];

// ─── Per-image metadata ────────────────────────────────────────────────────────
// Keys are the source filenames (without extension).
const IMAGE_META = {
  'bmw-1m-coupe-valencia-orange-full-valet-urmston-latin-king-detailing-01': {
    alt:         'BMW 1M Coupé in Valencia Orange full exterior valet by Latin King Detailing, Urmston',
    description: 'Professional full exterior valet on a BMW 1M Coupé in Valencia Orange by Latin King Detailing — mobile car care in Urmston, Greater Manchester.',
    keywords:    ['BMW 1M', 'BMW 1M Coupe', 'Valencia Orange', 'full valet', 'exterior valet'],
  },
  'bmw-1m-coupe-paint-enhancement-car-detailing-manchester-latin-king-detailing-02': {
    alt:         'BMW 1M Coupé paint enhancement and detailing by Latin King Detailing, Manchester',
    description: 'Paint enhancement and professional car detailing on a BMW 1M Coupé by Latin King Detailing — mobile car care in Manchester, Greater Manchester.',
    keywords:    ['BMW 1M', 'BMW 1M Coupe', 'paint enhancement', 'car detailing', 'Manchester'],
  },
  'bmw-1m-headlight-front-bumper-detail-trafford-latin-king-detailing-03': {
    alt:         'BMW 1M headlight and front bumper detailing by Latin King Detailing, Trafford',
    description: 'Close-up headlight and front bumper detailing on a BMW 1M by Latin King Detailing — mobile car care in Trafford, Greater Manchester.',
    keywords:    ['BMW 1M', 'headlight detailing', 'front bumper detail', 'Trafford'],
  },
  'bmw-1m-coupe-front-end-mobile-detailing-stretford-latin-king-detailing-04': {
    alt:         'BMW 1M Coupé front end mobile detailing by Latin King Detailing, Stretford',
    description: 'Front-end mobile detailing on a BMW 1M Coupé by Latin King Detailing — mobile car care in Stretford, Greater Manchester.',
    keywords:    ['BMW 1M', 'BMW 1M Coupe', 'front end detailing', 'mobile detailing', 'Stretford'],
  },
  'bmw-1m-alloy-wheel-cleaning-greater-manchester-latin-king-detailing-05': {
    alt:         'BMW 1M alloy wheel cleaning by Latin King Detailing, Greater Manchester',
    description: 'Professional alloy wheel cleaning on a BMW 1M by Latin King Detailing — mobile car care across Greater Manchester.',
    keywords:    ['BMW 1M', 'alloy wheel cleaning', 'wheel detailing', 'Greater Manchester'],
  },
  'bmw-1m-wheel-tyre-dressing-mobile-valet-sale-latin-king-detailing-06': {
    alt:         'BMW 1M wheel and tyre dressing during mobile valet by Latin King Detailing, Sale',
    description: 'Wheel and tyre dressing as part of a mobile valet on a BMW 1M by Latin King Detailing — mobile car care in Sale, Greater Manchester.',
    keywords:    ['BMW 1M', 'tyre dressing', 'wheel dressing', 'mobile valet', 'Sale'],
  },
  'bmw-1m-rear-light-ceramic-finish-car-detailing-urmston-latin-king-detailing-07': {
    alt:         'BMW 1M rear light with ceramic coating finish by Latin King Detailing, Urmston',
    description: 'Rear light and ceramic coating finish on a BMW 1M by Latin King Detailing — mobile car care in Urmston, Greater Manchester.',
    keywords:    ['BMW 1M', 'ceramic coating', 'rear light', 'car detailing', 'Urmston'],
  },
  'mazda-6-gt-sport-snow-foam-car-wash-urmston-latin-king-detailing-08': {
    alt:         'Mazda 6 GT Sport snow foam car wash by Latin King Detailing, Urmston',
    description: 'Snow foam pre-wash on a Mazda 6 GT Sport by Latin King Detailing — mobile car wash in Urmston, Greater Manchester.',
    keywords:    ['Mazda 6', 'Mazda 6 GT Sport', 'snow foam', 'car wash', 'Urmston'],
  },
  'mazda-6-soul-red-mobile-car-valet-urmston-m41-latin-king-detailing-09': {
    alt:         'Mazda 6 Soul Red Crystal mobile car valet by Latin King Detailing, Urmston M41',
    description: 'Mobile car valet on a Mazda 6 in Soul Red Crystal by Latin King Detailing — mobile car care in Urmston M41, Greater Manchester.',
    keywords:    ['Mazda 6', 'Soul Red Crystal', 'mobile car valet', 'Urmston', 'M41'],
  },
  'mazda-6-exterior-detailing-flixton-latin-king-detailing-10': {
    alt:         'Mazda 6 exterior detailing by Latin King Detailing, Flixton',
    description: 'Full exterior detailing on a Mazda 6 by Latin King Detailing — mobile car care in Flixton, Greater Manchester.',
    keywords:    ['Mazda 6', 'exterior detailing', 'Flixton', 'Greater Manchester'],
  },
  'mazda-6-full-valet-driveway-davyhulme-latin-king-detailing-11': {
    alt:         'Mazda 6 full valet on driveway by Latin King Detailing, Davyhulme',
    description: 'Full driveway valet on a Mazda 6 by Latin King Detailing — mobile car care in Davyhulme, Greater Manchester.',
    keywords:    ['Mazda 6', 'full valet', 'driveway valet', 'Davyhulme'],
  },
  'mazda-6-alloy-wheel-cleaning-mobile-detailing-manchester-latin-king-detailing-12': {
    alt:         'Mazda 6 alloy wheel cleaning during mobile detailing by Latin King Detailing, Manchester',
    description: 'Alloy wheel cleaning during a mobile detail on a Mazda 6 by Latin King Detailing — mobile car care in Manchester, Greater Manchester.',
    keywords:    ['Mazda 6', 'alloy wheel cleaning', 'mobile detailing', 'Manchester'],
  },
  'mazda-6-rear-exterior-valet-urmston-latin-king-detailing-13': {
    alt:         'Mazda 6 rear exterior valet by Latin King Detailing, Urmston',
    description: 'Rear exterior valet on a Mazda 6 by Latin King Detailing — mobile car care in Urmston, Greater Manchester.',
    keywords:    ['Mazda 6', 'rear exterior valet', 'Urmston'],
  },
  'mazda-6-white-leather-interior-valet-urmston-latin-king-detailing-14': {
    alt:         'Mazda 6 white leather interior valet by Latin King Detailing, Urmston',
    description: 'White leather interior valet on a Mazda 6 by Latin King Detailing — interior car care in Urmston, Greater Manchester.',
    keywords:    ['Mazda 6', 'leather interior', 'interior valet', 'white leather', 'Urmston'],
  },
  'mazda-6-rear-seats-leather-cleaning-trafford-latin-king-detailing-15': {
    alt:         'Mazda 6 rear seats leather cleaning by Latin King Detailing, Trafford',
    description: 'Rear seats leather cleaning on a Mazda 6 by Latin King Detailing — interior car care in Trafford, Greater Manchester.',
    keywords:    ['Mazda 6', 'leather cleaning', 'rear seats', 'interior detailing', 'Trafford'],
  },
  'mazda-6-dashboard-steering-wheel-interior-detailing-manchester-latin-king-detailing-16': {
    alt:         'Mazda 6 dashboard and steering wheel interior detail by Latin King Detailing, Manchester',
    description: 'Dashboard and steering wheel interior detailing on a Mazda 6 by Latin King Detailing — interior car care in Manchester, Greater Manchester.',
    keywords:    ['Mazda 6', 'dashboard cleaning', 'steering wheel detail', 'interior detailing', 'Manchester'],
  },
  'bmw-1-series-m-sport-black-full-valet-urmston-latin-king-detailing-17': {
    alt:         'BMW 1 Series M Sport in Midnight Black full valet by Latin King Detailing, Urmston',
    description: 'Full valet on a BMW 1 Series M Sport in Midnight Black by Latin King Detailing — mobile car care in Urmston, Greater Manchester.',
    keywords:    ['BMW 1 Series', 'BMW 1 Series M Sport', 'Midnight Black', 'full valet', 'Urmston'],
  },
  'bmw-i7-black-exterior-detailing-manchester-latin-king-detailing-18': {
    alt:         'BMW i7 exterior detailing by Latin King Detailing, Manchester',
    description: 'Professional exterior detailing on a BMW i7 by Latin King Detailing — mobile car care in Manchester, Greater Manchester.',
    keywords:    ['BMW i7', 'BMW i7 exterior', 'car detailing', 'Manchester'],
  },
  'bmw-i7-interior-detailing-leather-dashboard-manchester-latin-king-detailing-19': {
    alt:         'BMW i7 interior detail featuring leather dashboard by Latin King Detailing, Manchester',
    description: 'Interior detailing on a BMW i7 featuring the leather dashboard by Latin King Detailing — interior car care in Manchester, Greater Manchester.',
    keywords:    ['BMW i7', 'BMW i7 interior', 'leather dashboard', 'interior detailing', 'Manchester'],
  },

  // ── VW Transporter T7 batch ───────────────────────────────────────────────
  'vw-transporter-t7-tan-leather-interior-mobile-valet-urmston-latin-king-detailing-20': {
    alt:         'VW Transporter T7 tan quilted leather interior mobile valet by Latin King Detailing, Urmston',
    description: 'Tan quilted leather interior valet on a VW Transporter T7 by Latin King Detailing — mobile car care in Urmston, Greater Manchester.',
    keywords:    ['VW Transporter', 'Volkswagen Transporter', 'T7', 'tan leather interior', 'interior valet', 'Urmston'],
  },
  'vw-transporter-t7-navy-blue-rear-exterior-mobile-detailing-manchester-latin-king-detailing-21': {
    alt:         'VW Transporter T7 in Navy Blue rear exterior mobile detailing by Latin King Detailing, Manchester',
    description: 'Rear exterior mobile detailing on a Navy Blue VW Transporter T7 by Latin King Detailing — mobile car care in Manchester, Greater Manchester.',
    keywords:    ['VW Transporter', 'Volkswagen Transporter', 'T7', 'Navy Blue', 'rear exterior', 'mobile detailing', 'Manchester'],
  },
  'vw-transporter-t7-navy-blue-headlight-detail-mobile-valet-urmston-latin-king-detailing-22': {
    alt:         'VW Transporter T7 front headlight detail after mobile valet by Latin King Detailing, Urmston',
    description: 'Front headlight close-up detail after mobile valet on a Navy Blue VW Transporter T7 by Latin King Detailing — mobile car care in Urmston, Greater Manchester.',
    keywords:    ['VW Transporter', 'Volkswagen Transporter', 'T7', 'headlight detail', 'mobile valet', 'Urmston'],
  },

  // ── BMW i7 additional batch ───────────────────────────────────────────────
  'bmw-i7-black-snow-foam-car-wash-three-quarter-manchester-latin-king-detailing-23': {
    alt:         'BMW i7 in black during snow foam mobile car wash by Latin King Detailing, Manchester',
    description: 'Snow foam mobile car wash on a black BMW i7 by Latin King Detailing — mobile car care in Manchester, Greater Manchester.',
    keywords:    ['BMW i7', 'snow foam', 'mobile car wash', 'black BMW i7', 'Manchester'],
  },
  'bmw-i7-black-front-mobile-valet-greater-manchester-latin-king-detailing-24': {
    alt:         'BMW i7 black front view after mobile valet by Latin King Detailing, Greater Manchester',
    description: 'Front view of a black BMW i7 after mobile valet by Latin King Detailing — mobile car care across Greater Manchester.',
    keywords:    ['BMW i7', 'BMW i7 front', 'mobile valet', 'black BMW', 'Greater Manchester'],
  },
  'bmw-i7-black-exterior-three-quarter-mobile-detailing-manchester-latin-king-detailing-25': {
    alt:         'BMW i7 black exterior three-quarter view mobile detailing by Latin King Detailing, Manchester',
    description: 'Three-quarter exterior view of a black BMW i7 during mobile detailing by Latin King Detailing — mobile car care in Manchester, Greater Manchester.',
    keywords:    ['BMW i7', 'BMW i7 exterior', 'three-quarter view', 'mobile detailing', 'Manchester'],
  },
  'bmw-i7-red-merino-leather-interior-steering-wheel-manchester-latin-king-detailing-26': {
    alt:         'BMW i7 red Merino leather interior and steering wheel after interior detail by Latin King Detailing, Manchester',
    description: 'Red Merino leather interior and steering wheel after interior detail on a BMW i7 by Latin King Detailing — interior car care in Manchester, Greater Manchester.',
    keywords:    ['BMW i7', 'BMW i7 interior', 'Merino leather', 'red interior', 'steering wheel', 'interior detail', 'Manchester'],
  },
  'bmw-i7-red-merino-leather-rear-seats-interior-detail-manchester-latin-king-detailing-27': {
    alt:         'BMW i7 red Merino leather rear seats after interior valet by Latin King Detailing, Manchester',
    description: 'Red Merino leather rear seats after interior valet on a BMW i7 by Latin King Detailing — interior car care in Manchester, Greater Manchester.',
    keywords:    ['BMW i7', 'BMW i7 rear seats', 'Merino leather', 'red leather seats', 'interior valet', 'Manchester'],
  },
};

// ─── Write EXIF + XMP geo metadata ────────────────────────────────────────────
async function tagFile(filePath, { description, keywords, seoName }) {
  try {
    await exiftool.write(
      filePath,
      {
        GPSLatitude:  BIZ.gpsLat,
        GPSLongitude: BIZ.gpsLon,

        'IPTC:ObjectName':                  seoName,
        'IPTC:Caption-Abstract':            description,
        'IPTC:Writer-Editor':               BIZ.creator,
        'IPTC:CopyrightNotice':             BIZ.copyright,
        'IPTC:Keywords':                    keywords,
        'IPTC:City':                        BIZ.city,
        'IPTC:Province-State':              BIZ.region,
        'IPTC:Country-PrimaryLocationName': BIZ.country,
        'IPTC:Country-PrimaryLocationCode': BIZ.countryCode,

        'XMP-dc:Description': description,
        'XMP-dc:Creator':     BIZ.creator,
        'XMP-dc:Rights':      BIZ.copyright,
        'XMP-dc:Subject':     keywords,

        'XMP-photoshop:City':    BIZ.city,
        'XMP-photoshop:State':   BIZ.region,
        'XMP-photoshop:Country': BIZ.country,

        'XMP-xmpRights:WebStatement': BIZ.url,
        'XMP-xmpRights:Marked':       true,
      },
      ['-overwrite_original'],
    );
    return true;
  } catch (err) {
    return `${err.message}`;
  }
}

// ─── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n  Latin King Detailing — New Gallery Image Processor');
  console.log(`  ${'─'.repeat(52)}`);
  if (DRY) console.log('  MODE: DRY RUN — no files written\n');

  const sourceFiles = Object.keys(IMAGE_META).map((slug) => ({
    slug,
    inputPath: join(SRC_DIR, `${slug}.jpg`),
  }));

  const newEntries = [];
  const tagErrors  = [];

  for (const { slug, inputPath } of sourceFiles) {
    if (!existsSync(inputPath)) {
      console.warn(`  ⚠  Not found, skipping: ${slug}.jpg`);
      continue;
    }

    const meta        = IMAGE_META[slug];
    const keywords    = [...BIZ.keywords, ...meta.keywords];
    const outputWidths = [];
    let largestPath   = null;
    const inputSize   = statSync(inputPath).size;
    let totalOut      = 0;
    let isNew         = false;

    for (const w of WIDTHS) {
      const outName = `${slug}-${w}w.webp`;
      const outPath = join(OUT_DIR, outName);

      if (existsSync(outPath) && !process.argv.includes('--force')) {
        console.log(`  ⏭  ${outName}  (exists — pass --force to redo)`);
        outputWidths.push(w);
        totalOut += statSync(outPath).size;
        if (w === WIDTHS[0]) largestPath = outPath;
        continue;
      }
      isNew = true;

      if (!DRY) {
        try {
          await sharp(inputPath)
            .rotate()
            .resize(w, null, { withoutEnlargement: true, fit: 'inside' })
            .webp({ quality: 82, effort: 6, smartSubsample: true, nearLossless: false })
            .toFile(outPath);

          const outSize = statSync(outPath).size;
          totalOut += outSize;
          console.log(
            `  ✓  ${outName}  ` +
            `(${(inputSize/1024).toFixed(0)} KB → ${(outSize/1024).toFixed(0)} KB, ` +
            `-${((1 - outSize/inputSize)*100).toFixed(0)}%)`,
          );
        } catch (err) {
          console.error(`  ✖  sharp error (${w}w): ${err.message}`);
          continue;
        }
      } else {
        console.log(`  [DRY]  would write ${outName}`);
      }

      outputWidths.push(w);
      if (w === WIDTHS[0]) largestPath = outPath;
    }

    // Geo-tag the largest variant
    if (!DRY && largestPath && existsSync(largestPath)) {
      const tagResult = await tagFile(largestPath, {
        description: meta.description,
        keywords,
        seoName: slug,
      });
      if (tagResult !== true) tagErrors.push({ file: basename(largestPath), error: tagResult });
    }

    if (isNew) {
      newEntries.push({
        slug,
        service: 'gallery',
        alt:     meta.alt,
        widths:  outputWidths,
        profile: 'gallery',
        src:     `/images/gallery/${slug}-${WIDTHS[0]}w.webp`,
        srcset:  outputWidths.map((w) => `/images/gallery/${slug}-${w}w.webp ${w}w`).join(', '),
      });
    }
  }

  // ─── Append to images.ts ──────────────────────────────────────────────────
  if (!DRY && newEntries.length > 0) {
    const existing = readFileSync(MANIFEST, 'utf8');

    // Insert new entries before the closing `] as const;`
    const insertMarker = '] as const;';
    const insertIdx    = existing.lastIndexOf(insertMarker);
    if (insertIdx === -1) {
      console.error('  ✖  Could not find "] as const;" in images.ts — aborting manifest update');
    } else {
      const newJson = newEntries.map((e) => JSON.stringify(e, null, 2)).join(',\n');
      const updated =
        existing.slice(0, insertIdx).trimEnd() +
        ',\n' +
        newJson + '\n' +
        existing.slice(insertIdx);
      writeFileSync(MANIFEST, updated, 'utf8');
      console.log(`\n  📄  Appended ${newEntries.length} entries → src/lib/images.ts`);
    }
  }

  // ─── Tag error summary ────────────────────────────────────────────────────
  if (tagErrors.length) {
    console.log(`\n  ⚠  EXIF write failed on ${tagErrors.length} file(s):`);
    tagErrors.forEach(({ file, error }) => console.log(`     ${file}: ${error}`));
    console.log('     (WebP files are still valid — geo metadata is optional)');
  }

  console.log(`\n  ✅  Done — ${newEntries.length} images processed`);
  console.log(`  ${'─'.repeat(52)}\n`);

  await exiftool.end();
}

main().catch((err) => {
  console.error('\n  ✖  Error:', err.message ?? err);
  exiftool.end().catch(() => {});
  process.exit(1);
});
