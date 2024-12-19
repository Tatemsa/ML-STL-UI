import React from "react";
import "./Navbar.css";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar  sx={{height:"120px", }} className="navBar">
      <Toolbar>
        <Typography
          variant="h3"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          Marie Louise Hotel
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              HOME
            </Typography>
          </Button>
          <Button color="inherit" component={Link} to="/rooms">
          <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              ROOMS
            </Typography>
          </Button>
          <Button color="inherit" component={Link} to="/services">
          <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              SERVICES
            </Typography>
          </Button>
          <Button color="inherit" component={Link} to="/blog">
          <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
              }}
            >
              BLOG
            </Typography>
          </Button>
          <Button color="inherit" component={Link} to="/blog">
          <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
              }}
            >
              OUR STORY
            </Typography>
          </Button>
          <Button  variant="contained" sx={{bgcolor:"#FBA729"}} >
          <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
              }}
            >
              ML-FANS
            </Typography>
          </Button>
          <Button  variant="contained" sx={{bgcolor:"#FBA729", color: "#000000"}} >
          <Typography
              sx={{
                flexGrow: 1,
                textDecoration: "none",
              }}
            >
              MY RESERVATIONS
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
