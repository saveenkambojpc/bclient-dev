import { FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { theme } from "./Theme";

const RadioButtonComp = ({checked,value,label,name,onChange}) => {
  return (
    <FormControlLabel
      value={value}
      checked={checked}
      onChange={onChange}
      sx={{
        "& .MuiSvgIcon-root": {
          fontSize: 14,
          color:theme.palette.primary.main
        },
        "& .css-ahj2mt-MuiTypography-root": {
          fontSize: 12,
        },
   
   
      }}
      control={<Radio />}
      label={label}
      name={name}
    />
  );
};

export default RadioButtonComp;
