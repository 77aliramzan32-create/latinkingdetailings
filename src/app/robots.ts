import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/admin/login/",
        ],
      },
      // AI search and assistant crawlers — explicitly allowed so the site can be
      // cited by ChatGPT, Gemini, Perplexity, Claude and other LLM search products.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "Google-Extended",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "CCBot",
          "Applebot-Extended",
          "DuckAssistBot",
          "cohere-ai",
          "Meta-ExternalAgent",
        ],
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/admin/login/",
        ],
      },
    ],
    sitemap: [
      `${BUSINESS.url}/sitemap.xml`,
      `${BUSINESS.url}/image-sitemap.xml`,
    ],
    host: BUSINESS.url,
  };
}
