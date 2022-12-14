import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { theme } from "../helper/Theme";

const SearchTextField = ({ placeholder, helperText }) => {

  // color
  const {main} = theme.palette.primary

  return (
    <>
      <div className="w-full h-9 flex items-center  justify-between">
        <input
          type="text"
          name=""
          placeholder={placeholder}
          className="py-0 text-xs h-full border border-[#c6c6c6] rounded-l px-2 border-gray-300 w-full focus:outline-ring focus:ring-white text-black focus:border-[#c6c6c6] "
          id=""
        />
        <SearchOutlinedIcon
          className={` bg-[${main}] p-2 rounded-r text-white cursor-pointer`}
          sx={{ fontSize: 36, color: "white" }}
        />
      </div>
      <span className="text-[8px] mt-2 text-gray-500 pl-3">{helperText}</span>
    </>
  );
};

export default SearchTextField;
