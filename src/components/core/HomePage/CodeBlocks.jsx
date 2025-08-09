import React from 'react'
import CTAButton from "../HomePage/Button"
import HighlightText from './HighlightText'
import {FaArrowRight} from "react-icons/fa"
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroudGradient, codeColor
}) => {
  return (
    <div className={`flex ${position} my-10 sm:my-16 md:my-20 justify-between gap-6 sm:gap-8 md:gap-10 px-4`}>
      
    {/*Section 1*/}
    <div className='w-full lg:w-[50%] flex flex-col gap-4 sm:gap-6 md:gap-8'>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            {heading}
        </div>
        <div className='text-richblack-300 font-bold text-sm sm:text-base md:text-lg'>
            {subheading}
        </div>

        <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-7 mt-4 sm:mt-6 md:mt-7'>
            <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                <div className='flex gap-2 items-center'>
                    {ctabtn1.btnText}
                    <FaArrowRight/>
                </div>
            </CTAButton>

            <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>  
                    {ctabtn2.btnText}
            </CTAButton>
        </div>
    </div>

     {/*Section 2*/}
     <div className='h-fit flex flex-row text-8 sm:text-9 md:text-10 w-full lg:w-[500px] py-2 sm:py-3 md:py-4'> 
        {/*HW -> BG gradient*/}

        <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold text-xs sm:text-sm'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
        </div>

        <div className={`w-[90%] flex flex-col gap-1 sm:gap-2 font-bold font-mono ${codeColor} pr-2 text-xs sm:text-sm md:text-base`}>
           <TypeAnimation
            sequence={[codeblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
           
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"block",
                }
            }
            omitDeletionAnimation={true}
           />
        </div>
     </div>
    </div>
  )
}

export default CodeBlocks
