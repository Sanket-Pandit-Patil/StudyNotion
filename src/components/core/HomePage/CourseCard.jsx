import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`w-full sm:w-[320px] md:w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      } text-richblack-25 h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] box-border cursor-pointer transition-all duration-300 hover:scale-105`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col gap-2 sm:gap-3">
        <div
          className={`${
            currentCard === cardData?.heading && "text-richblack-800"
          } font-semibold text-sm sm:text-base md:text-lg lg:text-[20px] leading-tight`}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400 text-xs sm:text-sm md:text-base leading-relaxed">
          {cardData?.description}
        </div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
        } px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
          <HiUsers className="text-xs sm:text-sm md:text-base" />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
          <ImTree className="text-xs sm:text-sm md:text-base" />
          <p>{cardData?.lessionNumber} Lesson</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;