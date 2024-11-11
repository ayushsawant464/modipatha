import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  TextField,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import BrushIcon from '@mui/icons-material/Brush';
import TranslateIcon from '@mui/icons-material/Translate';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

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

const VirtualKeyboard = () => (
  <Box sx={{ border: 1, borderColor: 'primary.main', borderRadius: 2, p: 2, textAlign: 'center' }}>
    Virtual Keyboard Placeholder
  </Box>
);

const DrawingCanvas = () => (
  <Box sx={{ border: 1, borderColor: 'secondary.main', borderRadius: 2, p: 2, textAlign: 'center' }}>
    Drawing Canvas Placeholder
  </Box>
);

function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.default' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main' }}>
        Modipatha
      </Typography>
      <List>
        {['Home', 'Features', 'About Modi', 'About'].map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemText primary={item} sx={{ color: 'text.primary', textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* Navbar */}
        <AppBar position="static" elevation={0} sx={{ bgcolor: 'background.default' }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, color: 'primary.main' }}
              >
                Modipatha
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      {/* Individual buttons wrapped in Link components */}
      <Link to="/typeModi" style={{ textDecoration: 'none' }}>
        <Button
          sx={{
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'background.default',
            },
            mx: 1,
          }}
        >
          Type
        </Button>
      </Link>

      <Link to="/canvas" style={{ textDecoration: 'none' }}>
        <Button
          sx={{
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'background.default',
            },
            mx: 1,
          }}
        >
          Write
        </Button>
      </Link>

      <Link to="/translate" style={{ textDecoration: 'none' }}>
        <Button
          sx={{
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'background.default',
            },
            mx: 1,
          }}
        >
          Transliterate
        </Button>
      </Link>

      <Link to="/blog" style={{ textDecoration: 'none' }}>
        <Button
          sx={{
            color: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.main',
              color: 'background.default',
            },
            mx: 1,
          }}
        >
          About Modi
        </Button>
      </Link>
    </Box>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: 'background.default' },
          }}
        >
          {drawer}
        </Drawer>

        {/* Hero Section */}
        <Box sx={{
          bgcolor: 'secondary.main',
          color: 'background.default',
          py: 8,
          backgroundImage: 'linear-gradient(45deg, #8B4513 30%, #D2691E 90%)',
        }}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" gutterBottom>
              Explore, Convert, and Learn Modi Script
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Discover the beauty of Modi script through our advanced tools. Type, draw, transliterate, and delve into the rich history of this ancient writing system.
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              {/* <Button variant="contained" sx={{ mr: 2, bgcolor: 'background.default', color: 'primary.main', '&:hover': { bgcolor: 'primary.main', color: 'background.default' } }}>
                Get Started
              </Button>
              <Button variant="outlined" sx={{ color: 'background.default', borderColor: 'background.default', '&:hover': { bgcolor: 'background.default', color: 'primary.main' } }}>
                Learn More
              </Button> */}
            </Box>
          </Container>
        </Box>

        {/* Features Section */}
        <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom color="primary">
        Our Features
      </Typography>
      <Grid container spacing={4}>
        {[
          { 
            title: 'Virtual Keyboard', 
            description: 'Type Modi script using our intuitive virtual keyboard.', 
            icon: <KeyboardIcon />, 
            link: '/typeModi', 
          },
          { 
            title: 'Drawing Canvas', 
            description: 'Draw Modi characters and convert them to text.', 
            icon: <BrushIcon />, 
            link: '/canvas', 
          },
          { 
            title: 'Instant Transliteration', 
            description: 'Get real-time transliteration between Modi and various scripts.', 
            icon: <TranslateIcon />,
            link: '/translate', 
          },
          { 
            title: 'Modi Script Info', 
            description: 'Learn about the history and usage of Modi script.', 
            icon: <InfoIcon />,
            link: '/blog', 
          },
        ].map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.3s' } }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  {React.cloneElement(feature.icon, { color: 'primary', fontSize: 'large' })}
                </Box>
                <Typography gutterBottom variant="h5" component="div" align="center" color="primary">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                  {feature.description}
                </Typography>
              </CardContent>
              <CardActions>
                {/* Link to feature's page */}
                <Link to={feature.link} style={{ textDecoration: 'none', width: '100%' }}>
                  <Button size="small" fullWidth color="primary">
                    Explore
                  </Button>
                </Link>
              </CardActions>
              {/* Render feature component if needed */}
              {feature.component && (
                <Box sx={{ p: 2 }}>
                  {feature.component}
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

        {/* FAQ Section */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
          <Container maxWidth="md">
            <Typography variant="h3" align="center" gutterBottom color="primary">
              Frequently Asked Questions
            </Typography>
            {[
              { question: 'What is Modi script?', answer: 'Modi script is a historical script used to write the Marathi language, developed in the 17th century. It was widely used for writing official documents and literature in Maharashtra until the 20th century.' },
              { question: 'How accurate are the translations?', answer: 'Our conversion tool uses aksharamukha to provide highly accurate transliterations between Modi and various scripts. However, for complex texts or rare characters, human verification may be required to ensure perfect accuracy.' },
              { question: 'Can I use the virtual keyboard on mobile devices?', answer: 'Yes, our virtual keyboard is fully responsive and works on both desktop and mobile devices, allowing you to type Modi script on any platform.' },
              { question: 'Is there a limit to how much text I can convert?', answer: 'We offer free conversion.' },
              { question: 'How many languages do we support? ', answer:'Currently, we support Modi script, and we are actively expanding our platform to include a wide range of ancient scripts, preserving and promoting their rich cultural heritage.'}
            ].map((faq, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                  <Typography variant="h6" color="primary">{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Box>

        {/* Newsletter Section */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom color="primary">
            Stay Updated
          </Typography>
          <Typography variant="body1" align="center" paragraph color="text.secondary">
            Subscribe to our newsletter for the latest updates on Modi scripts and our conversion tools.
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1, display: 'flex', justifyContent: 'center' }}>
            <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{ mr: 2 }}
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Subscribe
            </Button>
          </Box>
        </Container>

        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'background.default', py: 6 }}>
          <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
              Modipatha
            </Typography>
            <Typography variant="subtitle1" align="center" component="p">
              Bridging the gap between ancient scripts and modern language
            </Typography>
            <Typography variant="body2" align="center">
              {'Copyright © '}
              Modipatha {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default LandingPage;