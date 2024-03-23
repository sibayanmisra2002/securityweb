import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="m-6 flex  font-bold">
      <div className=" text-4xl  underline basis-4/6 ">Security.</div>
      <div className="flex text-2xl pt-2 gap-x-12 ">
        <div>Records</div>
        <div>About</div>
        <div>Notifications</div>
      </div>
    </div>
  );
};

export default Navbar;
