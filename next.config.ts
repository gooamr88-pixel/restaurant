import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    // a stray package-lock.json in the user home dir confuses root detection
    root: __dirname,
  },
  // Site isn't launched yet: send visitors to the coming-soon page.
  // Remove this to make the full home page live.
  async redirects() {
    return [{ source: "/", destination: "/coming-soon", permanent: false }];
  },
};

export default nextConfig;
