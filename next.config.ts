import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    // a stray package-lock.json in the user home dir confuses root detection
    root: __dirname,
  },
};

export default nextConfig;
