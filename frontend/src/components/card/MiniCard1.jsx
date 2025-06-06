import React from "react";
import { CiCloudMoon } from "react-icons/ci";

const MiniCard1 = () => {
  return (
    <div
      className="w-[45%] mx-auto bg-white rounded-full flex items-center justify-between shadow-md p-4 hover:shadow-lg transition-shadow border-purple-500 border-[1px]"
      style={{ minHeight: "82px" }}
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-1">
        <div className="text-gray-700 text-sm font-semibold">
          <span>Panchora,</span> <span>19 Dec</span>
        </div>
        <div className="text-gray-500 text-xs">
          <span>Clear 12°C / 25°C</span>
        </div>
      </div>

      {/* Middle Section: Forecasts */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <div className="text-gray-700 text-sm font-semibold">
              <span>12 PM</span>
            </div>
            <div className="text-gray-500 text-xs">
              <span>Clear 12°C</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Current Weather */}
      <div className="flex items-center gap-2">
        <span className="text-gray-800 text-lg font-bold">13°C</span>
        <CiCloudMoon className="text-gray-600 text-2xl" />
      </div>
    </div>
  );
};

export default MiniCard1;
