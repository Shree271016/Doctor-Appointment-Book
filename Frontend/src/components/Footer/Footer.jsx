

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, } from "react-icons/ai"

const socialLinks = [
  {
    path: "https://shreekrishnapudasaini.com.np/",
    icon: <AiFillYoutube className="text-red-700 group-hover:text-red  w-4 h-5" />,
  },
  {
    path: "https://github.com/Shree271016",
    icon: <AiFillGithub className="group-hover:text-black w-4 h-5" />,
  },
  {
    path: "https://www.instagram.com/shreekrishna_pudasaini/",
    icon: <AiOutlineInstagram className="text-red-700 group-hover:text-red w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/in/shreekrishnapudasaini/",
    icon: <RiLinkedinFill className="text-[rgb(0,126,108)] group-hover:text-white w-4 h-5" />,
  },

];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },

];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/",
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
    <footer className="pb-16 pt-10 bg-[#f6f6f6]">

      <div className="container ">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] font-textColor mt-4">
              Copyright &#xa9; {year} developed by Shree krishna pudasaini all right reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={index} className="w-9 h-9 border border-solid border-[rgb(0,126,105)] rounded-full flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none">
                  {link.icon}
                </Link>
              ))}

            </div>
          </div>


          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}
                  </Link>

                </li>

              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}
                  </Link>

                </li>

              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">{item.display}
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