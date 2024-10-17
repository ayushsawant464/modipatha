import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function ButtonAppBar() {
  // State to control drawer open/close
  const [open, setOpen] = React.useState(false);

  // Function to toggle drawer state
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Drawer content
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#DDD0C8" }}>
        <Toolbar>
          {/* Icon button to open the drawer */}
          <IconButton
            size="large"
            edge="start"
            color="inherit" // Correct color prop for the icon button
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)} // Toggle drawer on click
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer component */}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>

          {/* Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#323232" }}>
            ModiPāṭha
          </Typography>

          {/* Login Button */}
          <Button sx={{ color: "#323232" }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
