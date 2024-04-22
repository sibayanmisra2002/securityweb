import React, { useState, useEffect } from "react";
import "./criminal.css";
import axios from "axios"; // Import Axios for making HTTP requests

const Criminal = () => {
  const [criminalData, setCriminalData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/people");
        setCriminalData(response.data);
      } catch (error) {
        console.error("Error fetching criminal data:", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="relative">
      {/* Check if criminalData is available */}
      {criminalData.map((criminal) => (
        <div key={criminal.id} className="criminal border-2 border-dashed bg-[#424769] rounded-md m-14 p-20 flex text-2xl relative">
          <div className="basis-1/4">
            <img
              className="h-96"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ted_Bundy_headshot.jpg/431px-Ted_Bundy_headshot.jpg"
              alt="Criminal"
            />
          </div>
          <div className="basis-3/4">
            <div className="mb-8">
              <div className="italic font-bold mb-4 underline">Description</div>
              <div>
                <div>Record Date: {criminal.record_date}</div>
                <div>Arrest Name : {criminal.name}</div>
                <div>Native Place : {criminal.native_place}</div>
                <div>Date of Birth : {criminal.dob}</div>
              </div>
            </div>
            <div className="border-2 p-6 rounded-md bg-[#676f9d]">
              <div className="italic font-bold mb-4 underline">Criminal Record</div>
              <div>{criminal.criminal_record}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Criminal;
