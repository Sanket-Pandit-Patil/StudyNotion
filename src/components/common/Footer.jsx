import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/Logo-Full-Light.png";

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-10 sm:py-12 md:py-14 px-4">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-0 lg:pr-5 gap-4 sm:gap-6">
            <div className="w-full sm:w-[48%] lg:w-[30%] flex flex-col gap-3 mb-6 sm:mb-7 lg:pl-0">
              <img src={Logo} alt="" className="object-contain w-32 sm:w-40" />
              <h1 className="text-richblack-50 font-semibold text-sm sm:text-base">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="text-xs sm:text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.toLowerCase()}>{ele}</Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-3 text-base sm:text-lg">
                <FaFacebook className="hover:text-richblack-50 transition-colors cursor-pointer" />
                <FaGoogle className="hover:text-richblack-50 transition-colors cursor-pointer" />
                <FaTwitter className="hover:text-richblack-50 transition-colors cursor-pointer" />
                <FaYoutube className="hover:text-richblack-50 transition-colors cursor-pointer" />
              </div>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[30%] mb-6 sm:mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-sm sm:text-base">
                Resources
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-xs sm:text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h1 className="text-richblack-50 font-semibold text-sm sm:text-base mt-6 sm:mt-7">
                Support
              </h1>
              <div className="text-xs sm:text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[30%] mb-6 sm:mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-sm sm:text-base">
                Plans
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-xs sm:text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <h1 className="text-richblack-50 font-semibold text-sm sm:text-base mt-6 sm:mt-7">
                Community
              </h1>

              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => {
                  return (
                    <div
                      key={index}
                      className="text-xs sm:text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={ele.split(" ").join("-").toLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-0 lg:pl-5 gap-4 sm:gap-6">
            {FooterLink2.map((ele, i) => {
              return (
                <div key={i} className="w-full sm:w-[48%] lg:w-[30%] mb-6 sm:mb-7 lg:pl-0">
                  <h1 className="text-richblack-50 font-semibold text-sm sm:text-base">
                    {ele.title}
                  </h1>
                  <div className="flex flex-col gap-2 mt-2">
                    {ele.links.map((link, index) => {
                      return (
                        <div
                          key={index}
                          className="text-xs sm:text-sm cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link to={link.link}>{link.title}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-10 sm:pb-12 md:pb-14 text-xs sm:text-sm px-4">
        {/* Section 1 */}
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-col sm:flex-row">
            {BottomFooter.map((ele, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    BottomFooter.length - 1 === i
                      ? ""
                      : "border-b sm:border-b-0 sm:border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  } px-2 sm:px-3 py-2 sm:py-0`}
                >
                  <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
                    {ele}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center text-xs sm:text-sm">Made with ❤️ CodeHelp © 2023 Studynotion</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;