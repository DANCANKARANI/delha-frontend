import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pentabyte.blob.core.windows.net",
        pathname: "/tyson/**",
      },
    ],
  },
};

export default nextConfig;
