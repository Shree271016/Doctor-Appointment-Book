import { AiFillStar } from "react-icons/ai";
import avatar from "../../assets/images/avatar-icon.png";
import { formateDate } from "../../utils/formateDate";
import FeedbackForm from "./FeedbackForm";
import { useState } from "react";

const Feedback = () => {

  const[showFeedbackForm,setShowFeedbackForm]= useState(false);
  
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] '>
          All review (2720)
        </h4>
        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className="flex gap-3">
            <figure className='w-10 h-10 rounded-full'>
              <img src={avatar}  alt="" className="w-full" />
            </figure>
            <div>

            <h5 className="text-[16px] leading-6 text-primaryColor font-bold">
              Ali Ahmed
            </h5>
            <p className="text-[14px] leading-6 text-textColor">{formateDate("02-15-2023")}</p>
            <p className="text__ para mt-3 font-medium text-[15px]">Good services, High recommended  👍</p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index)=>(
              <AiFillStar key={index} color='#0067FF'/>
            ))}

          </div>
        </div>
      </div>
      {!showFeedbackForm && <div className="text-center">
        <button className="btn mb-3" onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
      </div>}
      {showFeedbackForm && <FeedbackForm/>}

    </div>
  )
}

export default Feedback