

import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, } from "react-icons/ai"

const socialLinks = [
  {
    path: "https://shreekrishnapudasaini.com.np/",
    icon: <AiFillYoutube className="text-red-700 group-hover:text-red  w-6 h-7" />,
  },
  {
    path: "https://github.com/Shree271016",
    icon: <AiFillGithub className="group-hover:text-black w-6 h-7" />,
  },
  {
    path: "https://www.instagram.com/shreekrishna_pudasaini/",
    icon: <AiOutlineInstagram className="text-red-700 group-hover:text-red w-6 h-7" />,
  },
  {
    path: "https://www.linkedin.com/in/shreekrishnapudasaini/",
    icon: <RiLinkedinFill className="text-[rgb(0,126,108)] group-hover:text-white w-6 h-7" />,
  },

];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/blog",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
     path: "/blog",
    display: "Blog",
  },

];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/doctors",
    display: "Request an Appointment",
  },
  {
    path: "/home",
    display: "Find a Location",
  },
  {
    path: "/contact",
    display: "Get a Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/home",
    display: "Donate",
  },
  {
    path: "https://www.shreekrishnapudasaini.com.np/",
    display: "Contact Us",
  },
];



const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="pb-16 pt-10 ">

      <div className="container ">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <Link to="/home">
            
          <div className="flex items-center ">
            <span className="text-2xl md:text-3xl font-extrabold text-red-600 
            drop-shadow-[0_2px_4px_rgba(101,163,13,0.4)] hover:drop-shadow-[0_4px_6px_rgba(101,163,13,0.6)]
            transition-all duration-300 hover:scale-105 animate-scale-up">
              Medicare+
            </span>
          </div>
            </Link>
            <p className="text-[16px] leading-7 font-[400] font-textColor mt-4 hover:animate-hover-pulse relative">
              Copyright &#xa9; {year} developed by Shree krishna pudasaini all right reserved.
            </p>
            <div className="flex items-center gap-5 mt-4 ">
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className="relative w-11 h-11 border border-solid border-headingColor rounded-full flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none animate-scale-up">
                  {link.icon}
                </Link>
              ))}

            </div>
          </div>


          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor animate-scale-up">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4 hover:animate-hover-pulse">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-headingColor relative ">{item.display}
                  </Link>

                </li>

              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor animate-scale-up">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4 hover:animate-hover-pulse">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-headingColor relative">{item.display}
                  </Link>

                </li>

              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor animate-scale-up">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4 hover:animate-hover-pulse">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-headingColor relative">{item.display}
                  </Link>

                </li>

              ))}
            </ul>
          </div>

        </div>


      </div>
    </footer>   
  )
}

export default Footer