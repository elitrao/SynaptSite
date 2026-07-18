import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/landing";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
