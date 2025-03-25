/* eslint-disable no-unused-vars */
import { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { BASE_URL } from "./../../utils/config";
import { useFetchData } from "./../../hooks/useFetchData";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {

  const [tab, setTab] = useState('about');

  const { id } = useParams();

  const { data: doctor, loading, error } = useFetchData(`${BASE_URL}/doctors/${id}`);


  const {name='',
    email='',
    password="",
    phone= "",
    bio= "",
    gender= '',
    reviews='',
    specialization= "",
    ticketPrice= 0,
    averageRating=0,
    totalRating=0,
    qualifications= [],
    experiences= [],
    timeSlots= [],
    about= '',
    photo= null,} = doctor || {};


  return (

    <section>
      <div className='max-w-[1170px] px-5 mx-auto bg-[#f6f6f6]'>

        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (<div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5 mb-28">
              <figure className='max-w-[300px] max-h-[300px] mt-2 ' >
                <img src={photo} alt="" className='w-full rounded-xl' />

              </figure>
              <div className="max-h-[200px] ]">
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded '>{specialization}
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Dr.{doctor?.name} </h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt="" /> {averageRating}

                  </span>
                  <span className=' text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>({totalRating})
                  </span>
                </div>
                <p className="text__para textl-[14px] leading-5 md-text-[15px] lg:max-w-[390px] " >{bio}</p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34] ">
              <button
                onClick={() => setTab('about')}
                className={` ${tab === 'about' && 'border-b border-solid border-[rgb(0,126,105)]'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                About 
              </button>
              <button
                onClick={() => setTab('feedback')}

                className={`${tab === 'feedback' && 'border-b border-solid border-[rgb(0,126,105)]'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {
                tab === 'about' && <DoctorAbout name={name} about={about} qualifications={qualifications} experiences={experiences} phone={phone} />
              }
              {
                tab === 'feedback' && <Feedback  reviews={reviews} totalRating={totalRating} />
              }
            </div>
          </div>
          <div>
            <SidePanel  doctorId={doctor._id} ticketPrice={doctor.ticketPrice} timeSlots={timeSlots}/>
          </div>
        </div>)}

      </div>
    </section>
  )
}

export default DoctorDetails;