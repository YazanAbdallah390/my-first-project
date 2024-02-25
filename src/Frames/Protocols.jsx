import React from "react";
import Linechart from "../Charts/Linechart";

const Protocols = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col gap-24 m-5 justify-center items-center">
        <h1 className="font-bold text-white">
          The Network You Are Managing is working with NAME Protocol.
        </h1>
        <span className="text-warmGray-100">
          You Can View The Effects of This Protocol on the Network with the
          Diagram:
        </span>
        <div>
          <div className="font-bold text-warmGray-100">Try Another Protocol:</div>
          <input className="h-16 w-64 outline-none rounded-sm p-2" />
          <button className=" bg-slate-400 p-5 rounded-xl font-bold ml-4">
            Try
          </button>
        </div>
      </div>
      <div className="bg-[rgb(255,249,249)] w-1/2 border-4 border-black m-5">
        <Linechart />
      </div>
    </div>
  );
};

export default Protocols;
