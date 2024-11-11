import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#8B4513' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ModiPatha
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/translate">
            Transliterate
          </Button>
          <Button color="inherit" component={Link} to="/canvas">
            Write
          </Button>
          <Button color="inherit" component={Link} to="/typeModi">
            Type 
          </Button>
          <Button color="inherit" component={Link} to="/blog">
            Blog
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;