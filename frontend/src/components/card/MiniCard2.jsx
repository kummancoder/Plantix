import React, { useState, useEffect } from "react";
import { CiCloudMoon, CiWarning } from "react-icons/ci";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaExclamationTriangle } from "react-icons/fa";

const MiniCard2 = () => {
  const conditions = [
    {
      name: "Optimal",
      icon: <IoCheckmarkDoneCircleOutline className="text-green-500 text-xl" />,
    },
    {
      name: "Moderate",
      icon: <CiWarning className="text-yellow-500 text-xl" />,
    },
    {
      name: "Unfavorable",
      icon: <FaExclamationTriangle className="text-red-500 text-xl" />,
    },
  ];

  const [currentConditionIndex, setCurrentConditionIndex] = useState(0);

  // Cycle through conditions
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentConditionIndex((prevIndex) => (prevIndex + 1) % conditions.length);
    }, 3000); // Change condition every 3 seconds
    return () => clearInterval(interval); // Clean up the interval
  }, [conditions.length]);

  return (
    <div
      className="w-[45%] mx-auto bg-white rounded-full flex items-center justify-between shadow-md p-4 hover:shadow-lg transition-shadow border-yellow-500 border-[1px]"
      style={{ minHeight: "82px" }} // Fixed min height for the card
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-1">
        <div className="text-gray-500 text-xs">
          <span>Spraying conditions</span>
        </div>
        <div className="text-gray-700 text-sm font-semibold">
          <span>Moderate</span>
        </div>
      </div>

      {/* Middle Section: Forecasts */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <div className="text-gray-700 text-sm font-semibold">
              <span>12 PM</span>
            </div>
            <div className="text-gray-500 text-xs">
              <CiWarning className="text-yellow-500 text-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Right Section: Rotating Condition */}
      <div className="flex flex-col items-center gap-2 w-12">
        <div>{conditions[currentConditionIndex].icon}</div>
        <div className="text-gray-700 text-xs font-medium">
          {conditions[currentConditionIndex].name}
        </div>
      </div>
    </div>
  );
};

export default MiniCard2;
