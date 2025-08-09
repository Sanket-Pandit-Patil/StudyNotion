import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress  from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-12 sm:mt-16 md:mt-20 lg:mt-[130px] mb-12 sm:mb-16 md:mb-24 lg:mb-32 px-2 sm:px-4 md:px-6 lg:px-8'>
      <div className='flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-5 items-center'>

            <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center leading-tight px-2 md:px-4'>
                Your Swiss Knife for
                <HighlightText text={" learning any language"} />
            </div>

            <div className='text-center text-richblack-600 mx-auto text-xs sm:text-sm md:text-base lg:text-lg font-medium w-full sm:w-[85%] md:w-[75%] lg:w-[70%] leading-relaxed px-2 md:px-4'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className='w-full flex justify-center mt-3 sm:mt-4 md:mt-6 lg:mt-5'>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full max-w-6xl mx-auto px-2'>
                    <img 
                        src = {know_your_progress}
                        alt = "KnowYourProgressImage"
                        className='object-contain w-full max-w-[120px] sm:max-w-[140px] md:max-w-[200px] lg:max-w-[280px] xl:max-w-[320px] 2xl:max-w-[380px] order-1 sm:order-none'
                    />
                    <img 
                        src = {compare_with_others}
                        alt = "CompareWithOthersImage"
                        className='object-contain w-full max-w-[120px] sm:max-w-[140px] md:max-w-[200px] lg:max-w-[280px] xl:max-w-[320px] 2xl:max-w-[380px] order-2 sm:order-none'
                    />
                    <img 
                        src = {plan_your_lesson}
                        alt = "PlanYourLessonImage"
                        className='object-contain w-full max-w-[120px] sm:max-w-[140px] md:max-w-[200px] lg:max-w-[280px] xl:max-w-[320px] 2xl:max-w-[380px] order-3 sm:order-none'
                    />
                </div>
            </div>

            <div className='w-fit mt-3 sm:mt-4 md:mt-6 lg:mt-6'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn more
                    </div>
                </CTAButton>
            </div>

      </div>
    </div>
  )
}

export default LearningLanguageSection
