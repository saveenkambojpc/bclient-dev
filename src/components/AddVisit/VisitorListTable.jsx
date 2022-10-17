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
// import SearchIcon from "@mui/icons-material/Search";
// import SelectInput from "./AddVisit/SelectInput";
import TableDataCell from "./TableDataCell";
import { useSelector } from "react-redux";
import { theme } from "../helper/Theme";
import { RawOff } from "@mui/icons-material";

function createData(id, mobile, email, visitorName, govUid, dob) {
  return { id, mobile, email, visitorName, govUid, dob };
}

function generateRows(length, singlePointOfContact, noOfVisitor) {
  if (singlePointOfContact) {
    length = 1;
  }
  const rows = [];
  for (let i = 1; i <= length; i++) {
    rows.push(
      <TableRow
        sx={{
          "& .css-1ex1afd-MuiTableCell-root": {
            border: 0,
            padding: "12px 10px",
          },
        }}
      >
        <hr />

        <Grid
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
            hasSelect
            selectValue={"+91"}
            hasIcon
          />

          <TableDataCell width={"18%"} hasIcon />
          <TableDataCell width={"18%"} hasSelect selectValue={"Mr ."} />
          <TableDataCell
            width={"20%"}
            hasSelect
            inputType={"number"}
            selectValue={"UIDAI"}
          />

          <TableDataCell width={"16%"} />

          <TableCell
            align="left"
            style={{
              width: "5%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SyncOutlinedIcon sx={{ rotate: "90deg", fontSize: 18 }} />
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
  const { singlePointOfContact, noOfVisitor } = addVisitState;

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
                gap: 6,
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
          {generateRows(tableSize, singlePointOfContact, noOfVisitor)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
