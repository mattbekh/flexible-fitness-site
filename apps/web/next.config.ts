import type { NextConfig } from "next";

const nextConfig = {
  images: { unoptimized: true }, // safest on Cloudflare Pages
  eslint: { ignoreDuringBuilds: true }, // optional
};

export default nextConfig;
