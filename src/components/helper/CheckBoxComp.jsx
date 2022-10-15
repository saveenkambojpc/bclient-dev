import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

const CheckBoxComp = ({ label }) => {
  return <FormControlLabel sx={{
    '& .css-ahj2mt-MuiTypography-root':{
        fontSize:12,
    }
  }} control={<Checkbox size="small"  />} label={label}  />;
};

export default CheckBoxComp;
