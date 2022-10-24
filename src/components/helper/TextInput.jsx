import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import { Autocomplete, Chip, InputAdornment, TextField } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";

const TextInput = ({ onChange, label,defaultValue, hasChip,required,chipLabel,placeholder,value, ...props }) => {
  return (
    <Autocomplete
      id=""
      sx={props}
      options={[]}
      freeSolo
      value={value}
      size="small"
      renderInput={(params) => (
        <>
          <TextField
            {...params}
            onChange={onChange}
            value={value}
            required={required}
            defaultValue={defaultValue}
            placeholder={placeholder}
            sx={{
              "& .MuiAutocomplete-input ": {
                fontSize: 12,
              },
            }}
            InputLabelProps={{
              sx: { fontSize: 12, fontWeight: 400 },
            }}
            label={label}
            // InputProps={{
            //   sx: { fontSize: 12 },
            //   startAdornment: hasChip && (
            //     <Chip size="small" style={{fontSize:12}} label={chipLabel} />
            //   ),
            // }}
            variant="outlined"
          />
        </>
      )}
    />
  );
};

export default TextInput;
