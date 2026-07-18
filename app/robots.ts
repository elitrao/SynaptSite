import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/landing";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/privacy" },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
