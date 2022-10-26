import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import { Button, Grid, TextField, Typography } from "@mui/material";
import TableDataCell from "./TableDataCell";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../helper/Theme";
import { RawOff } from "@mui/icons-material";
import addVisit, { visitorList } from "../../redux/features/addVisit";

function generateRows(
  visitorList,
  length,
  singlePointOfContact,
  noOfVisitor,
  mobileNumberChange,
  emailChange,
  visitorNameChange,
  govIdChange,
  dobChange,
  resetHandler,
  clearWholeTableHandle
) {
  const handleSearchPhone = (v) => {
    query_visitor("phone", v);
  };
  const handleSearchEmail = (v) => {
    query_visitor("email", v);
  };

  const query_visitor = (type, value) => {
    fetch(
      `https://8000-prabal01pat-bioconfacer-5nq1bla1xl5.ws-us72.gitpod.io/query_visitor?${type}=${value}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  if (singlePointOfContact) {
    length = 1;
  }
  const rows = [];

  for (let i = 1; i <= length; i++) {
    rows.push(
      <TableRow
        key={i}
        sx={{
          "& .css-1ex1afd-MuiTableCell-root": {
            border: 0,
            padding: "12px 10px",
          },
        }}
      >
        <hr />

        <Grid
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: 6,
          }}
        >
          <TableCell
            align="left"
            style={{ width: "3%", display: "flex", alignItems: "center" }}
          >
            <Typography
              style={{
                fontSize: 10,
                color: theme.palette.primary.lightText87,
              }}
            >
              0{i}
            </Typography>
          </TableCell>

          <TableDataCell
            inputType={"number"}
            width={"20%"}
            selectValue={"+91"}
            onChange={mobileNumberChange}
            inputName={`mobileNumber-id${i}`}
            hasSelect
            paddingLeft
            hasIcon
            inputValue={
              visitorList.length !== 0 && visitorList[i - 1].phone_number
            }
            onClick={() => {
              handleSearchPhone(visitorList[i - 1].phone_number);
            }}
          />

          <TableDataCell
            inputType={"email"}
            width={"18%"}
            onChange={emailChange}
            inputName={`email-id${i}`}
            hasIcon
            inputValue={visitorList.length !== 0 && visitorList[i - 1].email}
            onClick={() => {
              handleSearchEmail(visitorList[i - 1].email);
            }}
          />
          <TableDataCell
            width={"18%"}
            hasSelect
            selectValue={"Mr ."}
            inputType={"text"}
            paddingLeft
            onChange={visitorNameChange}
            inputName={`visitorName-id${i}`}
            inputValue={visitorList.length !== 0 && visitorList[i - 1].name}
          />
          <TableDataCell
            width={"20%"}
            hasSelect
            inputType={"number"}
            selectValue={"UIDAI"}
            paddingLeft
            onChange={govIdChange}
            inputName={`govId-id${i}`}
            inputValue={
              visitorList.length !== 0 && visitorList[i - 1].gov_id_number
            }
          />

          <TableDataCell
            width={"16%"}
            inputType={"date"}
            onChange={dobChange}
            inputName={`dob-id${i}`}
            inputValue={
              visitorList.length !== 0 && visitorList[i - 1].date_of_birth
            }
          />

          <TableCell
            align="left"
            style={{
              width: "5%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SyncOutlinedIcon
              onClick={resetHandler}
              id={`reset-id${i}`}
              sx={{ rotate: "90deg", fontSize: 18, cursor: "pointer" }}
            />
          </TableCell>
        </Grid>

        <Grid>
          {false && (
            <div className="px-3 pb-1">
              <Typography
                style={{ fontSize: 10, color: theme.palette.primary.main }}
              >
                Registered Visitor Found - Fields Autofield
              </Typography>
            </div>
          )}
          {false && (
            <div className="px-3 pb-1">
              <Typography
                style={{ fontSize: 10, color: theme.palette.primary.danger }}
              >
                No Visitor Found - Please Fill the Details Manually
              </Typography>
            </div>
          )}

          {false && (
            <div className="px-3 pb-1">
              <Typography
                style={{ fontSize: 10, color: theme.palette.primary.danger }}
              >
                Vendor Age Cannot be Below 16 Years
              </Typography>
            </div>
          )}
        </Grid>
      </TableRow>
    );
  }

  if (noOfVisitor) {
    rows.push(
      <TableRow
        sx={{
          "& .css-1ex1afd-MuiTableCell-root": {
            border: 0,
            padding: 1,
          },
        }}
      >
        <hr />
        <Grid
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <TableCell align="right" style={{ border: 1, padding: 10 }}>
            <Button
              size="medium"
              style={{
                fontSize: 10,
                textTransform: "none",
              }}
              variant="text"
              onClick={clearWholeTableHandle}
            >
              <Typography
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  color: theme.palette.primary.lightText87,
                }}
              >
                Clear Whole Table
              </Typography>
            </Button>
          </TableCell>
        </Grid>
      </TableRow>
    );
  }

  return rows;
}

export default function VisitorListTable({ tableSize }) {
  const addVisitState = useSelector((store) => store.addVisit);
  const {
    singlePointOfContact,
    noOfVisitor,
    visitorList: visitorListArr,
  } = addVisitState;

  const dispatch = useDispatch();

  const mobileNumberChange = (e) => {
    // Extract id from name
    console.log("onchange firedmobile is ", e.target.value);
    const id = parseInt(e.target.name.slice(-1));
    const updatedArr = [];

    for (const item of addVisitState.visitorList) {
      if (item.visitor_id === id) {
        updatedArr.push({ ...item, phone_number: e.target.value });
      } else {
        updatedArr.push(item);
      }
    }
    dispatch(visitorList(updatedArr));
  };

  const emailChange = (e) => {
    console.log("onChange firedemail is ", e.target.value);
    const id = parseInt(e.target.name.slice(-1));
    const updatedArr = [];

    for (const item of addVisitState.visitorList) {
      if (item.visitor_id === id) {
        updatedArr.push({ ...item, email: e.target.value });
      } else {
        updatedArr.push(item);
      }
    }

    dispatch(visitorList(updatedArr));
  };
  const visitorNameChange = (e) => {
    const id = parseInt(e.target.name.slice(-1));
    const updatedArr = [];

    for (const item of addVisitState.visitorList) {
      if (item.visitor_id === id) {
        updatedArr.push({ ...item, name: e.target.value });
      } else {
        updatedArr.push(item);
      }
    }
    dispatch(visitorList(updatedArr));
  };
  const govIdChange = (e) => {
    const id = parseInt(e.target.name.slice(-1));
    const updatedArr = [];

    for (const item of addVisitState.visitorList) {
      if (item.visitor_id === id) {
        updatedArr.push({ ...item, gov_id_number: e.target.value });
      } else {
        updatedArr.push(item);
      }
    }
    dispatch(visitorList(updatedArr));
  };
  const dobChange = (e) => {
    const id = parseInt(e.target.name.slice(-1));
    const updatedArr = [];

    for (const item of addVisitState.visitorList) {
      if (item.visitor_id === id) {
        updatedArr.push({ ...item, date_of_birth: e.target.value });
      } else {
        updatedArr.push(item);
      }
    }
    dispatch(visitorList(updatedArr));
  };

  const resetHandler = (e) => {
    const id = parseInt(e.target.id.slice(-1));
    const updatedArr = [];

    for (const item of addVisitState.visitorList) {
      if (item.visitor_id === id) {
        updatedArr.push({
          id: id,
          phone_number: "",
          email: "",
          name: "",
          gov_id_number: "",
          date_of_birth: "",
        });
      } else {
        updatedArr.push(item);
      }
    }

    dispatch(visitorList(updatedArr));
  };

  const clearWholeTableHandle = () => {
    const updatedArr = [];

    for (let i = 1; i <= addVisitState.visitorList.length; i++) {
      updatedArr.push({
        id: i,
        mobile: "",
        email: "",
        visitorName: "",
        govId: "",
        dob: "",
      });
    }

    dispatch(visitorList(updatedArr));
  };

  return (
    <TableContainer component={Paper} style={{ boxShadow: "none" }}>
      <Table
        sx={{
          minWidth: 650,
          border: 1,
          borderColor: "inherit",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow
            sx={{
              "& .css-1ygcj2i-MuiTableCell-root": {
                padding: 1,
                borderBottom: 0,
              },
            }}
          >
            <Grid
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <TableCell
                align="left"
                style={{
                  width: "3%",
                }}
              >
                <Typography
                  style={{
                    color: theme.palette.primary.lightText87,
                    fontWeight: theme.fontWeight.weight500,
                    fontSize: 10,
                    letterSpacing: theme.letterSpacing.spacing17,
                  }}
                >
                  ID
                </Typography>
              </TableCell>
              <TableCell align="left" style={{ width: "20%" }}>
                <Typography
                  style={{
                    color: theme.palette.primary.lightText87,
                    fontWeight: theme.fontWeight.weight500,
                    fontSize: 10,
                    letterSpacing: theme.letterSpacing.spacing17,
                  }}
                >
                  Mobile No
                  <Typography
                    component={"span"}
                    style={{
                      display: "inline",
                      fontWeight: theme.fontWeight.weight300,
                      fontSize: 10,
                    }}
                  >
                    (optional)
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell align="left" style={{ width: "18%" }}>
                <Typography
                  style={{
                    color: theme.palette.primary.lightText87,
                    fontWeight: theme.fontWeight.weight500,
                    fontSize: 10,
                    letterSpacing: theme.letterSpacing.spacing17,
                  }}
                >
                  Email
                </Typography>
              </TableCell>
              <TableCell align="left" style={{ width: "18%" }}>
                <Typography
                  style={{
                    color: theme.palette.primary.lightText87,
                    fontWeight: theme.fontWeight.weight500,
                    fontSize: 10,
                    letterSpacing: theme.letterSpacing.spacing17,
                  }}
                >
                  Visitor's Name
                  <Typography
                    component={"span"}
                    style={{
                      display: "inline",
                      fontWeight: theme.fontWeight.weight300,
                      fontSize: 10,
                    }}
                  >
                    (optional)
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell align="left" style={{ width: "20%" }}>
                <Typography
                  style={{
                    color: theme.palette.primary.lightText87,
                    fontWeight: theme.fontWeight.weight500,
                    fontSize: 10,
                    letterSpacing: theme.letterSpacing.spacing17,
                  }}
                >
                  Gov ID Number
                  <Typography
                    component={"span"}
                    style={{
                      display: "inline",
                      fontWeight: theme.fontWeight.weight300,
                      fontSize: 10,
                      letterSpacing: "inherit",
                    }}
                  >
                    (optional)
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell align="left" style={{ width: "16%" }}>
                <Typography
                  style={{
                    color: theme.palette.primary.lightText87,
                    fontWeight: theme.fontWeight.weight500,
                    fontSize: 10,
                    letterSpacing: theme.letterSpacing.spacing17,
                  }}
                >
                  DOB
                  <Typography
                    component={"span"}
                    style={{
                      display: "inline",
                      fontWeight: theme.fontWeight.weight300,
                      fontSize: 10,
                      letterSpacing: "inherit",
                    }}
                  >
                    (Is above 18? - optional)
                  </Typography>
                </Typography>
              </TableCell>
              <TableCell align="left" style={{ width: "5%" }}>
                <Typography
                  style={{
                    color: theme.palette.primary.lightText87,
                    fontWeight: theme.fontWeight.weight500,
                    fontSize: 10,
                    letterSpacing: theme.letterSpacing.spacing17,
                  }}
                >
                  Reset
                </Typography>
              </TableCell>
            </Grid>
          </TableRow>
        </TableHead>

        <TableBody>
          {generateRows(
            visitorListArr,
            tableSize,
            singlePointOfContact,
            noOfVisitor,
            mobileNumberChange,
            emailChange,
            visitorNameChange,
            govIdChange,
            dobChange,
            resetHandler,
            clearWholeTableHandle
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
