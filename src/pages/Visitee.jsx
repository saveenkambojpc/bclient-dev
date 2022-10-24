import { Button, Typography } from "@mui/material";
import React from "react";
import Logo from "../components/helper/Logo";
import TextInput from "../components/helper/TextInput";
import { theme } from "../components/helper/Theme";
import VisitorDetails from "../components/Visitee/VisitorDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Visitee = () => {
  const { id } = useParams();

  const [data, setData] = React.useState({});

  const dispatch = useDispatch();
  const addVisitState = useSelector((store) => store.addVisit);

  React.useEffect(() => {
    fetch("http://localhost:5000/api/fetch/getVisitorList?id=3434")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log("Data is ", data);
      });
  }, []);

  return (
    <div className="md:w-3/4 m-auto w-full flex flex-wrap my-12 md:px-0 px-3 ">
      <div className="left md:fixed w-full">
        <div className="my-6 text-center md:text-left ">
          <Logo />
          <Typography
            style={{
              fontSize: 16,
              color: theme.palette.primary.lightText87,
              fontWeight: 500,
            }}
          >
            Visit Invite
          </Typography>
        </div>
        <div className="">
          <Typography
            style={{
              color: theme.palette.primary.lightText87,
              fontWeight: 400,
              fontSize: 11,
            }}
          >
            Sent By: Hailey Patel
          </Typography>
          <Typography
            style={{
              color: theme.palette.primary.lightText87,
              fontWeight: 400,
              fontSize: 11,
            }}
          >
            Visit from 13-09-2020 05:00 to 16-09-2022 13:30
          </Typography>
          <Typography
            style={{
              color: theme.palette.primary.lightText87,
              fontWeight: 400,
              fontSize: 11,
            }}
          >
            SPOC: Mr Saveen Kamboj
          </Typography>
          <Typography
            style={{
              color: theme.palette.primary.lightText87,
              fontWeight: 400,
              fontSize: 11,
            }}
          >
            SPOC mobile number : +91 28934 39495
          </Typography>
        </div>
      </div>
      <div className="right w-full md:ml-80 md:pl-4 ">
        <div className="mb-6 ">
          <Typography
            style={{
              fontSize: 10,
              color: theme.palette.primary.lightText60,
              fontWeight: 500,
            }}
          >
            Note: You can add only {data.noOfVisitor} visitors
          </Typography>
        </div>

        <div className="w-full md:w-1/2 md:pr-3 mb-6">
          <TextInput label="Company's Name/Address" />
        </div>
        
        {data.visitorList && data.visitorList.map(item => <VisitorDetails data={item} key={item.id} no={item.id} /> )}
        
        {/* <VisitorDetails no={2} />
        <VisitorDetails no={3} /> */}

        <Button variant="contained" style={{ fontSize: 10 }} size="small">
          Complete Visit Invite
        </Button>
      </div>
    </div>
  );
};

export default Visitee;
