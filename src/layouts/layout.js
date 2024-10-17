import React from 'react';
import { Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      {children}
    </Container>
  );
};

export default Layout;
