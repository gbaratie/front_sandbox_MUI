/**
 * Base path for assets (images, etc.) in production.
 * Must match the basePath in next.config.js for GitHub Pages deployment.
 */
export const basePath =
  process.env.NODE_ENV === 'production' ? '/front_sandbox_MUI' : '';
