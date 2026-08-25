const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix public asset paths for GitHub Pages (`/landing-page`) and local (`""`). */
export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
