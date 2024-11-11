import React from 'react';
import { Container, Box, Typography, ThemeProvider, createTheme } from '@mui/material';
import Navbar from '../components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Saddle Brown
    },
    secondary: {
      main: '#D2691E', // Chocolate
    },
    background: {
      default: '#F3E5AB', // Light beige
      paper: '#FFFFFF',
    },
    text: {
      primary: '#8B4513',
      secondary: '#A0522D',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const BlogPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default }}>
        <Navbar />
        <Container maxWidth={false} sx={{ padding: '24px' }}>
          {/* Blog Header */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '16px', 
            backgroundColor: theme.palette.background.paper, 
            mb: 4,
            borderRadius: '4px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: theme.palette.primary.main, fontWeight: 'bold' }}>
              The Modi Script: History and Origin
            </Typography>
          </Box>

          {/* Blog Content */}
          <Box mb={4} sx={{ backgroundColor: theme.palette.background.paper, padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Typography variant="h5" component="div" sx={{ color: theme.palette.secondary.main, mb: 2, fontWeight: 'bold' }}>
              Origin and Background
            </Typography>
            <Typography paragraph sx={{ color: theme.palette.text.primary }}>
              Modi (Marathi: मोडी, Mōḍī, Marathi pronunciation: [moːɖiː]) is a script used to write the Marathi language, which is the primary language spoken in the state of Maharashtra, India. There are multiple theories concerning its origin. The Modi script was used alongside the Devanagari script to write Marathi until the 20th century when the Balbodh style of the Devanagari script was promoted as the standard writing system for Marathi.
            </Typography>

            <Typography variant="h5" component="div" sx={{ color: theme.palette.secondary.main, mb: 2, mt: 4, fontWeight: 'bold' }}>
              Etymology
            </Typography>
            <Typography paragraph sx={{ color: theme.palette.text.primary }}>
              The name "Modi" may be derived from the Marathi verb moḍaṇe (Marathi: मोडणे), which means "to bend or break". Modi is believed to be derived from broken Devanagari characters, which lends support to that particular etymology.
            </Typography>

            {/* ... (rest of the blog content) ... */}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default BlogPage;