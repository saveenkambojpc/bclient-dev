import { SearchOutlined } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const TextFieldSearch = () => {
  return (
    <TextField
      label="With normal TextField"
      id="outlined-start-adornment"
      fullWidth
      size="small"
      InputProps={{
        startAdornment:<></>,
        endAdornment: <InputAdornment position="start"><SearchOutlined /></InputAdornment>,
      }}
    />
  );
};

export default TextFieldSearch;
