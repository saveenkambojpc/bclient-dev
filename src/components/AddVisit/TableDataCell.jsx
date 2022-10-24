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
  inputValue,
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
        // <SelectInput options={[]} value={selectValue} readOnly width={"90px"}  />
        <SimpleSelect value={selectValue} />
      )}
      <TextField
        size="small"
        id=""
        label=""
        onChange={onChange}
        name={inputName}
        fullWidth
        type={inputType}
        value={inputValue}
        required={required}
      />
      <div className="bg-blue-500 rounded">
        {hasIcon && (
          <SearchIcon style={{ color: "white", fontSize: 24, padding: 4 }} />
        )}
      </div>
    </TableCell>
  );
};

export default TableDataCell;
