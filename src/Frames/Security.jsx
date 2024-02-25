import React from "react";
import "C:/Users/hasn/Desktop/Network-DashBoard-main/src/Css/ON-OFFButton.css";
import Radarchart from "../Charts/Radarchart";
const Security = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col gap-5 m-4">
        <div className="flex gap-5 h-1/2">
          <div className="flex flex-col w-72 shadow-md shadow-black font-bold justify-between p-5 items-center ">
            <div>firewall</div>
            <input type="checkbox" />
          </div>
          <div className="flex flex-col shadow-md shadow-black w-72 font-bold justify-between p-5 items-center ">
            <div>VPN</div>
            <input type="checkbox" />
          </div>
        </div>
        <div className="flex gap-5 h-1/2">
          <div className="flex flex-col shadow-md shadow-black w-72 font-bold justify-between p-5 items-center ">
            <div>System</div>
            <div>status</div>
          </div>
          <div className="flex flex-col shadow-md shadow-black w-72 font-bold justify-between p-5 items-center ">
            <div>Storage</div>
            <div>Status : Good</div>
            <div>Used : 458.67 GB / 1 TB</div>
            <div className="bg-slate-400 w-full flex h-5">
              <div className="w-[45%] bg-red-700"></div>
              <div className="w-[5%] bg-yellow-700"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800 w-full rounded-3xl m-5 shadow-black shadow-inner">
        <Radarchart />
      </div>
    </div>
  );
};

export default Security;
