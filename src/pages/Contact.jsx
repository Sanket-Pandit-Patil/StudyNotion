import React from "react"

import Footer from "../components/common/Footer"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactForm from "../components/ContactPage/ContactForm"
import ReviewSlider from "../components/common/ReviewSlider"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-16 sm:mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-8 sm:gap-10 text-white lg:flex-row px-4">
        {/* Contact Details */}
        <div className="w-full lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="relative mx-auto my-12 sm:my-16 md:my-20 flex w-11/12 max-w-maxContent flex-col gap-6 bg-richblack-900 text-white px-4">
        {/* Reviews from Other Learner */}
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold mt-6 sm:mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
        <ReviewSlider/>
      </div>
      <Footer />
    </div>
  )
}

export default Contact