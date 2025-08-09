import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules"; // ✅ Fix here
import Course_Card from "./Course_Card";

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          modules={[FreeMode, Pagination]} // ✅ Modules work now
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="max-h-[30rem] px-4 sm:px-6"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px] sm:h-[280px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-lg sm:text-xl text-richblack-5 text-center px-4">No Course Found</p>
      )}
    </>
  );
};

export default CourseSlider;
