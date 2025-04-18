/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import starIcon from "./../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const DoctorCard = ({ doctor }) => {


    const { name, avgRating, photo, specialization,experiences, totalRating } = doctor;
    return (
        <div className='p-3 lg:p-5 bg-[#404c49] rounded-2xl'>
            <div>
                <img src={photo} className='w-full rounded-md hover:animate-hover-pulse' alt="" />
            </div>
            <h2 className='text-[18px] landing-[30px] lg:text[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>Dr. {name}</h2>
            <div className="mt-2 lg:mt-4 flex items-center justify-between ">
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] rounded leading-4 lg:text-[16px] lg:leading-7 font-semibold animate-scale-up'>{specialization}</span>
                <div className="flex items-center gap-[6px] hover:animate-hover-pulse">
                    <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor ">
                        <img src={starIcon} alt="" />{avgRating}

                    </span>
                    <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-headingColor">({totalRating})</span>

                </div>

            </div>
            <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
                <div>

                
                    <p className="text-[14px] leading-6 font-[500] text-headingColor hover:animate-hover-pulse" >
                        At {experiences && experiences[0]?.hospital}
                    </p>
                </div>
                <Link to={`/doctors/${doctor._id}`} className="w-[50px] h-[50px] rounded-full border border-solid border-headingColor  text-[#007e69] inline-flex  items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none hover:animate-hover-pulse">
                    <BsArrowRight className="group-hover:text-white w-6 h-6 " />
                </Link>
            </div>

        </div>
    )
}

export default DoctorCard;