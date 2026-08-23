import type { NextConfig } from "next";

const repoName = "landing-page";
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Project site: https://codevoapp.github.io/landing-page/
  // Keep local `next dev` on http://localhost:3000 without a prefix.
  ...(isGithubPages
    ? {
        basePath: `/${repoName}`,
        assetPrefix: `/${repoName}/`,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
