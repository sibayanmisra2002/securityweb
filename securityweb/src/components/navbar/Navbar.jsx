import React from "react";
import "./navbar.css";
import { GiCctvCamera } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="m-6 flex  font-bold">
      <div className="flex basis-4/6 ">
        <div className=" text-4xl  underline cursor-pointer ">Security. </div>
        <GiCctvCamera />
      </div>
      <div className="flex text-2xl pt-2 gap-x-12 ">
        <div className="hover:text-[#676f9d] cursor-pointer">Records</div>
        <div className="hover:text-[#676f9d] cursor-pointer">About</div>
        <div className="hover:text-[#676f9d] cursor-pointer">Notifications</div>
      </div>
      <div className="border-2 rounded-full w-12 h-12 ml-14 cursor-pointer"></div>
    </div>
  );
};

export default Navbar;
