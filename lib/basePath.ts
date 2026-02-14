/**
 * Base path for assets (images, etc.) in production.
 * Override via NEXT_PUBLIC_BASE_PATH; fallback matches next.config.js for GitHub Pages.
 */
const defaultProductionPath =
  process.env.NODE_ENV === 'production' ? '/front_sandbox_MUI' : '';

export const basePath =
  (typeof process.env.NEXT_PUBLIC_BASE_PATH === 'string' &&
    process.env.NEXT_PUBLIC_BASE_PATH) ||
  defaultProductionPath;
