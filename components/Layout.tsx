import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, Container } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * The top‑level layout component that provides a persistent navigation bar.
 * It highlights the active page using the current route and wraps page content in a container.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  // Determine the current tab based on the pathname. Defaults to '/'.
  const currentPath = router.pathname;

  const getValueFromPath = (path: string): number => {
    switch (path) {
      case '/':
        return 0;
      case '/projects':
        return 1;
      case '/contact':
        return 2;
      default:
        return 0;
    }
  };

  const [tabValue, setTabValue] = useState<number>(getValueFromPath(currentPath));

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mon Portefeuille
          </Typography>
          <Tabs value={tabValue} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
            <Link href="/" passHref legacyBehavior>
              <Tab label="Accueil" component="a" />
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <Tab label="Projets" component="a" />
            </Link>
            <Link href="/contact" passHref legacyBehavior>
              <Tab label="Contact" component="a" />
            </Link>
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* Spacer toolbar to offset content because AppBar is fixed */}
      <Toolbar />
      <Container maxWidth="md" sx={{ paddingY: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
