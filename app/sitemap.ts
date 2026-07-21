import type { MetadataRoute } from "next";

import { cases, siteConfig } from "@/data/landing";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
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

  const casePages: MetadataRoute.Sitemap = cases.map((caseStudy) => ({
    url: `${siteConfig.siteUrl}/cases/${caseStudy.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...casePages];
}
