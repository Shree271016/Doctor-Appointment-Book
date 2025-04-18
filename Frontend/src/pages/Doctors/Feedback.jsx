/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { formateDate } from "../../utils/formateDate";
import FeedbackForm from "./FeedbackForm";
import { useState } from "react";


const Feedback = ({ reviews, totalRating }) => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className='mb-[50px]'>

        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] animate-scale-up'>
          All review ({totalRating})
        </h4>


        {reviews?.map((review, index) =>
        (<div key={index} className='flex justify-between gap-10 mb-[30px]'>
          <div className="flex gap-3">
            <figure className='w-10 h-10 rounded-full'>
              <img src={review?.user?.photo} alt="" className="w-full" />
            </figure>
            <div>

              <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
                {review?.user?.name}
              </h5>
              <p className="text-[14px] leading-6 text-headingColor">{formateDate(review?.createdAt)}</p>
              <p className="text__ para mt-3 font-medium text-[15px] text-headingColor">{review.reviewText}</p>
            </div>
          </div>
          <div className="flex gap-1 hover:animate-hover-pulse">
            {[...Array(review?.rating).keys()].map((_, index) => (
              <AiFillStar key={index} color='#0067FF' />
            ))}

          </div>
        </div>)
        )}


      </div>
      {!showFeedbackForm && <div className="text-center">

        <button className="btn mb-3 animate-scale-up" onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>

      </div>}

      {showFeedbackForm && <FeedbackForm />}

    </div>
  )
}

export default Feedback