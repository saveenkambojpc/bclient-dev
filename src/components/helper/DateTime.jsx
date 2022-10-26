import * as React from "react";
import dayjs from "dayjs";

import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateRangeOutlined } from "@mui/icons-material";
import { theme } from "./Theme";

export default function MaterialUIPickers({
  label,
  helperText,
  onChange,
  disablePast,
  readOnly,
  value,
}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        readOnly={readOnly}
        label={label}
        ampm={false}
        ampmInClock={true}
        onChange={onChange}
        value={value}
        inputFormat="DD/MM/YYYY HH:mm"
        disablePast={disablePast}
        components={{
          OpenPickerIcon: DateRangeOutlined,
        }}
        renderInput={(params) => (
          <TextField
            helperText={helperText}
            fullWidth
            value={value}
            sx={{
              "& .css-k4qjio-MuiFormHelperText-root": {
                fontSize: 8,
                color: theme.palette.primary.lightText60,
              },
              "& .css-i4bv87-MuiSvgIcon-root": {
                fontSize: 12,
              },
              "& .css-19qh8xo-MuiInputBase-input-MuiOutlinedInput-input": {
                fontSize: 12,
                color: theme.palette.primary.black,
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
