import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
// import Footer from "../components/common/Footer"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from '../components/common/ReviewSlider'
import Footer from "../components/common/Footer"

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-8 sm:gap-10 text-center text-white px-4">
          <header className="mx-auto py-12 sm:py-16 md:py-20 text-2xl sm:text-3xl md:text-4xl font-semibold lg:w-[70%] leading-tight">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-sm sm:text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="h-[50px] sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[90%] sm:w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-2 sm:gap-3 lg:gap-5">
            <img src={BannerImage1} alt="About us 1" className="w-full h-auto rounded-lg" />
            <img src={BannerImage2} alt="About us 2" className="w-full h-auto rounded-lg" />
            <img src={BannerImage3} alt="About us 3" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-8 sm:gap-10 text-richblack-500 px-4">
          <div className="h-[60px] sm:h-[80px] md:h-[100px]"></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-8 sm:gap-10 text-richblack-500 px-4">
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row justify-between">
            <div className="my-12 sm:my-16 md:my-24 flex w-full lg:w-[50%] flex-col gap-6 sm:gap-8 md:gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent lg:w-[70%] leading-tight">
                Our Founding Story
              </h1>
              <p className="text-sm sm:text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-sm sm:text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <img
                src={FoundingStory}
                alt="Founding Story"
                className="shadow-[0_0_20px_0] shadow-[#FC6767] w-full max-w-md lg:max-w-none mx-auto"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row justify-between">
            <div className="my-12 sm:my-16 md:my-24 flex w-full lg:w-[40%] flex-col gap-6 sm:gap-8 md:gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent lg:w-[70%] leading-tight">
                Our Vision
              </h1>
              <p className="text-sm sm:text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-12 sm:my-16 md:my-24 flex w-full lg:w-[40%] flex-col gap-6 sm:gap-8 md:gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-2xl sm:text-3xl md:text-4xl font-semibold lg:w-[70%] leading-tight">
              Our Mission
              </h1>
              <p className="text-sm sm:text-base font-medium text-richblack-300 lg:w-[95%] leading-relaxed">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-12 sm:mt-16 md:mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-8 sm:gap-10 text-white px-4">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-12 sm:my-16 md:my-20 flex w-11/12 max-w-maxContent flex-col gap-6 bg-richblack-900 text-white px-4">
        {/* Reviews from Other Learner */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-6 sm:mt-8 leading-tight">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
        <ReviewSlider/>
      </div>
      {/* <Footer /> */}
      <Footer/>
    </div>
  )
}

export default About