/**
 * Central site configuration: title, navigation.
 * Change these values to adapt the starter to your project.
 */

export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME ?? 'Mon Portfolio';

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Projets', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];
