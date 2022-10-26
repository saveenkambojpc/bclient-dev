import { TableCell, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SelectInput from "../helper/SelectInput";
import SimpleSelect from "../helper/SimpleSelect";

const TableDataCell = ({
  width,
  inputType,
  hasSelect,
  hasIcon,
  selectValue,
  required,
  inputName,
  onChange,
  paddingLeft,
  inputValue,
  onClick
}) => {

  return (
    <TableCell
      align="left"
      style={{
        width: width,
        display: "flex",
        alignItems: "center",
        border: "none",
        justifyContent: "space-between",
        paddingLeft:paddingLeft && 8
      }}
      sx={{
        padding: 0,
        "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
          fontSize: 10,
          paddingLeft: 1,
          outline: "none",
        },

        "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            border: "none",
          },
        "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
   
      }}
    >
      {hasSelect && (
        <SimpleSelect value={selectValue}  />
      )}
      <TextField
        size="small"
        onChange={onChange}
        name={inputName}
        fullWidth
        type={inputType}
        value={inputValue}
        required={required}

        sx={{
          '&::-webkit-calendar-picker-indicator': {
            display: 'none',
            '-webkit-appearance': 'none',
          },
        }}
      />
      <div className="bg-blue-500 rounded">
        {hasIcon && (
          <SearchIcon onClick={onClick} style={{ color: "white", fontSize: 24, padding: 4, cursor:'pointer' }} />
        )}
      </div>
    </TableCell>
  );
};

export default TableDataCell;
