/* eslint-disable react/prop-types */
import { BiMenu } from "react-icons/bi";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import AnimateOnScroll from "../../components/AnimateOnScroll";

const Tabs = ({ tab, setTab }) => {

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  return (
      <AnimateOnScroll >
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />

      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-planeShadow items-center h-max rounded-md  ">
        <button
          onClick={() => setTab("overview")}
          className={`${tab === "overview"
              ? "bg-indigo-100 text-[rgb(0,126,105)]"
              : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>

        <button
          onClick={() => setTab("appointments")}
          className={`${tab === "appointments"
              ? "bg-indigo-100 text-[rgb(0,126,105)]"
              : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>

        <button
          onClick={() => setTab("settings")}
          className={`${tab === "settings"
              ? "bg-indigo-100 text-[rgb(0,126,105)]"
              : "bg-transparent text-headingColor"
            } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>

        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] font-bold shadow-sm shadow-black p-3 text-[16px] leading-7 rounded-md text-white hover:text-[#181A1E] hover:bg-white hover:border hover:border-[#181A1E]"
          >
            Logout
          </button>
          <button className="w-full font-bold shadow-sm shadow-red-600 bg-red-600 p-3 mt-3 text-[16px] leading-7 rounded-md text-white hover:text-red-600 hover:bg-white hover:border hover:border-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
    </AnimateOnScroll>
  )
}

export default Tabs;