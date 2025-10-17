/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as a fully static export. This allows deployment to GitHub Pages.
  output: 'export',
  // Disable image optimization since GitHub Pages does not support Next.js' default loader.
  images: {
    unoptimized: true,
  },
  // Set the base path and asset prefix for GitHub Pages deployment.
  //basePath: '/front_sandbox_MUI',
    basePath: process.env.NODE_ENV === 'production' ? '/front_sandbox_MUI' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/front_sandbox_MUI' : '',
};

module.exports = nextConfig;
