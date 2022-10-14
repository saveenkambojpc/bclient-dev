import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SimpleSelect({ value }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={value}
          onChange={handleChange}
          autoWidth
          size="small"
          style={{ fontSize: 10, padding: 0 }}
          sx={{
            "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
              position: "static",
            },
            "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input ":
              {
                padding: 0,
              },
            "& .css-e363es-MuiFormControl-root": {
              margin: 0,
            },
            '& .MuiFormControl-root css-e363es-MuiFormControl-root':{
                margin:0
            }
          }}
          readOnly
        >
          <MenuItem value={value}>{value}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
