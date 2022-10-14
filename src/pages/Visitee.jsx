import React from "react";
import Logo from "../components/helper/Logo";

const Visitee = () => {
  return (
    <div className="md:w-3/4 m-auto border w-full flex flex-wrap">
      <div className="left md:w-1/3 border">
        <Logo />

        <div className="">
            <h4>Visit Initiation</h4>
            <div className="text-xs font-medium text-[#3d3d3d]">
                <p>Sent By: Hailey Patel</p>
                <p>Visit from 13-09-2020 05:00 to 16-09-2022 13:30</p>
                <p>SPOC: Mr Saveen Kamboj</p>
                <p>SPOC mobile number : +91 28934 39495</p>
            </div>
        </div>
      </div>
      <div className="right md:w-2/3 border w-full bg-purple-100">
        Right Part
      </div>
    </div>
  );
};

export default Visitee;
