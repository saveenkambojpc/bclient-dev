import {
  Autocomplete,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { theme } from "./Theme";

const SearchTextField = ({label, helperText, placeholder, onClick , onChange}) => {


  return (
      <TextField
        fullWidth
        placeholder={placeholder}
        helperText={helperText}
        label={label}
        onChange={onChange}
        size="small"
        sx={{
          "& .css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input ": {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          sx: { fontSize: 12, fontWeight: 400 },
        }}
        FormHelperTextProps={{
          style:{fontSize:9}
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton
                onClick={onClick}
                style={{
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                  padding: "5px",
                  borderRadius: 0,
                  position: "absolute",
                  right: 0,
                  borderTopRightRadius: "5px",
                  borderBottomRightRadius: "5px",
                }}
              >
                <SearchIcon style={{ padding: 4 }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
  );
};

export default SearchTextField;
