import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.b-cdn.net" },
      { protocol: "https", hostname: "*.bunnycdn.com" },
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "images.clerk.dev" },
      { protocol: "https", hostname: "*.r2.cloudflarestorage.com" },
    ],
  },
};

export default nextConfig;
