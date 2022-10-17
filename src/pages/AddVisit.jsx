import PersonAdd from "@mui/icons-material/PersonAdd";
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";

import React from "react";
import DateTime from "../components/helper/DateTime";
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
} from "../redux/features/addVisit";
import VisitorListTable from "../components/AddVisit/VisitorListTable";
import SelectInput from "../components/helper/SelectInput";
import TextInput from "../components/helper/TextInput";
import DisableTextInput from "../components/helper/DisableTextInput";
import DownloadIcon from "@mui/icons-material/Download";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { theme } from "../components/helper/Theme";
import RadioButtonComp from "../components/helper/RadioButtonComp";
import SearchTextField from "../components/helper/SearchTextField";

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
    dispatch(visitorCompanyAddress(e.target.value));
  };

  const singlePointContactChange = (e) => {
    dispatch(singlePointOfContact());
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="">
      <Sidebar />

      <div className="ml-52 md:pl-20 pr-4 pl-4">
        <Header />
   
        <div className=" w-full  mt-6 text-xs ">
          <div className="row  my-6">
            <div className="w-full">
              <Typography
                style={{
                  color: theme.palette.primary.lightText87,
                  fontSize: theme.fontSize.font14,
                  fontWeight: 500,
                }}
              >
                Add Visit
              </Typography>
              <h5 className=" mt-2 flex items-center">
                <ArticleOutlinedIcon
                  style={{
                    width: 12,
                    color: theme.palette.primary.lightText54,
                    marginLeft: 6,
                  }}
                />
                <Typography
                  style={{
                    color: theme.palette.primary.lightText60,
                    marginLeft: 6,
                    fontWeight: theme.fontWeight.weight400,
                    fontSize: 12,
                  }}
                >
                  Visitor Pass /
                </Typography>

                <PersonAdd
                  style={{
                    width: theme.width.width12,
                    color: "#212121",
                    marginLeft: 6,
                  }}
                />
                <Typography
                  style={{
                    color: theme.palette.primary.lightText87,
                    marginLeft: 6,
                    fontWeight: theme.fontWeight.weight400,
                    fontSize: 12,
                  }}
                >
                  Add Visit
                </Typography>
              </h5>
            </div>
          </div>

          {/* Radio Button */}
          <div className="flex mt-8 items-center mb-3">
            <span className="mr-5 ml-4 ">
              <Typography
                style={{
                  color: theme.palette.primary.lightText60,
                  fontSize: 12,
                }}
              >
                Visitor for :{" "}
              </Typography>
            </span>
            <div className="flex items-center  mx-2">
              <RadioButtonComp
                value={"self"}
                checked={addVisitState.visitorFor === "self"}
                onChange={visitorforChange}
                label={"Self"}
                name={"visitorFor"}
              />
            </div>
            <div className="flex items-center  mx-2">
              <RadioButtonComp
                value={"others"}
                checked={addVisitState.visitorFor === "others"}
                onChange={visitorforChange}
                label={"Others"}
                name={"visitorFor"}
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

                  <div
                    className={`border-t flex items-center justify-between text-[10px] font-medium border-b text-blue-500 text-[${theme.palette.primary.main}] py-1`}
                  >
                    <div className="">
                      <p>KUSH031 - 10022085 - Kush Marvania</p>
                      <p>IT Department - Hybrids Labs</p>
                    </div>

                    <button>SELECT</button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap mt-3">
              <div className="md:w-1/3 pr-3 w-full mb-5 md:mb-0">
                <SelectInput
                  options={locations}
                  onChange={visitingLocationChange}
                  label={"Visiting Location"}
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

          <div className="mb-6">
            {/* Radio Button */}
            <div className="flex items-center mb-6">
              <span className="mr-5 ml-4 text-gray-500">Visitor type : </span>
              <div className="flex items-center  mx-2">
                <RadioButtonComp
                  value={"visitor"}
                  checked={addVisitState.visitorType === "visitor"}
                  onChange={visitorTypeChange}
                  label={"Visitor"}
                  name={"visitorType"}
                />
              </div>
              <div className="flex items-center  mx-2">
                <RadioButtonComp
                  value={"vendor"}
                  checked={addVisitState.visitorType === "vendor"}
                  onChange={visitorTypeChange}
                  label={"Vendor"}
                  name={"visitorType"}
                />
              </div>
            </div>

            <div className="w-full">
              <div className="md:w-1/3 pr-3">
                {addVisitState.visitorType == "visitor" && (
                  <SelectInput
                    options={visitorSubTypeList}
                    onChange={visitorSubTypeChange}
                    label={"Visitor Sub-Type"}
                  />
                )}
                {addVisitState.visitorType === "vendor" && (
                  <SelectInput
                    options={vendorSubTypeList}
                    onChange={visitorSubTypeChange}
                    label={"Visitor Sub-Type"}
                  />
                )}
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
                <DateTime
                  label={"Visit Initiation"}
                  helperText="24-Hour Clock"
                  current
                />
              </div>
              <div className="md:w-1/3 pr-3">
                <DateTime label={"Valid Until"} helperText="24-Hour Clock" />
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
                <Typography
                  style={{
                    color: theme.palette.primary.lightText87,
                    fontSize: 12,
                  }}
                >
                  Add a single point of contact (Authorize and individual
                  visitors to add other visitors)?
                </Typography>
              </div>
            )}

            {true && (
              <div className="w-full my-6">
                <div className="md:w-1/3 pr-3">
                  <SelectInput
                    onChange={noOfVisitorChange}
                    label={"Number of Visitor"}
                    options={[1, 2, 3, 4, 5]}
                  />
                </div>
              </div>
            )}
            {addVisitState.visitorType === "visitor" && (
              <>
                <div className="my-3 mx-3">
                  <Typography
                    style={{
                      color: theme.palette.primary.lightText47,
                      fontSize: 12,
                    }}
                  >
                    Note: If a visitor carries a laptop and require an internet
                    access. Please tick internet and duration. (Only those
                    carries laptop will be issued wifi access key)
                  </Typography>
                </div>
                <div className="flex items-center my-3">
                  <Checkbox
                    {...label}
                    size="small"
                    onChange={wifiRequiredChange}
                  />
                  <Typography
                    style={{
                      color: theme.palette.primary.lightText87,
                      fontSize: 12,
                    }}
                  >
                    Wi-Fi Access Required?
                  </Typography>
                </div>
                <div className="md:w-1/3 pr-3">
                  {addVisitState.isWifiRequired && (
                    <SelectInput
                      label={"Wifi Required Duration"}
                      options={wifiDurationList}
                    />
                    // <span></span>
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
                <Typography
                  style={{
                    color: theme.palette.primary.zBlack,
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  Visitor's List
                </Typography>

                <Typography
                  style={{
                    color: theme.palette.primary.lightText47,
                    fontSize: 10,
                    fontWeight: 400,
                  }}
                >
                  Enter Mobile Number or Email to fetch the details if available
                </Typography>
              </div>
              <div className="">
                <Button
                  size="small"
                  style={{
                    fontSize: 10,
                    marginRight: 5,
                    backgroundColor: theme.palette.primary.main,
                  }}
                  variant="contained"
                  startIcon={<DownloadIcon />}
                >
                  Download CSV Format
                </Button>
                <Button
                  size="small"
                  style={{
                    fontSize: 10,
                    backgroundColor: theme.palette.primary.main,
                  }}
                  variant="contained"
                  startIcon={<UploadFileIcon />}
                >
                  Upload CSV Format
                </Button>
              </div>
            </div>
            <div className="my-6">
              <VisitorListTable tableSize={addVisitState.noOfVisitor} />
            </div>

            <Button
              size="medium"
              style={{
                fontSize: 10,
                backgroundColor: theme.palette.primary.main,
              }}
              variant="contained"
              // startIcon={<DownloadIcon />}
            >
              Add Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVisit;
