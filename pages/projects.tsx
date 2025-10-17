import Head from 'next/head';
import { Grid, Typography } from '@mui/material';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

/**
 * Projects page – showcases a selection of past work.
 * Each project is represented by a card with an image and description.
 */
export default function Projects() {
  // Define example projects. In a real scenario these would be fetched or defined separately.
  const projects = [
    {
      title: 'Conseil stratégique',
      description:
        'Accompagnement d’une PME dans la définition de sa stratégie digitale et la mise en place d’outils collaboratifs.',
      image: '/city.jpg',
    },
    {
      title: 'Série photographique',
      description:
        'Réalisation d’une série de photographies abstraites exposée dans une galerie parisienne en 2023.',
      image: '/cloche.jpg',
    },
    {
      title: 'Application web',
      description:
        'Développement d’une application web pour la gestion de projets créatifs, avec une interface intuitive.',
      image: '/tour.jpg',
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Projets – Mon Portfolio</title>
        <meta
          name="description"
          content="Découvrez une sélection de mes projets de conseil et créations artistiques."
        />
      </Head>
      <Typography variant="h2" component="h2" gutterBottom>
        Mes Projets
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard title={project.title} description={project.description} image={project.image} />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
