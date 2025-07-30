import { AppBar, Box, Container, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import MenuIcon from "@mui/icons-material/Menu";
import  { useState } from "react";
import CustomDrawer from "./customDrower";
import { IconLogin } from "../../assets";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openDrower, setDrawerOpen] = useState(false);
  const pages = [
    { id: "1", label: "Home" },
    { id: "2", label: "About" },
    { id: "3", label: "Travel", path: "/posts/TRAVEL" },
    { id: "4", label: "Eat", path: "/posts/EAT" },
    { id: "5", label: "Relax", path: "/posts/RELAX" },
    { id: "6", label: "Videos" },
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
            sx={{ display: { xs: "flex", md: "none" } }}
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
            <Box sx={{ display: { md: "flex", xs: "none" }, gap: 3, alignItems: "center" }}>
              {pages.map((page) => (
                <Link key={page.id} to={page.path} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "#696969",
                      textTransform: "none",
                      fontSize: "13px",
                      cursor: "pointer",
                      "&:hover": { color: "#FFBA21" },
                    }}
                  >
                    {page.label}
                  </Typography>
                </Link>
              ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, color: "#696969" }}>
              <FacebookOutlinedIcon fontSize="small" />
              <InstagramIcon fontSize="small" />
              <PinterestIcon fontSize="small" />
              <TwitterIcon fontSize="small" />
            </Box>
            <Link to="/auth/signup">
              <Box
                component="img"
                src={IconLogin}
                width="30px"
                height="30px"
                sx={{
                  background: "#787878",
                  borderRadius: "50%",
                  padding: "5px",
                  mr: { xs: "1rem", md: "0" },
                }}
              />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}