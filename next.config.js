const { withNextVideo } = require("next-video/process");
import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      type: "asset/resource",
    });
    return config;
  },
};

// Gộp với next-video & MDX
export default withNextVideo(createMDX()(nextConfig));
