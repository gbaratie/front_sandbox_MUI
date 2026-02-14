import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography, Container } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { siteName, navItems } from '@/config/site';

interface LayoutProps {
  children: React.ReactNode;
}

function getTabValueFromPath(pathname: string): number {
  const index = navItems.findIndex((item) => item.href === pathname);
  return index >= 0 ? index : 0;
}

/**
 * Top-level layout: persistent nav bar and container.
 * Tab selection stays in sync with the current route.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [tabValue, setTabValue] = useState<number>(() =>
    getTabValueFromPath(router.pathname)
  );

  useEffect(() => {
    setTabValue(getTabValueFromPath(router.pathname));
  }, [router.pathname]);

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={2}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {siteName}
          </Typography>
          <Tabs
            value={tabValue}
            onChange={(_, newValue) => setTabValue(newValue)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} passHref legacyBehavior>
                <Tab label={item.label} component="a" />
              </Link>
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="md" sx={{ paddingY: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
