import { AppBar, Box, Container, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import CustomDrawer from './customDrower';

export default function Navbar() {
  const [openDrower, setDrawerOpen] = useState()
  const pages = [
    { id: '1', label: 'Home' },
    { id: '2', label: 'About' },
    { id: '3', label: 'Travel' },
    { id: '4', label: 'Eat' },
    { id: '5', label: 'Relax' },
    { id: '6', label: 'Videos' },
  ];
  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };
  return (
    <AppBar
      sx={{
        px: { md: "6rem" },
        position: "absolute",
        boxShadow: "none",
        background: "#F2F2F2",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
        >

          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{
              display: { xs: "flex", md: "none" },

            }}
            onClick={handleOpenDrawer}
          >
            <MenuIcon />
          </IconButton>
          <CustomDrawer drawerOpen={openDrower} pages={pages} setDrawerOpen={setDrawerOpen} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexGrow: 1,
            }}
          >

            <TextField
              label="Search"
              variant="standard"
              sx={{ width: { md: "200px", xs: "150px" }, mr: 3, pb: 2 }}
            />


            <Box
              sx={{
                display: { md: "flex", xs: "none" },
                gap: 3,
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Typography
                  key={page.id}
                  sx={{
                    color: "#696969",
                    textTransform: "none",
                    fontSize: "13px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#FFBA21",
                    },
                  }}
                >
                  {page.label}
                </Typography>
              ))}
            </Box>


            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                color: "#696969",
              }}
            >
              <FacebookOutlinedIcon fontSize="small" />
              <InstagramIcon fontSize="small" />
              <PinterestIcon fontSize="small" />
              <TwitterIcon fontSize="small" />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  )
}
