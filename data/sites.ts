import { basePath } from '@/lib/basePath';

export interface Site {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
}

export const sites: Site[] = [
  {
    id: 'portfolio',
    title: 'Portfolio personnel',
    description: 'Site vitrine présentant mes réalisations et compétences.',
    image: `${basePath}/city.jpg`,
    url: 'https://example.com',
  },
  {
    id: 'galerie',
    title: 'Galerie en ligne',
    description: 'Présentation de mes œuvres photographiques et artistiques.',
    image: `${basePath}/cloche.jpg`,
    url: 'https://example.com',
  },
  {
    id: 'blog',
    title: 'Blog conseil',
    description: 'Articles et retours d’expérience sur le conseil et la création.',
    image: `${basePath}/tour.jpg`,
    url: 'https://example.com',
  },
];
