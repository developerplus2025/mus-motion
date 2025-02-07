const { withNextVideo } = require("next-video/process");
import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

// Gộp với next-video & MDX
export default withNextVideo(createMDX()(nextConfig));
