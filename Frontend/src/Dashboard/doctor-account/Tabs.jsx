/* eslint-disable react/prop-types */
import { BiMenu } from "react-icons/bi";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";


const Tabs = ({ tab, setTab }) => {

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }
  return (

    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hover:animate-hover-pulse hidden lg:flex flex-col p-[30px] bg-[#404c49] shadow-planeShadow items-center h-max rounded-md  ">
        <button
          onClick={() => setTab("overview")}
          className={`${tab === "overview"
            ? "bg-indigo-100 text-[rgb(0,126,105)]"
            : "bg-[#404c49 text-headingColor"
            } w-full btn mt-1 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${tab === "appointments"
            ? "bg-indigo-100 text-[rgb(0,126,105)]"
            : "bg-[#404c49 text-headingColor"
            } w-full btn mt-1 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${tab === "settings"
            ? "bg-indigo-100 text-[rgb(0,126,105)]"
            : "bg-[#404c49] text-headingColor"
            } w-full btn mt-1 rounded-md`}
        >
          Profile
        </button>
        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-headingColor font-bold shadow-sm shadow-black p-3 text-[16px] leading-7 rounded-md text-black hover:text-headingColor hover:bg-green-600 hover:border hover:border-[#181A1E]"
          >
            Logout
          </button>
          <button className="w-full font-bold shadow-sm shadow-red-600 bg-red-600 p-3 mt-3 text-[16px] leading-7 rounded-md text-white hover:text-red-600 hover:bg-white hover:border hover:border-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>

  )
}

export default Tabs;