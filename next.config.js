/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as a fully static export. This allows deployment to GitHub Pages.
  output: 'export',
  // Disable image optimization since GitHub Pages does not support Next.js' default loader.
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages or subpath deployment (override via NEXT_PUBLIC_BASE_PATH).
  basePath:
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === 'production' ? '/front_sandbox_MUI' : ''),
  assetPrefix:
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === 'production' ? '/front_sandbox_MUI' : ''),
};

module.exports = nextConfig;
