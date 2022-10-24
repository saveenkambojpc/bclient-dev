import { Alert } from "@mui/material";
import React from "react";
import { theme } from "./Theme";

const AlertComp = ({ alert, type, message }) => {
  return (
    alert && (
      <Alert
        variant="filled"
        style={{
          position: "fixed",
          top: 10,
          background: theme.palette.primary.main,
          width: "inherit",
        }}
        severity="success"
      >
        This is a success alert — check it out!
      </Alert>
    )
  );
};

export default AlertComp;
