import React from "react";
import "./navbar.css";
import { GiCctvCamera } from "react-icons/gi";
import useSound from "use-sound"; 
import Sound from "../../assets/wave.mp3"

const Navbar = () => {
  const soundUrl = Sound;
  const [play] = useSound(soundUrl); 

  return (
    <div className="m-6 flex  font-bold">
      <div className="flex basis-4/6 ">
        <div
          className="text-4xl  underline cursor-pointer "
          onMouseEnter={play} 
        >
          Security.{" "}
        </div>
        <GiCctvCamera />
      </div>
      <div className="flex text-2xl pt-2 gap-x-12 ">
        <div className="hover:text-[#676f9d] cursor-pointer" onMouseEnter={play} >Records</div>
        <div className="hover:text-[#676f9d] cursor-pointer" onMouseEnter={play} >About</div>
        <div className="hover:text-[#676f9d] cursor-pointer" onMouseEnter={play} >Notifications</div>
      </div>
      <div className="border-2 rounded-full w-12 h-12 ml-14 cursor-pointer" onMouseEnter={play}></div>
    </div>
  );
};

export default Navbar;
