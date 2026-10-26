import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  experimental: { globalNotFound: true },
  async redirects() {
    return [{ source: "/", destination: "/az", permanent: false }];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};
export default config;
