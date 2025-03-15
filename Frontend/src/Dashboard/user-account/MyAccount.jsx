import { useContext, useState } from "react";
import { authContext } from "./../../context/AuthContext";
import MyBookings from "./MyBookings";
import Profile from "./Profile";

// import useGetProfile from "../../hooks/useFetchData";
import { useFetchData } from "../../hooks/useFetchData";  // Notice the named import here
import { BASE_URL } from "../../utils/config";

import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";


const MyAccount = () => {
  const { dispatch } = useContext(authContext);
  const [tab, setTab] = useState('bookings');

  // const {data:userData,loading ,error, } = useGetProfile(`${BASE_URL}/users/profile/me`);
  const { data: userData, loading, error } = useFetchData(`${BASE_URL}/users/profile/me`);

  console.log(userData, "userdata");

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto '>
        {loading && !error && <Loading />}
        {error && !loading && <Error errMessage={error} />}


        {!loading && !error &&
          (<div className='grid md:grid-cols-3 gap-10 '>
            <div className='pb-[50px] px-[30px] rounded-md bg-[#f6f6f6] mt-2 mb-2  shadow-md'>
              <div className='flex items-center justify-center mt-3'>
                <figure className='w-[100px] h-[100px] rounded-full  border-solid border-primaryColor'>
                  <img src={userData.photo} alt="" className='w-[100px] h-[100px] rounded-full' />
                </figure>

              </div>
              <div className="text-center mt-4 ">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">{userData.name} </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">{userData.email}</p>
                <p className="text-textColor text-[15px] leading-6 font-medium">Blood Group : <span className="ml-2 text-headingColor text-[22px] leading-8">{userData.bloodType}

                </span>
                </p>

              </div>
              <div className="mt-[50px] md:mt[100px]">
                <button onClick={handleLogout} className="w-full bg-[#181A1E] font-bold shadow-sm shadow-black p-3 text-[16px] leading-7 rounded-md text-white hover:text-[#181A1E] hover:bg-white hover:border border-solid hover:border-[#181A1E]">Logout
                </button>
                <button className="w-full font-bold shadow-sm shadow-red-600 bg-red-600 p-3 mt-3 text-[16px] leading-7 rounded-md text-white hover:text-red-600 hover:bg-white border-red-600 border-solid hover:border hover:border-red-600 ">Delete
                </button>

              </div>

            </div>
            <div className="md:col-span-2 md:px-[30px] mt-3 ">
              <div>
                <button onClick={() => setTab('bookings')} className={`${tab === "bookings" && "bg-[rgb(0,126,105)] text-white font-normal shadow-xl"} p-2 mr-5 px-5 rounded-md text-headingColor  font-semibold text-[16px] leading-7 border-2 border-solid border-[rgb(0,126,105)]`}>My Bookings</button>
                <button onClick={() => setTab('settings')} className={`${tab === "settings" && "bg-[rgb(0,126,105)] text-white font-normal"}  p-2  px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border-2 border-solid border-[rgb(0,126,105)]`}>Profile Settings</button>
              </div>
              {
                tab === 'bookings' && <MyBookings />
              }
              {
                tab === 'settings' && <Profile user={userData} />
              }

            </div>

          </div>)
        }



      </div>
    </section>
  )
}

export default MyAccount