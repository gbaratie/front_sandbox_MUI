import Head from 'next/head';
import { Box, Grid, Typography } from '@mui/material';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import SiteCarousel from '@/components/SiteCarousel';
import { projects } from '@/data/projects';
import { sites } from '@/data/sites';
import { siteName } from '@/config/site';

/**
 * Projects page – showcases a selection of past work and sites.
 */
export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{`Projets – ${siteName}`}</title>
        <meta
          name="description"
          content="Découvrez une sélection de mes projets de conseil et créations artistiques."
        />
      </Head>

      <Typography variant="h2" component="h2" gutterBottom>
        Mes Projets
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
            />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 8 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          Mes sites
        </Typography>
        <SiteCarousel sites={sites} />
      </Box>
    </Layout>
  );
}
