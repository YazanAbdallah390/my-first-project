import React from "react";
import Piechart from "../Charts/PieChart";
import SpeedChart from "../Charts/SpeedChart";
import Barchart from "../Charts/Barchart";

const Board = () => {
  return (
    <div className="flex w-full h-full bg-transparent gap-5 p-2">
      <div className="flex flex-col w-1/2 gap-5">
        <div
          className="flex justify-center items-center h-1/2 bg-opacity-50 backdrop-blur-md bg-black text-white  
       shadow-white shadow-inner  rounded-3xl hover:-translate-y-2 "
        >
          info1
        </div>
        <div className="flex w-full h-1/2 gap-4">
          <div
            className="flex justify-center items-center  text-white  w-1/2
            bg-opacity-50 backdrop-blur-md bg-black hover:-translate-y-2 shadow-white shadow-inner  rounded-3xl "
          >
            <Piechart />
          </div>
          <div
            className="flex w-1/2 bg-opacity-50 backdrop-blur-md bg-black hover:-translate-y-2 shadow-white 
            shadow-inner  rounded-3xl"
          >
            <SpeedChart />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/2 h-full">
        <div
          className="flex justify-center items-center text-white  h-1/2
        bg-opacity-50 backdrop-blur-md bg-black hover:-translate-y-2 shadow-white shadow-inner rounded-3xl "
        >
          <Barchart />
        </div>
        <div
          className="flex  justify-center items-center  text-white  h-1/2
          bg-opacity-50 backdrop-blur-md bg-black hover:-translate-y-2 shadow-white shadow-inner  rounded-3xl "
        >
          info5
        </div>
      </div>
    </div>
  );
};

export default Board;
