import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Chip } from "@mui/material";

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
  console.log(sx);
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
