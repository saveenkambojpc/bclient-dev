import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import ContentPasteOutlined from "@mui/icons-material/ContentPasteOutlined";
import DateRangeOutlined from "@mui/icons-material/DateRangeOutlined";
import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import People from "@mui/icons-material/People";
import PersonAdd from "@mui/icons-material/PersonAdd";
import ReportProblemOutlined from "@mui/icons-material/ReportProblemOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";
import VisibilityOutlined from "@mui/icons-material/VisibilityOutlined";
import React from "react";
import Logo from "./helper/Logo";

const Sidebar = () => {
  const iconSize = "16px";
  const content = [
    {
      name: "Add Visit",
      component: <PersonAdd sx={{ fontSize: iconSize }} />,
    },
    {
      name: "View My Visitors",
      component: <VisibilityOutlined sx={{ fontSize: iconSize }} />,
    },
    {
      name: "Reports",
      component: <ContentPasteOutlined sx={{ fontSize: iconSize }} />,
    },
    {
      name: "Security View",
      component: <ReportProblemOutlined sx={{ fontSize: iconSize }} />,
    },
    {
      name: "BBRC View",
      component: <DateRangeOutlined sx={{ fontSize: iconSize }} />,
    },
    {
      name: "Masters",
      component: <AccountCircleOutlined sx={{ fontSize: iconSize }} />,
    },
    {
      name: "Impersonate",
      component: <People sx={{ fontSize: iconSize }} />,
    },
    {
      name: "Settings",
      component: <SettingsOutlined sx={{ fontSize: iconSize }} />,
    },
    {
      name: "Logout",
      component: <LogoutOutlined sx={{ fontSize: iconSize }} />,
    },
  ];

  return (
    <div className="w-52 border-r fixed top-0 h-full">
      <div className="py-4 pl-10">
        <Logo />
      </div>
      <h6 className="text-[10px] font-semibold p-2 px-3">Access Bar</h6>
      <ul className="text-xs ">
        {content.map((item, index) => {
          return (
            <li
              key={index}
              className={`flex p-2 px-3 cursor-pointer items-center  ${
                index === 0 ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              } `}
            >
              {item.component}
              <span className="ml-4 ">{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
