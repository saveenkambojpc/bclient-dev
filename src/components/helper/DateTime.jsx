import * as React from "react";
import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateRangeOutlined } from "@mui/icons-material";

export default function MaterialUIPickers({ label, current, helperText }) {
  const handleChange = (newValue) => {};

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={label}
        ampm={false}
        value={current ? dayjs() : null}
        onChange={handleChange}
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
              },
              "& .css-i4bv87-MuiSvgIcon-root": {
                fontSize: 16,
              },
              "& .css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input": {
                fontSize: 12,
              },
            }}
            InputLabelProps={{
              style: { fontSize: 11 },
            }}
            size="small"
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
}
