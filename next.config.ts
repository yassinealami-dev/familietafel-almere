import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/familietafel-almere",
  assetPrefix: "/familietafel-almere/",
};

export default nextConfig;
