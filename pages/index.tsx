import Head from 'next/head';
import Image from 'next/image';
import { Box, Button, Typography, Grid } from '@mui/material';
import Link from 'next/link';
import Layout from '../components/Layout';
import { basePath } from '../lib/basePath';

/**
 * Accueil page – introduces the consultant and artist.
 * This page contains a hero section with a brief introduction
 * and a call to action inviting visitors to explore the projects.
 */
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Accueil – Mon Portfolio</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio. Découvrez mes projets de conseil et mes réalisations artistiques."
        />
      </Head>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h1" component="h1" gutterBottom>
            My Page
          </Typography>
          <Typography variant="body1" paragraph>
            Fort d’une expérience de plusieurs années en conseil, je mets également ma passion artistique au service de
            projets créatifs. Ce site vitrine présente quelques‑unes de mes réalisations, tant professionnelles
            qu’artistiques.
          </Typography>
          <Link href="/projects" passHref legacyBehavior>
            <Button variant="contained" color="primary" component="a">
              Voir mes projets
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Placeholder image; replace with your own portrait or artwork in the public directory */}
          <Box sx={{ width: '100%', height: 0, paddingBottom: '75%', position: 'relative' }}>
            <Image
              src={`${basePath}/homme-de-dos.jpg`}
              alt="Illustration"
              fill
              style={{ objectFit: 'cover', borderRadius: '8px' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
