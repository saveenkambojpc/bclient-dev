import { TextField } from "@mui/material";
import React from "react";

const DisableTextInput = ({ label, defaultValue }) => {
  return (
    <TextField
      InputLabelProps={{
        sx: { fontSize: 12 },
      }}
      InputProps={{
        sx: { fontSize: 12 },
      }}
      disabled
      fullWidth
      id="outlined-disabled"
      size="small"
      label="Attendance"
      defaultValue="Biocon House - Second Floor - IT"
    />
  );
};

export default DisableTextInput;
