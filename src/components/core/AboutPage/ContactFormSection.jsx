import React from "react";
import ContactUsForm from "../../ContactPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">Get in Touch</h1>
      <p className="text-center text-richblack-300 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
        We&apos;d love to hear from you, Please fill out this form.
      </p>
      <div className="mt-8 sm:mt-10 md:mt-12 mx-auto">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactFormSection;