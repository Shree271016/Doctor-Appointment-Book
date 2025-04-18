import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { BASE_URL } from '../../utils/config';
import { useFetchData } from "../../hooks/useFetchData";
import Tabs from './Tabs';
import { useState } from 'react';
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from '../../pages/Doctors/DoctorAbout';
import Profile from "./Profile";
import Appointments from './Appointments';
import medicareplus from "../../assets/images/medicareplus.png";


const Dashboard = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/profile/me`);
  const [tab, setTab] = useState("overview")


  return (
   <section className="relative min-h-screen overflow-hidden bg-fixed bg-no-repeat bg-center px-5 lg:px-0">
           {/* Fixed Background Image with Overlay */}
           <div className="fixed inset-0 z-[-1] w-full h-full">
             <img
               className="w-full h-full object-cover object-top"
               src={medicareplus}
               alt="Medical background"
             />
             <div className="absolute inset-0 bg-black/60"></div>
           </div>
      
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loader />}
        {error && !loading && <Error message={error} />}

        {
          !loading && !error && data && (
            <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
              <Tabs tab={tab} setTab={setTab} />

              <div className="lg:col-span-2  px-5">


                <h1 className="text-2xl font-bold animate-rotate-bounce text-headingColor">Welcome, Dr. {data.name}</h1>



                {data.isApproved === "pending" && (
                  <div className="flex p-4 mb-4 text-yellow-600 bg-yellow-50 rounded-lg">
                    <div className="ml-3 text-sm font-bold animate-scale-up text-black"> &#10162; 👆  To get approval please complete your profile. We&apos;ll review manually and approve within 3 days.
                    </div>
                  </div>
                )}

                <div>

                  {tab === "overview" && (<div>
                    <div className='flex items-center gap-4 mb-12 mt-3'>


                      <figure className='max-w-[200px] max-h-[200px]'>
                        <img src={data?.photo} alt="" className='w-full' />
                      </figure>

                      <div className='mt-10'>

                        <span className='bg-[#CCF0f3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded-md text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold '>{data.specialization}</span>
                        <h3 className='flex items-center gap-[6px] '>
                          <span className='text-[22px] leading-9 font-bold text-headingColor mt-3  '>{data.name}</span>
                        </h3>
                        <div className='flex items-center gap-[6px]'>
                          <span className='flex items-center gap-[6px] text-headingColor text-[14px] leading-5 lg:text-[16px] font-semibold'>
                            <img src={starIcon} alt="" />{data.averageRating}
                          </span>
                          <span className='  text-[14px] leading-5 lg:text-[16px] font-semibold'>
                            ({data.totalRating})
                          </span>
                        </div >
                        <p className='text__para font-[15px] lg:max-w-[390px] leading-6 text-irisBlueColor'>{data?.bio}</p>

                      </div>

                    </div>

                    <DoctorAbout name={data.name} phone={data.phone} about={data.about} qualifications={data.qualifications} experiences={data.experiences} />

                  </div>)}

                  {tab === "appointments" && (
                    <Appointments appointments={data?.appointments || []} />
                  )}

                  {tab === "settings" && <Profile doctorData={data} />}
                </div>
              </div>
            </div>
          )
        }

      </div>
    </section>
  )
};

export default Dashboard