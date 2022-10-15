import { FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { theme } from "./Theme";

const RadioButton = ({onChange,label,value,name}) => {
  return (
    <FormControlLabel
      value={value}
      name={name}
      onChange={onChange}
      sx={{
        "& .MuiSvgIcon-root": {
          fontSize: 14,
          
        },
        "& .css-ahj2mt-MuiTypography-root": {
          fontSize: 12,
        },
      }}
      control={<Radio />}
      label={label}
      
    />
  );
};

export default RadioButton;
