import { Person } from "@mui/icons-material";
import { Avatar, FormControlLabel, TextField, Typography } from "@mui/material";
import { deepOrange, blue } from "@mui/material/colors";
import React from "react";
import SelectInput from "../helper/SelectInput";
import TextInput from "../helper/TextInput";
import DateTime from "../helper/DateTime";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadedFile from "./UploadedFile";
import RadioButton from "../helper/RadioButton";
import { theme } from "../helper/Theme";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxComp from "../helper/CheckBoxComp";

const VisitorDetails = ({no}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-3 mb-6">
        <Avatar sx={{ bgcolor: blue[700], width: 28, height: 28 }}>
          <Person sx={{ width: 16 }} />
        </Avatar>

        <Typography style={{color:theme.palette.primary.main,textTransform:'uppercase',fontSize:10, fontWeight:600}}>Visitor {no}</Typography>
      </div>

      <div className="mb-4 flex mb-6">
        <div className="pr-3 w-1/2 flex">
          <div className="w-1/3 mr-3">
            <SelectInput
              label={"Country Code"}
              options={["+91"]}
              defaultValue={"+91"}
            />
          </div>
          <div className="w-2/3">
            <TextInput label="Mobile No" />
          </div>
        </div>

        <div className="pr-3 w-1/2">
          <TextInput label="Email ID" />
        </div>
      </div>

      <div className="mb-4 flex">
        <div className="pr-3 w-1/2">
          <TextInput label="Name" placeholder="Firstname Lastname" />
        </div>
        <div className="pr-3 w-1/2">
          <DateTime label="Date of Birth" />
        </div>
      </div>
      <div className="mb-4 flex">
        <div className="pr-3 w-1/2">
          <SelectInput
            label="Government ID Type"
            options={["Aadhar Card"]}
            value="Aadhar Card"
          />
        </div>
        <div className="pr-3 w-1/2">
          <TextInput
            label="Government ID Number"
            placeholder="1234 2345 3456"
          />
        </div>
      </div>

      <div className="pr-3">
        <h4 className="text-xs font-medium mb-4">
          Upload Government ID
          <span className="text-gray-500 text-xs font-light"> (optional)</span>
        </h4>

        <div className="">
          <label class="flex justify-center w-full  px-4 transition bg-white border-2 border-gray-200 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-300 focus:outline-none p-3">
            <div class="flex flex-col items-center space-y-2">
              <Avatar sx={{ width: 26, height: 26, bgcolor: blue[50] }}>
                <UploadFileIcon sx={{ color: blue[600], fontSize: 16 }} />
              </Avatar>
              <p class="font-medium text-xs text-gray-600">
                <span class="underline text-blue-500">Click to upload </span>
                or drag and drop
              </p>

              <p className="text-gray-400 text-[10px] font-medium">
                PNG, JPG or PDF (max. 3MB)
              </p>
            </div>
            <input type="file" name="file_upload" class="hidden" />
          </label>
        </div>

        <div className="py-5 px-3">
          <UploadedFile />
        </div>

        <div className="text-xs">
          <Typography sx={{fontSize:12}}>Select the accessories to carry along with you</Typography>

          <div className="flex justify-around py-3">
            <CheckBoxComp label="Laptop" />
            <CheckBoxComp label="Camera" />
            <CheckBoxComp label="Pendrive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorDetails;
