import Head from 'next/head';
import { useState } from 'react';
import { Button, TextField, Typography, Box, Alert } from '@mui/material';
import Layout from '@/components/Layout';
import { siteName } from '@/config/site';

/**
 * Contact page – form for visitors (local state only, no backend).
 */
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Layout>
      <Head>
        <title>{`Contact – ${siteName}`}</title>
        <meta
          name="description"
          content={`Envoyez-moi un message pour discuter de vos projets ou collaborations.`}
        />
      </Head>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Me Contacter
      </Typography>
      {submitted && (
        <Alert severity="success" sx={{ mb: 2, mx: 'auto', maxWidth: 600 }}>
          Merci pour votre message ! Je reviendrai vers vous rapidement.
        </Alert>
      )}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <TextField
          label="Nom"
          variant="outlined"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="E‑mail"
          variant="outlined"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Envoyer
        </Button>
      </Box>
    </Layout>
  );
}
