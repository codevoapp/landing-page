import type { NextConfig } from "next";

const repoName = "landing-page";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Project site: https://codevoapp.github.io/landing-page/
  // Keep local `next dev` on http://localhost:3000 without a prefix.
  ...(isGithubPages
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
