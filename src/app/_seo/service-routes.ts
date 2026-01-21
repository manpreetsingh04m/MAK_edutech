export type ServiceRouteConfig = {
  path: string;
  priority: number;
  changefreq:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

export const serviceRoutes: ServiceRouteConfig[] = [
  {
    path: "/",
    priority: 1,
    changefreq: "weekly",
  },
  {
    path: "/visas",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/study-visas",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/flight-ticketing",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/railway-ticketing",
    priority: 0.7,
    changefreq: "monthly",
  },
  {
    path: "/ielts-coaching",
    priority: 0.7,
    changefreq: "monthly",
  },
];

