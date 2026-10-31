import Link from "next/link";
import { SITE_IMAGES } from "@/lib/images";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GalleryGrid } from "@/components/ui/GalleryGrid";

const PREVIEW_IMAGES = SITE_IMAGES.filter((img) => img.service === "gallery").slice(0, 8);

export function GalleryPreview() {
  return (
    <section className="section-pad">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our work"
          title="Real cars,"
          titleHighlight="real results"
          description="Every vehicle shown was hand-detailed by Latin King Detailing across Urmston and Greater Manchester. Ferraris, Porsches, BMWs and everything in between — we come to you."
        />

        <div className="mb-10">
          {/* priorityCount 0: this preview sits below the fold on the
              homepage, so none of its images should load eagerly and
              compete with the hero (LCP) image for bandwidth. */}
          <GalleryGrid images={PREVIEW_IMAGES} priorityCount={0} />
        </div>

        <div className="text-center">
          <Link href="/gallery" className="btn btn-secondary">
            View Before &amp; After Results
          </Link>
        </div>
      </div>
    </section>
  );
}
