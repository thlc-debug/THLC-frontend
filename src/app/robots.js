import { base_url } from "@/base_url";

const url = base_url;

export default function robots() {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/admin", "/private"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/"],
      },
    ],
    sitemap: `${url}/sitemap.xml`,
  };
}
