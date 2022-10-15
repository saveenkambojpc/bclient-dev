import { Button, Typography } from "@mui/material";
import React from "react";
import Logo from "../components/helper/Logo";
import TextInput from "../components/helper/TextInput";
import { theme } from "../components/helper/Theme";
import VisitorDetails from "../components/Visitee/VisitorDetails";

const Visitee = () => {
  return (
    <div className="md:w-3/4 m-auto  w-full flex flex-wrap my-12 ">
      <div className="left md:w-80  pl-3 md:fixed">
        <Logo />

        <div className="my-6">
          <Typography style={{fontWeight:600, color:theme.palette.primary.black}}>Visit Invite</Typography>
        </div>
        <div className="">
          <Typography style={{ fontSize: 12 }}>
            Sent By: Hailey Patel
          </Typography>
          <Typography style={{ fontSize: 12 }}>
            Visit from 13-09-2020 05:00 to 16-09-2022 13:30
          </Typography>
          <Typography style={{ fontSize: 12 }}>
            SPOC: Mr Saveen Kamboj
          </Typography>
          <Typography style={{ fontSize: 12 }}>
            SPOC mobile number : +91 28934 39495
          </Typography>
        </div>
      </div>
      <div className="right md:w-2/3  w-full pl-2 md:ml-80 ">
        <div className="mb-6 ">
          <Typography
            style={{ fontSize: 10, color: theme.palette.primary.muted }}
          >
            Note: You can add only 3 visitors
          </Typography>
        </div>

        <div className="w-full md:w-1/2 pr-3 mb-6">
          <TextInput label="Company's Name/Address" />
        </div>

        <VisitorDetails no={1} />
        <VisitorDetails no={2} />
        <VisitorDetails no={3} />

        <Button variant="contained" style={{fontSize:10}} size="small">
          Complete Visit Invite
        </Button>
      </div>
    </div>
  );
};

export default Visitee;
