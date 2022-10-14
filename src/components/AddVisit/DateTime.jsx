import * as React from "react";
import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function MaterialUIPickers({ label, current }) {
  const handleChange = (newValue) => {};

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        value={current ? dayjs() : null}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            helperText="24-Hour Clock"
            fullWidth
            sx={{
              // "& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
              //   fontSize: 12,
              // },
              "& .css-k4qjio-MuiFormHelperText-root": {
                fontSize: 8,
              },
              "& .css-i4bv87-MuiSvgIcon-root": {
                fontSize: 12,
              },
              "& .css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input": {
                fontSize: 12,
              },
            }}
            InputLabelProps={{
              style: { fontSize: 12 },
            }}
            size="small"
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}
