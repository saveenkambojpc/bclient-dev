import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip } from "@mui/material";

import {theme} from '../helper/Theme'

export default function SelectInput({
  onChange,
  options,
  value,
  label,
  readOnly,
  defaultValue,
  sx,

  ...props
}) {
  return (
    <div>
      <Autocomplete

        style={props}
        defaultValue={defaultValue}
        value={value}

        ListboxProps={{
          sx: { fontSize: 10 },
        }}
        onChange={onChange}
        id=""
        options={options}
        sx={{
          "& .MuiInputBase-root": {
            padding: 0,
          },
          '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor:theme.palette.primary.main,
        },
        "& .css-1pnb9mc-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":{
          color:theme.palette.primary.main,
      }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            sx={{
              "& .MuiAutocomplete-input": {
                fontSize: 12,
              },
    
            }}
            InputLabelProps={{
              sx: { fontSize: 12 },
            }}
          />
        )}
        size="small"
        fullWidth
        readOnly={readOnly}
      />
    </div>
  );
}
