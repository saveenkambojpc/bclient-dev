import { Person } from "@mui/icons-material";
import { Avatar, LinearProgress } from "@mui/material";
import { blue } from "@mui/material/colors";
import React from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloseIcon from "@mui/icons-material/Close";

const UploadedFile = () => {
  return (
    <div className="flex space-around ">
      <div className="flex w-full">
        <Avatar sx={{ width: 26, height: 26, bgcolor: blue[50] }}>
          <UploadFileIcon sx={{ color: blue[600], fontSize: 16 }} />
        </Avatar>
        <div className="text-[10px] w-full px-3  ">
          <h4 className="text-xs font-medium ">Aadhar.png</h4>
          <p>100kb . Complete</p>
          <div className="mt-3">
            <LinearProgress sx={{height:3}}/>
          </div>
        </div>
      </div>
      <div className="">
        <CloseIcon sx={{color:"gray",width:16}} />
      </div>
    </div>
  );
};

export default UploadedFile;