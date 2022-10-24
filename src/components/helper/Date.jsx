import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { theme } from "./Theme";
import { DateRangeOutlined } from "@mui/icons-material";

export default function Date({ disablePast, disableFuture, value }) {
  const [value1, setValue] = React.useState(dayjs(value));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date of Birth"
          inputFormat="DD/MM/YYYY"
          disableFuture={disableFuture}
          disablePast={disablePast}
          value={value1}
          size={"small"}
          onChange={handleChange}
          components={{
            OpenPickerIcon: DateRangeOutlined,
          }}
          renderInput={(params) => (
            <TextField
              sx={{
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
      </Stack>
    </LocalizationProvider>
  );
}
