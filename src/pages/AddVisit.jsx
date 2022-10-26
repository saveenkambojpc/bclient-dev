import PersonAdd from "@mui/icons-material/PersonAdd";
import { Alert, Button, Checkbox, Divider, Typography } from "@mui/material";

import React, { useEffect, useRef, useState } from "react";
import DateTime from "../components/helper/DateTime";
import { useSelector, useDispatch } from "react-redux";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import addVisit, {
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
  visitIntiation,
  visitorList,
  visitUntilChange,
  employeeSearchChange,
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
import dayjs from "dayjs";

const AddVisit = () => {
  const [options, setOption] = React.useState();
  const dispatch = useDispatch();
  const addVisitState = useSelector((store) => store.addVisit);

  const visitorforChange = (e) => {
    dispatch(visitorFor());
  };

  const visitingLocationChange = (event, newInputValue) => {
    dispatch(visitingLocation(newInputValue));
  };

  const buildingNameChange = (e, newInputValue) => {
    dispatch(buildingName(newInputValue));
  };

  const visitorTypeChange = (e) => {
    dispatch(visitorType());
  };

  const wifiRequiredChange = (e) => {
    dispatch(wifiRequired());
  };

  const noOfVisitorChange = (e, newInputValue) => {
    dispatch(noOfVisitor(newInputValue));
    let temp = [];

    for (let i = 1; i <= newInputValue; i++) {
      let obj = {
        visitor_id: i,
        name: "",
        company: "",
        email: "",
        country_code: 0,
        phone_number: "",
        visitor_type: addVisitState.visitorType,
        visitor_subtype: addVisitState.visitorSubType,
        gov_id_type: "",
        gov_id_number: "",
        date_of_birth: "",
      };

      temp.push(obj);
    }
    dispatch(visitorList(temp));
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

  const validUntilChange = (newValue) => {
    dispatch(visitUntilChange(newValue));
  };

  // Add Visit Form Request
  const addVisitSubmit = (e) => {
    e.preventDefault();

    const {
      visitorFor,
      visitorType,
      isWifiRequired,
      visitingLocation,
      buildingName,
      visitorSubType,
      visitIntiation,
      visitUntil,
      purposeOfVisit,
      visitorCompanyAddress,
      singlePointOfContact,
      noOfVisitor,
      visitorList,
      attendance_location,
      wifi_duration,
    } = addVisitState;

    const data = {
      to_meet_employee_id: 0,
      visit_location: visitingLocation,
      building_name: buildingName,
      attendance_location: attendance_location,
      date_of_issue: visitIntiation,
      valid_until: visitUntil,
      visit_purpose: purposeOfVisit,
      is_spoc: singlePointOfContact,
      spoc_id: 0,
      no_of_visitors: noOfVisitor,
      wifi_required: isWifiRequired,
      wifi_duration: wifi_duration,
      visitors_list: visitorList,
    };

    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(
      "https://8000-prabal01pat-bioconfacer-5nq1bla1xl5.ws-us72.gitpod.io/create_visit",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  // Employee Search Functionality
  const handleEmployeeSearchChange = (event) => {
    console.log(event.target.value);
    dispatch(employeeSearchChange(event.target.value));
  };

  const handleEmployeeSearchClick = () => {
    console.log("you clicked on search")
  };

  const handleVisitorSearchByPhone = () => {
    console.log("val is ", addVisitState.employeeSearch);

    const searchItem = addVisitState.employeeSearch;

    // Get Request
    fetch(
      `https://8000-prabal01pat-bioconfacer-5nq1bla1xl5.ws-us72.gitpod.io/query_visitor?phone=${searchItem}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  React.useEffect(() => {
    dispatch(visitIntiation(dayjs()));
    fetch("http://localhost:5000/api/fetch/options")
      .then((res) => res.json())
      .then((options) => {
        setOption(options);
      });
  }, []);

  // For Add Visit button disable and enable
  const isVisitorListFilled = addVisitState.visitorList.every((item) => {
    return (
      item.mobile !== "" &&
      item.email !== "" &&
      item.visitorName !== "" &&
      item.govId !== "" &&
      item.dob !== ""
    );
  });

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="">
      <Sidebar />
      <div className="ml-52 md:pl-20 pr-4 pl-4">
        <Header />

        <div className=" w-full  mt-6 text-xs ">
          <div className="row  my-3">
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

          <form onSubmit={addVisitSubmit} autoCorrect={false}>
            {/* Visitor for : Self , Other */}
            <div className="flex items-center mb-3">
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

            <div className=" mb-6">
              {addVisitState.visitorFor === "others" && (
                <div className="md:w-1/3 pr-3 ">
                  <SearchTextField
                    helperText={
                      "Search for Employee Using Employee Name / Employee Name"
                    }
                    onChange={handleEmployeeSearchChange}
                    placeholder="To Meet"
                    onClick={handleEmployeeSearchClick}
                    value={addVisitState.searchEmployee}
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
                    options={options ? options.locations : []}
                    onChange={visitingLocationChange}
                    label={"Visiting Location"}
                  />
                </div>
                <div className="md:w-1/3 pr-3 w-full mb-5 md:mb-0">
                  <SelectInput
                    options={options ? options.buildings : []}
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

            {/* Divider */}
            <div className="">
              <Divider />
            </div>

            <div className="mt-3">
              {/* Radio Button */}
              <div className="flex items-center mb-3">
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
                  {addVisitState.visitorType === "visitor" && (
                    <SelectInput
                      options={options ? options.visitorSubType : []}
                      onChange={visitorSubTypeChange}
                      label={"Visitor Sub-Type"}
                      value={addVisitState.visitorSubType}
                    />
                  )}
                  {addVisitState.visitorType === "vendor" && (
                    <SelectInput
                      options={options ? options.vendorSubType : []}
                      onChange={visitorSubTypeChange}
                      label={"Visitor Sub-Type"}
                    />
                  )}
                </div>

                {addVisitState.visitorSubType === "Other" && (
                  <div className="md:w-1/3 pr-3 mt-6">
                    <TextInput
                      onChange={visitorSubType}
                      label="Specify Sub Type"
                    />
                  </div>
                )}

                {/* Warehouse Details */}
                {addVisitState.visitorSubType === "Truck Driver" && (
                  <div className="my-4">
                    <Divider />
                    <h5 className="my-3 px-3 font-semibold">
                      Warehouse Details
                    </h5>
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
                    readOnly
                  />
                </div>
                <div className="md:w-1/3 pr-3">
                  <DateTime
                    label={"Visit Until"}
                    helperText="24-Hour Clock"
                    onChange={validUntilChange}
                    value={addVisitState.visitUntil}
                    disablePast
                  />
                </div>
              </div>

              <div className="w-full flex flex-wrap">
                <div className="md:w-1/3 pr-3 w-full my-6 md:mb-0">
                  <SelectInput
                    label={"Purpose of Visit"}
                    onChange={purposeOfVisitChange}
                    options={options ? options.purposeOfVisit : []}
                    defaultValue={addVisitState.purposeOfVisit}
                  />
                </div>

                <div className="md:w-1/3 pr-3 w-full my-6 md:mb-0">
                  {addVisitState.visitorType === "visitor" ? (
                    <TextInput
                      onChange={visitorCompanyAddressChange}
                      label={"Visitor Company Address (Optional)"}
                      value={addVisitState.visitorCompanyAddress}
                    />
                  ) : (
                    <TextInput
                      onChange={visitorCompanyAddressChange}
                      label={"Visitor Company Address"}
                      required
                      value={addVisitState.visitorCompanyAddress}
                    />
                  )}
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
                <div className="w-full my-4">
                  <div className="md:w-1/3 pr-3">
                    <SelectInput
                      onChange={noOfVisitorChange}
                      label={"Number of Visitor"}
                      options={
                        options ? options.noOfVisitor : ["1", "2", "3", "4", ""]
                      }
                      value={addVisitState.noOfVisitor}
                      defaultValue={addVisitState.noOfVisitor}
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
                      Note: If a visitor carries a laptop and require an
                      internet access. Please tick internet and duration. (Only
                      those carries laptop will be issued wifi access key)
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
                        options={options ? options.wifiDuration : []}
                      />
                    )}
                  </div>
                </>
              )}
            </div>

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
                    Enter Mobile Number or Email to fetch the details if
                    available
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
                type="submit"
                size="small"
                name="addvisitsubmit"
                variant="contained"
                disabled={
                  !addVisitState.visitingLocation ||
                  !addVisitState.buildingName ||
                  !addVisitState.visitorSubType ||
                  !addVisitState.noOfVisitor ||
                  !isVisitorListFilled
                }
              >
                Add Visit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVisit;
