/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as a fully static export. This allows deployment to GitHub Pages.
  output: 'export',
  // Disable image optimization since GitHub Pages does not support Next.js' default loader.
  images: {
    unoptimized: true,
  },
  // If deploying to GitHub Pages at a subpath, you may set the basePath and assetPrefix here.
  // For example, if your repo name is "portfolio", uncomment and adjust:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
};

module.exports = nextConfig;
