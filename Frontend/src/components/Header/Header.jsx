
import { useContext, useEffect, useRef, useState } from 'react';
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { MdMenu, MdDarkMode, MdLightMode } from 'react-icons/md';
import { authContext } from '../../context/authContext';


const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/Services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]
const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext)

  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    handleStickyHeader()
    return () => window.removeEventListener('scroll', handleStickyHeader)
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')



  return <header className="header flex items-center" ref={headerRef}>

    <div className="container">
      <div className="flex items-center justify-between">
        {/* =========logo===== */}
        <div className="">
          <img src={logo} alt="" />
        </div>

        {/* menu */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex items-center gap-[2.7rem]">
            {
              navLinks.map((link, index) => <li key={index}>
                <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-[rgb(0,126,105)] text-[20px] leading-7 font-[600]' : 'text-textColor text-[18px] leading-7 font-[600] hover:text-[rgb(56,173,153)]'}>{link.display}

                </NavLink>

              </li>)
            }

          </ul>
        </div>

        {/* nav right */}
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            {darkMode ? <MdLightMode className="w-7 h-7 text-yellow-400 border rounded-full hover:border-none" /> : <MdDarkMode className="w-7 h-7 text-gray-800 dark:text-white border rounded-full" />}
          </button>
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          {token && user ? (
            <div>
              <Link to={`${role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"}`}>
                <figure className='w-[45px] h-[45px] rounded-full cursor-pointer '>
                  <img src={user?.photo} className='w-full rounded-full h-full ' alt="" />
                </figure>
                <h1 className='text-base font-semibold text-[rgb(0,126,106)] '> {role === "doctor" ? `Dr. ${user?.name}` : user?.name}</h1>

              </Link>
            </div>
          ) :
            <Link to='/login'>
              <button className='bg-[#007e69] text-[18px] py-2 px-6 text-white font-[900] h-[50px] flex items-center justify-center rounded-[50px] hover:bg-[white] hover:text-[#007e69] hover:border-[#007e69] border-[1px]' >Login
              </button>
            </Link>

          }

          <span className='md:hidden' onClick={toggleMenu} >
            <MdMenu className="w-6 h-6 cursor-pointer" />
          </span>


        </div>

      </div>
    </div>


  </header>



};

export default Header;