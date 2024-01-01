import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import img1 from "../assets/Batman Logosu.jpg"
import { useAuthContext } from "../context/AuthContext";
import img2 from "../assets/Marvel Vs Dc Logo by Timothyartoons on DeviantArt.jpg"
const Navbar = () => {
  const { logOut, currentUser } = useAuthContext();
  const handleMenuClick = (setting) => {
    if (setting === 'Logout') {
      logOut(); 
    }
    handleCloseUserMenu(); 
  };
  
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Logout'];
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  return (
    <AppBar  sx={{ backgroundColor: '  rgba(0, 0, 0, 0.575)', boxShadow: 'none' }} >
    <Container maxWidth="xl" >
      <Toolbar disableGutters  sx={{ justifyContent: 'space-between' }}>
      <img 
  src={img1} 
  alt="Logo" 
  style={{ 
    display: { xs: 'none', md: 'flex' }, 
    marginRight: 8,
    width: '50px',
    height: '50px' 
  }} 
/>
       

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
  
        
        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
  {currentUser && (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ mr: 2, color: 'white' }}
    >
      {currentUser.displayName}
    </Typography>
  )}
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Marvel" src={img2} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Navbar