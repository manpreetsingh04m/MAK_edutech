import type { MetadataRoute } from "next";
import { serviceRoutes } from "./_seo/service-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mak-edutech.vercel.app";

  return serviceRoutes.map((route) => ({
    url: new URL(route.path, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route.changefreq,
    priority: route.priority,
  }));
}

