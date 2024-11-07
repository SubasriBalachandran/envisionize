import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      {/* Fixed AppBar with zIndex */}
      <AppBar
        position="fixed"
        sx={{ 
          zIndex: 1300,  // Ensures the AppBar stays on top of other content
          backgroundColor: "white", // Replace 'wisteria' with a color that suits your design
        }}
      >
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1, color: "purple" }}>
            ENVISIONIZE
          </Typography>
          <Button color="secondary" component={Link} to="/">
            Home
          </Button>
          <Button color="secondary" component={Link} to="/about">
            About
          </Button>
          <Button color="secondary" component={Link} to="/contact">
            Contact Us
          </Button>
          <Button color="secondary" component={Link} to="/themes">
            Items
          </Button>
          <Button color="secondary" component={Link} to="/cart">
            Cart
          </Button>
          {loggedIn ? (
            <Button color="secondary" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="secondary" component={Link} to="/login">
                Login
              </Button>
              <Button color="secondary" component={Link} to="/register">
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Content offset to avoid overlap with fixed AppBar */}
      <Box sx={{ marginTop: '100px' }}> {/* Adjust the margin to match the height of the AppBar */}
        {/* Other content goes here */}
      </Box>
    </>
  );
};

export default Navbar;
