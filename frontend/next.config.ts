import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // www.google.com
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;
