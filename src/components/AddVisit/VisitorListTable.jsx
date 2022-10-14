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
import { Grid, TextField, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import SelectInput from "./AddVisit/SelectInput";
import TableDataCell from "./TableDataCell";
import { useSelector } from "react-redux";

function createData(id, mobile, email, visitorName, govUid, dob) {
  return { id, mobile, email, visitorName, govUid, dob };
}

function generateRows(length, singlePointOfContact) {
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
            padding: 1,
          },
        }}
      >
        <hr />

        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: 10,
          }}
        >
          <TableCell align="left" style={{ width: "5%" }}>
            <span className="text-[10px]">0{i}</span>
          </TableCell>

          <TableDataCell
            inputType={"number"}
            width={"22%"}
            hasSelect
            selectValue={"+91"}
            hasIcon
          />

          <TableDataCell width={"22%"} hasIcon />
          <TableDataCell width={"18%"} hasSelect selectValue={"Mr ."} />
          <TableDataCell width={"18%"} hasSelect inputType={"number"} selectValue={"UIDAI"} />

          <TableDataCell width={"10%"} inputType={"date"} />

          <TableCell align="left" style={{ width: "5%" }}>
            <SyncOutlinedIcon sx={{ rotate: "90deg", fontSize: 18 }} />
          </TableCell>
        </Grid>

        <Grid>
          <div className="px-3 pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maxime
            doloribus a!
          </div>
        </Grid>

      </TableRow>
    );
  }
  return rows;
}

export default function VisitorListTable({ tableSize }) {
  const addVisitState = useSelector((store) => store.addVisit);
  const { singlePointOfContact } = addVisitState;
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
                gap: 10,
              }}
            >
              <TableCell
                align="left"
                style={{
                  width: "5%",
                }}
              >
                <span className="font-semibold text-[10px]">ID</span>
              </TableCell>
              <TableCell align="left" style={{ width: "22%" }}>
                <span className="font-semibold text-[10px]">Mobile No</span>{" "}
                <span className="font-light text-[10px] text-gray-500">
                  (optional)
                </span>
              </TableCell>
              <TableCell align="left" style={{ width: "22%" }}>
                <span className="font-semibold text-[10px]">Email</span>
              </TableCell>
              <TableCell align="left" style={{ width: "18%" }}>
                <span className="font-semibold text-[10px]">Visitor Name</span>{" "}
                <span className="font-light text-[10px] text-gray-500">
                  (optional)
                </span>
              </TableCell>
              <TableCell align="left" style={{ width: "18%" }}>
                <span className="font-semibold text-[10px]">Gov ID Number</span>{" "}
                <span className="font-light text-[10px] text-gray-500">
                  (optional)
                </span>
              </TableCell>
              <TableCell align="left" style={{ width: "10%" }}>
                <span className="font-semibold text-[10px]">DOB</span>{" "}
                {/* <span className="font-light text-[10px] text-gray-500">
                  (Is above 18? - optional)
                </span> */}
              </TableCell>
              <TableCell align="left" style={{ width: "5%" }}>
                <span className="font-semibold text-[10px]">Reset</span>
              </TableCell>
            </Grid>
            
          </TableRow>
        </TableHead>
        <TableBody>{generateRows(tableSize, singlePointOfContact)}</TableBody>
      </Table>
    </TableContainer>
  );
}
