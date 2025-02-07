/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "i.scdn.co",
    ],
  },
};

module.exports = nextConfig;
import { createMDX } from 'fumadocs-mdx/next';
 
const withMDX = createMDX();
 
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};
 
export default withMDX(config);