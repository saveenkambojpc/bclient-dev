import PersonAdd from "@mui/icons-material/PersonAdd";
import {
  Autocomplete,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Input,
  Radio,
  TextField,
} from "@mui/material";

import React from "react";
import DateTime from "./DateTime";
import { useSelector, useDispatch } from "react-redux";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import {
  visitorType,
  visitorFor,
  wifiRequired,
  noOfVisitor,
  visitingLocation,
  buildingName,
  visitorSubType,
  purposeOfVisit,
  visitorCompanyAddress,
  singlePointOfContact,
} from "../../redux/features/addVisit";
import VisitorListTable from "./VisitorListTable";
import SearchTextField from "./SearchTextField";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import DisableTextInput from "./DisableTextInput";
import DownloadIcon from "@mui/icons-material/Download";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Sidebar from "../Sidebar";
import Header from "../Header";

const AddVisit = () => {
  const dispatch = useDispatch();
  const addVisitState = useSelector((store) => store.addVisit);

  const locations = [
    "Biocon Campus",
    "Biocon House",
    "Biocon Park SEZ",
    "BBRC Building",
    "Semicon Park Tower 1",
    "Hyderabad",
    "Vishakapatnam Site 5",
    "Valankanni Tech Park",
    "BBRC Expansion",
    "Chennai",
    "Manglore",
    "PB Softech",
    "Biocon Arena",
  ];

  const buildingNames = [
    "Security Room",
    "Auditorium",
    "HR",
    "Admin",
    "Commercial",
    "Corporate",
    "Finance",
    "IT",
    "SCM",
    "BRM",
    "Legal",
    "IPR",
    "Cafeteria",
  ];

  const visitorSubTypeList = [
    "Auditor",
    "Candidate",
    "Consultant",
    "Customers",
    "Media",
    "New Joinee",
    "Other",
  ];

  const wifiDurationList = [
    "1 Hour",
    "2 Hour",
    "4 Hour",
    "6 Hour",
    "8 Hour",
    "1 Day",
    "2 Day",
    "3 Day",
    "4 Day",
    "5 Day",
    "6 Day",
  ];

  const vendorSubTypeList = [
    "Contract Vendor",
    "Driver",
    "Supplier",
    "Truck Driver",
  ];

  const purposeOfVisitList = ["Official", "Personal"];

  const visitorforChange = (e) => {
    dispatch(visitorFor());
  };

  const visitorTypeChange = (e) => {
    dispatch(visitorSubType());
    dispatch(visitorType());
  };

  const wifiRequiredChange = (e) => {
    dispatch(wifiRequired());
  };

  const noOfVisitorChange = (e, newInputValue) => {
    dispatch(noOfVisitor(newInputValue));
  };

  const visitingLocationChange = (event, newInputValue) => {
    dispatch(visitingLocation(newInputValue));
  };

  const buildingNameChange = (e, newInputValue) => {
    dispatch(buildingName(newInputValue));
  };

  const visitorSubTypeChange = (e, newInputValue) => {
    dispatch(visitorSubType(newInputValue));
  };

  const purposeOfVisitChange = (e, newInputValue) => {
    dispatch(purposeOfVisit(newInputValue));
  };

  const visitorCompanyAddressChange = (e) => {
    console.log(e.target.value);
    dispatch(visitorCompanyAddress(e.target.value));
  };

  const singlePointContactChange = (e) => {
    dispatch(singlePointOfContact());
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="">
      <Sidebar />

      <div className="ml-52 md:pl-16 pr-4 pl-4">
        <Header />

        <div className=" w-full  mt-6 text-xs ">
          <div className="row  my-6">
            <div className="w-full">
              <h4 className="text-sm font-medium ">Add Visit</h4>
              <h5 className="text-xs mt-2 flex items-center">
                <ArticleOutlinedIcon
                  sx={{ fontSize: "12px" }}
                  className="text-gray-500"
                />
                <span className="ml-1 text-gray-500 mr-2">Visitor Pass / </span>

                <PersonAdd sx={{ fontSize: "12px" }} />
                <span className="ml-1">Add Visit</span>
              </h5>
            </div>
          </div>

          {/* Radio Button */}
          <div className="flex mt-8 items-center mb-6">
            <span className="mr-5 ml-4 text-gray-500">Visitor for : </span>
            <div className="flex items-center  mx-2">
              <FormControlLabel
                value="self"
                checked={addVisitState.visitorFor === "self"}
                onChange={visitorforChange}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
                  },
                  "& .css-ahj2mt-MuiTypography-root": {
                    fontSize: 12,
                  },
                }}
                control={<Radio />}
                label="Self"
                name="self"
              />
            </div>
            <div className="flex items-center  mx-2">
              <FormControlLabel
                value="others"
                name="others"
                checked={addVisitState.visitorFor === "others"}
                onChange={visitorforChange}
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: 14,
                  },
                  "& .css-ahj2mt-MuiTypography-root": {
                    fontSize: 12,
                  },
                }}
                control={<Radio />}
                label="Others"
              />
            </div>
          </div>

          <div className="">
            {addVisitState.visitorFor === "others" && (
              <div className="md:w-1/3 pr-3">
                <SearchTextField
                  helperText={
                    "Search for Employee Using Employee Name / Employee Name"
                  }
                  placeholder="To Meet"
                />

                {/* Search Result */}
                <div className="pr-3 pl-3 my-3">
                  <h6 className="text-gray-500 text-[10px]  mb-2">
                    1 record Found
                  </h6>

                  <div className="border-t flex items-center justify-between text-[10px] font-medium border-b text-blue-500  border-blue-500 py-1">
                    <div className="">
                      <p>KUSH031 - 10022085 - Kush Marvania</p>
                      <p>IT Department - Hybrids Labs</p>
                    </div>

                    <button>SELECT</button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap my-6">
              <div className="md:w-1/3 pr-3 w-full mb-5 md:mb-0">
                <SelectInput
                  options={locations}
                  onChange={visitingLocationChange}
                  label={"Visiting Location"}
                  value={addVisitState.visitingLocation}
                />
              </div>
              <div className="md:w-1/3 pr-3 w-full mb-5 md:mb-0">
                <SelectInput
                  options={buildingNames}
                  label={"Building Name"}
                  onChange={buildingNameChange}
                />
              </div>
              <div className="md:w-1/3 pr-3 w-full  md:mb-0 ">
                <DisableTextInput
                  label="Attendance"
                  defaultValue="Biocon House - Second Floor - IT"
                />
              </div>
            </div>
          </div>

          <div className="md:my-6 my-3">
            <Divider />
          </div>

          <div className="my-6">
            {/* Radio Button */}
            <div className="flex items-center my-6">
              <span className="mr-5 ml-4 text-gray-500">Visitor type : </span>
              <div className="flex items-center  mx-2">
                <FormControlLabel
                  value="visitor"
                  name="visitor-type"
                  checked={addVisitState.visitorType === "visitor"}
                  onChange={visitorTypeChange}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 14,
                    },
                    "& .css-ahj2mt-MuiTypography-root": {
                      fontSize: 12,
                    },
                  }}
                  control={<Radio />}
                  label="Visitor"
                />
              </div>
              <div className="flex items-center  mx-2">
                <FormControlLabel
                  value="vendro"
                  name="visitor-type"
                  checked={addVisitState.visitorType === "vendor"}
                  onChange={visitorTypeChange}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 14,
                    },
                    "& .css-ahj2mt-MuiTypography-root": {
                      fontSize: 12,
                    },
                  }}
                  control={<Radio />}
                  label="Vendor"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="md:w-1/3 pr-3">
                <SelectInput
                  options={
                    addVisitState.visitorType === "visitor"
                      ? visitorSubTypeList
                      : vendorSubTypeList
                  }
                  value={addVisitState.visitorSubType}
                  onChange={visitorSubTypeChange}
                  label={"Visitor Sub-Type"}
                />
              </div>

              {addVisitState.visitorSubType === "Other" && (
                <div className="md:w-1/3 pr-3 my-6">
                  <TextInput
                    onChange={visitorSubType}
                    label="Specify Sub Type"
                  />
                </div>
              )}

              {addVisitState.visitorSubType === "Truck Driver" && (
                <div className="my-4">
                  <Divider />
                  <h5 className="my-3 px-3 font-semibold">Warehouse Details</h5>
                  <div className="flex my-6">
                    <div className="md:w-1/3 pr-3">
                      <TextInput
                        label="Mobile Number"
                        hasChip
                        chipLabel={"+91"}
                      />
                    </div>
                    <div className="md:w-1/3 pr-3">
                      <TextInput label="Contact Person" />
                    </div>
                  </div>
                  <div className="flex my-4">
                    <div className="md:w-1/3 pr-3 flex">
                      <div className="md:w-1/3 pr-3">
                        <TextInput label="Plant Code" />
                      </div>
                      <div className="md:w-2/3 ">
                        <TextInput label="Warehouse Name" />
                      </div>
                    </div>
                    <div className="md:w-1/3 pr-3">
                      <TextInput label="Vehicle Number" />
                    </div>
                  </div>
                  <Divider />
                </div>
              )}
            </div>

            <div className="w-full flex mt-6">
              <div className="md:w-1/3 pr-3">
                <DateTime label={"Visit Initiation"} current />
              </div>
              <div className="md:w-1/3 pr-3">
                <DateTime label={"Valid Until"} />
              </div>
            </div>

            <div className="w-full mt-3 flex flex-wrap">
              <div className="md:w-1/3 pr-3 w-full mb-3 md:mb-0">
                <SelectInput
                  label={"Purpose of Visit"}
                  onChange={purposeOfVisitChange}
                  options={purposeOfVisitList}
                />
              </div>

              <div className="md:w-1/3 pr-3 w-full mb-3 md:mb-0">
                <TextInput
                  onChange={visitorCompanyAddressChange}
                  label={
                    addVisitState.visitorType !== "visitor" ? (
                      "Visitor Company/Address"
                    ) : (
                      <span>
                        Visitor Company/Address{" "}
                        <span className="font-light">(optional)</span>
                      </span>
                    )
                  }
                />
              </div>
            </div>

            {addVisitState.visitorType === "visitor" && (
              <div className="flex items-center my-3">
                <Checkbox
                  {...label}
                  onClick={singlePointContactChange}
                  size="small"
                />
                <span>
                  Add a single point of contact (Authorize and individual
                  visitors to add other visitors)?
                </span>
              </div>
            )}

            {true && (
              <div className="w-full my-6">
                <div className="md:w-1/3 pr-3">
                  <SelectInput
                    onChange={noOfVisitorChange}
                    label={"Number of Visitor"}
                    options={[1, 2, 3, 4, 5]}
                    value={addVisitState.noOfVisitor}
                  />
                </div>
              </div>
            )}
            {addVisitState.visitorType === "visitor" && (
              <>
                <div className="my-3 mx-3 text-gray-500">
                  <span>
                    Note: If a visitor carries a laptop and require an internet
                    access. Please tick internet and duration. (Only those
                    carries laptop will be issued wifi access key)
                  </span>
                </div>
                <div className="flex items-center my-3">
                  <Checkbox
                    {...label}
                    size="small"
                    onChange={wifiRequiredChange}
                  />
                  <span>Wi-Fi Access Required?</span>
                </div>
                <div className="md:w-1/3 pr-3">
                  {addVisitState.isWifiRequired && (
                    <SelectInput
                      label={"Wifi Required Duration"}
                      options={wifiDurationList}
                    />
                  )}
                </div>
              </>
            )}
          </div>

          {/* <div className="my-6">
        <Divider />
      </div> */}

          {/* <div className="flex ">
        <div className="md:w-1/3 flex justify-between pr-3">
          <div className="mr-3 w-32">
            <MultipleSelect
              label={"Country Code"}
              defaultValue={"+91"}
              items={["+91"]}
            />
          </div>

          <div className="w-full ">
            <SearchTextField placeholder={"Visitor Mobile No"} />
          </div>
        </div>

        <div className="md:w-1/3 flex">
          <span className="pr-3 pt-2">OR</span>
          <SearchTextField placeholder={"Visitor Email ID"} />
        </div>
      </div> */}

          <div className="my-6">
            <Divider />
          </div>

          <div className="my-6">
            <div className="row  ml-3  my-6 flex items-center justify-between">
              <div className="">
                <h4 className="text-xs font-medium ">Visitor's List</h4>
                <h5 className="text-xs mt-2 flex items-center text-gray-500">
                  Enter Mobile Number or Email to fetch the details if available
                </h5>
              </div>
              <div className="">
                <Button
                  size="small"
                  style={{ fontSize: 10, marginRight: 5 }}
                  variant="contained"
                  startIcon={<DownloadIcon />}
                >
                  Download CSV Format
                </Button>
                <Button
                  size="small"
                  style={{ fontSize: 10 }}
                  variant="contained"
                  startIcon={<UploadFileIcon />}
                >
                  Upload CSV Format
                </Button>
              </div>
            </div>
            <div className="my-6 mb-20">
              <VisitorListTable tableSize={addVisitState.noOfVisitor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVisit;
