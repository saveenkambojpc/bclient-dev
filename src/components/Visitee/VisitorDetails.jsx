import { Person } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import { deepOrange, blue } from "@mui/material/colors";
import React from "react";
import SelectInput from "../helper/SelectInput";
import TextInput from "../helper/TextInput";
import DateTime from "../helper/DateTime";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadedFile from "./UploadedFile";
import { theme } from "../helper/Theme";
import CheckBoxComp from "../helper/CheckBoxComp";
import Date from "../helper/Date";

const VisitorDetails = ({ no, data }) => {
  const { mobile, email, visitorName, govId, dob } = data;

  return (
    <div className="mb-6">
      <div className="flex items-center space-x-3 mb-6">
        <Avatar
          sx={{ bgcolor: theme.palette.primary.main, width: 28, height: 28 }}
        >
          <Person style={{ fontSize: 16 }} />
        </Avatar>

        <Typography
          style={{
            color: theme.palette.primary.main,
            textTransform: "uppercase",
            fontSize: 9,
            letterSpacing: "0.46px",
            fontWeight: 500,
          }}
        >
          Visitor {no}
        </Typography>
      </div>

      <div className="mb-4 flex flex-wrap ">
        <div className="md:pr-3 md:w-1/2 w-full flex mb-4 md:mb-0">
          <div className="w-1/3 mr-3">
            <SelectInput
              label={"Country Code"}
              options={["+91"]}
              value={"+91"}
              readOnly
            />
          </div>
          <div className="w-2/3 ">
            <TextInput label="Mobile No" value={mobile} />
          </div>
        </div>

        <div className="md:pr-3 md:w-1/2 w-full">
          <TextInput label="Email ID" value={email} />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap">
        <div className="md:pr-3 md:w-1/2 w-full mb-4 md:mb-0">
          <TextInput
            label="Name"
            placeholder="Firstname Lastname"
            value={visitorName}
          />
        </div>
        <div className="md:pr-3 md:w-1/2 w-full">
          <Date disableFuture />
        </div>
      </div>
      <div className="mb-4 flex flex-wrap">
        <div className="md:pr-3 md:w-1/2 w-full md:mb-0 mb-4">
          <SelectInput
            label="Government ID Type"
            options={["Aadhar Card"]}
            defaultValue="Aadhar Card"
          />
        </div>
        <div className="md:pr-3 md:w-1/2 w-full">
          <TextInput
            label="Government ID Number"
            placeholder="1234 2345 3456"
            value={govId}
          />
        </div>
      </div>

      <div className="pr-3">
        <div className="mb-4">
          <Typography
            style={{
              color: theme.palette.primary.lightText,
              fontWeight: 500,
              fontSize: 11,
            }}
          >
            Upload Government ID
            <Typography
              component={"span"}
              style={{ display: "inline", fontWeight: 300, fontSize: 11 }}
            >
              (optional)
            </Typography>
          </Typography>
        </div>
        <div className="">
          <label className="flex justify-center w-full  px-4 transition bg-white border-2 border-gray-200 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-300 focus:outline-none p-3">
            <div className="flex flex-col items-center space-y-2">
              <Avatar sx={{ width: 28, height: 28, bgcolor: blue[50] }}>
                <UploadFileIcon
                  sx={{ color: theme.palette.primary.main, fontSize: 16 }}
                />
              </Avatar>

              <span
                className={`underline text-[${theme.palette.primary.main}]`}
              >
                <Typography
                  style={{ fontSize: 12, display: "inline", marginRight: 3 }}
                >
                  Click to upload
                </Typography>
              </span>
              <Typography style={{ fontSize: 12, display: "inline" }}>
                or drag and drop
              </Typography>

              <Typography
                style={{ fontSize: 10, color: theme.palette.primary.muted }}
              >
                PNG, JPG or PDF (max . 3MB)
              </Typography>
            </div>
            <input type="file" name="file_upload" className="hidden" />
          </label>
        </div>

        <div className="py-5 px-3">
          <UploadedFile />
        </div>

        {/* Checkbox */}
        <div className="text-xs">
          <Typography
            style={{ color: theme.palette.primary.lightText, fontSize: 12 }}
          >
            Select the accessories to carry along with you
          </Typography>

          <div className="md:flex justify-around py-3">
            <div className="">
              <CheckBoxComp label="Laptop" />
            </div>
            <div className="">
              <CheckBoxComp label="Camera" />
            </div>
            <div className="">
              <CheckBoxComp label="Pendrive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorDetails;
