import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo: Logo1,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo3,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo: Logo4,
        heading: "Leadership",
        Description:"Fully committed to the success company",
    },
];

const TimelineSection = () => {
  return (
    <div className="px-2 sm:px-4 md:px-6 lg:px-8">
      <div className='flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-15 items-center max-w-7xl mx-auto'>

        <div className='w-full md:w-[48%] lg:w-[45%] flex flex-col gap-3 sm:gap-4 md:gap-5'>
            {
                timeline.map( (element, index) => {
                    return (
                        <div className='flex flex-row gap-3 sm:gap-4 md:gap-6' key={index}>

                            <div className='w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] bg-white flex items-center justify-center flex-shrink-0 rounded-lg'>
                                <img src={element.Logo} alt={element.heading} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                            </div>

                            <div className="flex-1">
                                <h2 className='font-semibold text-sm sm:text-base md:text-lg lg:text-[18px] text-richblack-700 leading-tight'>{element.heading}</h2>
                                <p className='text-xs sm:text-sm md:text-base lg:text-lg text-richblack-600 leading-relaxed mt-1'>{element.Description}</p>
                            </div>

                        </div>
                    )
                } )
            }
        </div>
        <div className='relative shadow-blue-200 w-full md:w-[48%] lg:w-auto mt-6 sm:mt-8 md:mt-0 flex justify-center'>

            <img  src={timelineImage}
            alt="timelineImage"
            className='shadow-white object-cover h-fit w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] mx-auto rounded-lg'
            />

            <div className='absolute bg-caribbeangreen-700 flex flex-col sm:flex-row text-white uppercase py-3 sm:py-4 md:py-6 lg:py-7
                            left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] sm:w-[90%] md:w-[85%] lg:w-auto rounded-lg'>
                <div className='flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center border-b sm:border-b-0 sm:border-r border-caribbeangreen-300 px-3 sm:px-4 md:px-6 lg:px-7 pb-2 sm:pb-3 md:pb-0'>
                    <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold'>10</p>
                    <p className='text-caribbeangreen-300 text-xs sm:text-sm md:text-sm lg:text-sm leading-tight'>Years of Experience</p>
                </div>

                <div className='flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 items-center px-3 sm:px-4 md:px-6 lg:px-7 pt-2 sm:pt-3 md:pt-0'>
                <p className='text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold'>250</p>
                    <p className='text-caribbeangreen-300 text-xs sm:text-sm md:text-sm lg:text-sm leading-tight'>Type of Courses</p>
                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default TimelineSection
