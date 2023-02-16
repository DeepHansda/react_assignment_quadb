import { HeatPumpRounded } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Container, IconButton, Input, Menu, MenuItem, TextField, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <div>

<AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
         <Link to="/"><Typography
            variant="h6"
            noWrap
          
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: "#fff",
              textDecoration: 'none',
              alignItems:"center"
              
              
              
            }}
          >
            LOGO
          </Typography>
          </Link> 

          
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Input type='text' placeholder='Search Shows'/>
          </Box>

          <Box sx={{flexGrow:0}}>
            <HeatPumpRounded/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}
