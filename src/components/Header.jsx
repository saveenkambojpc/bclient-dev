import React from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

import PersonIcon from "@mui/icons-material/Person";
const Header = () => {
  return (
    <div className="flex justify-end items-center space-x-2 py-4">
      <Avatar sx={{ width: 26, height: 26 }}>
        <PersonIcon />
      </Avatar>
      <Typography style={{ fontSize: 12 }}>Hailey Patel</Typography>
      <IconButton aria-label="notification">
        <NotificationsIcon style={{ fontSize: 16 }} />
      </IconButton>
    </div>
  );
};

export default Header;
