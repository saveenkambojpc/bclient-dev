import * as React from "react";
import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateRangeOutlined } from "@mui/icons-material";
import { theme } from "./Theme";

export default function MaterialUIPickers({ label, current, helperText }) {
  const handleChange = (newValue) => {};

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        ampm={false}
        value={current ? dayjs() : null}
        onChange={handleChange}
        inputFormat="DD/MM/YYYY HH:MM"

        components={{
          OpenPickerIcon: DateRangeOutlined,
        }}
        renderInput={(params) => (
          <TextField
            helperText={helperText}
            placeholder="Saveen"
            fullWidth
            sx={{
              "& .css-k4qjio-MuiFormHelperText-root": {
                fontSize: 8,
                color:theme.palette.primary.lightText60
              },
              "& .css-i4bv87-MuiSvgIcon-root": {
                fontSize: 12,
              },
              "& .css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input": {
                fontSize: 12,
                color:theme.palette.primary.black
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
