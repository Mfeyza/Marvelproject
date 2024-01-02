import React, { useState } from 'react';
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
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "../context/AuthContext";
import img1 from "../assets/Batman Logosu.jpg";
import img2 from "../assets/Marvel Vs Dc Logo by Timothyartoons on DeviantArt.jpg";
import  Rating  from '@mui/material/Rating';

const Navbar = () => {
  const navigate = useNavigate();
  const { logOut, currentUser } = useAuthContext();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleMenuClick = (setting) => {
    if (setting === 'Çıkış Yap') {
      handleOpen(); 
    } else {
      handleCloseUserMenu(); 
    }
    if (setting === "Kaydol"){
      navigate("/Register")
    }
    if (setting === "Giriş Yap"){
      navigate("/Login")
    }
    if (setting === "Hakkımda"){
      navigate("/Hakkımda")
    }
  };

  const handleLogout = () => {
    logOut(); 
    handleClose(); 
  };

  const tarafinisec = () => {
    navigate("/Home");
  };

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

  const pages = currentUser ? ['Tarafını Seç'] : ["Hoşgeldin"];
  const settings = currentUser ? ['Hakkımda', 'Çıkış Yap'] : ["Kaydol", "Giriş Yap"];
  console.log(pages);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <AppBar position='static' sx={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems:"center"}}>
          <Container sx={{display:"flex", flexDirection:"row"}}>
            <img src={img1} alt="Logo" style={{ display: 'flex', marginRight: 8, width: '50px', height: '50px' }} />
            <Button onClick={tarafinisec} sx={{ my: 2,  color: 'white', display: { xs: 'none', md: 'block' } }}>
              {pages[0]}
            </Button>
          </Container>

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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => { tarafinisec(); handleCloseNavMenu(); }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            {currentUser && (
              <Typography variant="h6" noWrap component="div" sx={{ mr: 2, color: 'white' }}>
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
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
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

      {/* Logout Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Uygulamamı Puanlar mısın?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Rating name="size-large" defaultValue={2} size="large" />
          </Typography>
          <Button onClick={handleLogout}>Yine Gel</Button>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Navbar;