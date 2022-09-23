import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <>
    <AppBar position="relative" sx={{ bgcolor: "green" }} >
      <Toolbar>
        <IconButton color="inherit">
        </IconButton>
        <Typography variant="h4" style={{ flexGrow: "1" }}>
          Austin Small Businesses
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Listings</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/add">Add</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/login">Log Out</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
    </>
  );
};

export default Navigation;