import React from "react";
import "./navbar.css";
import { GiCctvCamera } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="m-6 flex  font-bold">
      <div className="flex basis-4/6 ">
        <div className=" text-4xl  underline ">Security. </div>
        <GiCctvCamera />
      </div>
      <div className="flex text-2xl pt-2 gap-x-12 ">
        <div>Records</div>
        <div>About</div>
        <div>Notifications</div>
      </div>
      <div className="border-2 rounded-full w-12 h-12 ml-14"></div>
    </div>
  );
};

export default Navbar;
