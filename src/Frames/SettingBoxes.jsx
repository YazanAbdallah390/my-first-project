import React from "react";
import SettingBox from "../Components/SettingBox";

const SettingBoxes = () => {
  return (
    <div className="flex flex-col h-full w-full justify-center items-center">
      <div className="flex gap-10 h-full w-full justify-center items-center place-content-center">
        <div className="flex flex-col justify-center items-center h-full w-full gap-10 ">
          <SettingBox />
          <SettingBox />
          <SettingBox />
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full gap-10">
          <SettingBox />
          <SettingBox />
          <SettingBox />
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full gap-10">
          <SettingBox />
          <SettingBox />
          <SettingBox />
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full gap-10">
          <SettingBox />
          <SettingBox />
          <SettingBox />
        </div>
      </div>
    </div>
  );
};

export default SettingBoxes;
