import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "../HomePage/Button"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-12 sm:mt-16 px-4'>
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 items-center'>

        <div className='w-full lg:w-[50%] order-2 lg:order-1'>
            <img
                src={Instructor}
                alt="Instructor"
                className='shadow-white w-full max-w-md lg:max-w-none mx-auto'
            />
        </div>

        <div className='w-full lg:w-[50%] flex flex-col gap-6 sm:gap-8 lg:gap-10 order-1 lg:order-2'>
            <div className='text-2xl sm:text-3xl md:text-4xl font-semibold w-full lg:w-[50%] leading-tight'>
                Become an
                <HighlightText text={"Instructor"} />
            </div>

            <p className='font-medium text-sm sm:text-base md:text-[16px] w-full lg:w-[80%] text-richblack-300 leading-relaxed'>
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start Learning Today
                        <FaArrowRight />
                    </div>
                </CTAButton>
            </div>


        </div>

      </div>
    </div>
  )
}

export default InstructorSection
