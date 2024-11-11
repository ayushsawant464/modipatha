import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, Box, ThemeProvider, createTheme, AppBar, Toolbar, Button } from '@mui/material';
import VirtualKeyboard from '../components/VirtualKeyboard';
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#A0522D',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: '#8B4513',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#8B4513',
            },
          },
        },
      },
    },
  },
});

export default function Component() {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleKeyPress = (key) => {
    if (key === "BACKSPACE") {
      setText((prevText) => prevText.slice(0, -1));
    } else if (key === "ENTER") {
      setText((prevText) => prevText + '\n');
    } else if (key === "SPACE") {
      setText((prevText) => prevText + ' ');
    } else {
      setText((prevText) => prevText + key);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Navbar />
        <Container maxWidth="lg" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: { xs: 2, md: 3 } }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>
            Modi Typing Page
          </Typography>

          <Box mb={2} sx={{ backgroundColor: theme.palette.background.paper, padding: 2, borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>Typed Text:</Typography>
            <Typography variant="body1" sx={{ 
              whiteSpace: 'pre-wrap', 
              border: `1px solid ${theme.palette.primary.main}`, 
              padding: 1,
              minHeight: '100px',
              color: theme.palette.text.primary,
              overflowWrap: 'break-word',
            }}>
              {text}
            </Typography>
          </Box>

          <TextField
            fullWidth
            multiline
            rows={6}
            value={text + (showCursor ? '|' : '')}
            onChange={(e) => setText(e.target.value)}
            variant="outlined"
            placeholder="Type here in Modi script..."
            sx={{ 
              marginBottom: 2,
              '& .MuiOutlinedInput-root': {
                backgroundColor: theme.palette.background.paper,
              },
            }}
          />
          
          <VirtualKeyboard onKeyPress={handleKeyPress} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}