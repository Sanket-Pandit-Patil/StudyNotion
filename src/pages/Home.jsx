import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import ReviewSlider from '../components/common/ReviewSlider'

const Home = () => {
  return (
    <div>
      {/*Section1  */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center 
      text-white justify-between'>

        <Link to={"/signup"}>
            <div className='group mt-8 sm:mt-12 md:mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-6 sm:px-8 md:px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p className="text-sm sm:text-base">Become an Instructor</p>
                    <FaArrowRight className="text-sm sm:text-base" />
                </div>
            </div>
        </Link>

        <div className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-4 sm:mt-6 md:mt-7 px-4'>
            Empower Your Future with
            <HighlightText text={"Coding Skills"} />
        </div>

        <div className='mt-3 sm:mt-4 w-[95%] sm:w-[90%] text-center text-base sm:text-lg font-bold text-richblack-300 px-4'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div>

        <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 mt-6 sm:mt-8 px-4'>
            <CTAButton active={true} linkto={"/signup"}> 
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
                Book a Demo
            </CTAButton>
        </div>

        <div className='mx-3 my-8 sm:my-12 shadow-blue-200 w-full'>
            <video
            muted
            loop
            autoPlay
            className="responsive-video rounded-lg w-full"
            >
            <source  src={Banner} type="video/mp4" />
            </video>
        </div>

        {/* Code Section 1 */}
        <div className="w-full">
            <CodeBlocks 
                position={"flex flex-col lg:flex-row"}
                heading={
                    <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>

        {/* Code Section 2 */}
        <div className="w-full">
            <CodeBlocks 
                position={"flex flex-col lg:flex-row-reverse"}
                heading={
                    <div className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>

        <ExploreMore />
      </div>

      {/*Section 2  */}
      <div className='bg-pure-greys-5 text-richblack-700'>
            <div className='homepage_bg h-[200px] sm:h-[250px] md:h-[310px]'>

                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                    <div className='h-[80px] sm:h-[120px] md:h-[150px]'></div>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-7 text-white px-4'>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3' >
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                <div className='flex flex-col lg:flex-row gap-5 mb-10 mt-[60px] sm:mt-[80px] md:mt-[95px] px-4'>
                    <div className='text-2xl sm:text-3xl md:text-4xl font-semibold w-full lg:w-[45%]'>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"} />
                    </div>

                    <div className='flex flex-col gap-6 sm:gap-10 w-full lg:w-[40%] items-start'>
                        <div className='text-sm sm:text-base md:text-[16px]'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>
                </div>
                
                <TimelineSection />

                <LearningLanguageSection />
            </div>
      </div>

      {/*Section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>

            <InstructorSection />

            <h2 className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-8 sm:mt-10 px-4'>Review from Other Learners</h2>
            {/* Review Slider here */}
            <ReviewSlider />
      </div>

      {/*Footer */}
      <Footer />
    </div>
  )
}

export default Home
