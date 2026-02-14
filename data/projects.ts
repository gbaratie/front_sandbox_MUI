import { basePath } from '@/lib/basePath';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'conseil-strategique',
    title: 'Conseil stratégique',
    description:
      "Accompagnement d'une PME dans la définition de sa stratégie digitale et la mise en place d'outils collaboratifs.",
    image: `${basePath}/city.jpg`,
  },
  {
    id: 'serie-photographique',
    title: 'Série photographique',
    description:
      "Réalisation d'une série de photographies abstraites exposée dans une galerie parisienne en 2023.",
    image: `${basePath}/cloche.jpg`,
  },
  {
    id: 'application-web',
    title: 'Application web',
    description:
      "Développement d'une application web pour la gestion de projets créatifs, avec une interface intuitive.",
    image: `${basePath}/tour.jpg`,
  },
];
