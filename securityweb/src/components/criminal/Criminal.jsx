import React from "react";
import "./criminal.css";

const Criminal = () => {
  return (
    <div className="criminal border-2 border-dashed bg-[#424769] rounded-md m-14 p-20 flex text-2xl  ">
      <div className="basis-1/4">
        <img
          className="h-96"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ted_Bundy_headshot.jpg/431px-Ted_Bundy_headshot.jpg"
        />
      </div>
      <div className="basis-3/4">
        <div className="mb-8">
          <div className="italic font-bold mb-4  underline">Description</div>
          <div>
            <div>Record Date: January 31,1978</div>
            <div>Arrest Name : Ted Bundy</div>
            <div>Native Place : Burlington, Vermont, U.S</div>
            <div>Date of Birth : November 24, 1946</div>
          </div>
        </div>
        <div className="border-2 p-6 rounded-md bg-[#676f9d]">
          <div className="italic font-bold mb-4 underline ">Criminal Record</div>
          <div>
          notorious serial killer responsible for the murders of young women and girls in the 1970s
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criminal;
