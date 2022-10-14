import { TableCell, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SelectInput from "./SelectInput";
import SimpleSelect from "./SimpleSelect";

const TableDataCell = ({
  width,
  inputType,
  hasSelect,
  hasIcon,
  selectValue,
  required
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
        
      }}
      sx={{
        padding: 0,
        "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input": {
          fontSize: 10,
          padding: "0 2px",
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
        // <SelectInput options={[]} value={selectValue} readOnly width={"90px"}  />
        <SimpleSelect value={selectValue} />
      )}
      <TextField size="small" id="" label="" fullWidth type={inputType} required />
      <div className="bg-blue-500 rounded">
        {hasIcon && (
          <SearchIcon style={{ color: "white", fontSize: 24, padding: 4 }} />
        )}
      </div>
    </TableCell>
  );
};

export default TableDataCell;
