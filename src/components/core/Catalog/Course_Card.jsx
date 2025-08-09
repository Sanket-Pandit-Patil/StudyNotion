import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';

const Course_Card = ({course, Height}) => {


    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])


    
  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className="group hover:scale-105 transition-all duration-300">
          <div className="rounded-lg overflow-hidden">
            <img
              src={course?.thumbnail}
              alt="course thumbnail"
              className={`${Height} w-full rounded-xl object-cover group-hover:scale-110 transition-transform duration-300`}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-lg sm:text-xl text-richblack-5 font-semibold leading-tight line-clamp-2">{course?.courseName}</p>
            <p className="text-xs sm:text-sm text-richblack-50">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-5 text-sm sm:text-base">{avgReviewCount || 0}</span>
              <RatingStars Review_Count={avgReviewCount} Star_Size={16} />
              <span className="text-richblack-400 text-xs sm:text-sm">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>
            <p className="text-lg sm:text-xl text-richblack-5 font-bold">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Course_Card
