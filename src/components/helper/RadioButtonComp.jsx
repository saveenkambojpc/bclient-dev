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
          color:theme.palette.primary.main,
          width:16
        },
        "& .css-ahj2mt-MuiTypography-root": {
          fontSize:12,
          color:theme.palette.primary.lightText87

        },
   
   
      }}
      control={<Radio />}
      label={label}
      name={name}
    />
  );
};

export default RadioButtonComp;
