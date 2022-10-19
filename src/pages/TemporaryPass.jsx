import { Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import { theme } from "../components/helper/Theme";
import Sidebar from "../components/Sidebar";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonAdd from "@mui/icons-material/PersonAdd";



const TemporaryPass = () => {
  return (
    <div>
      <Sidebar />

      <div className="ml-52 md:pl-20 pr-4 pl-4">
        <Header />

        <div className="mt-6">
          <div className="row  my-6">
            <div className="w-full">
              <Typography
                style={{
                  color: theme.palette.primary.lightText87,
                  fontSize: theme.fontSize.font14,
                  fontWeight: 500,
                }}
              >
                Employee Lost or Forgot ID Card
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
                  Temporary Pass
                </Typography>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemporaryPass;
