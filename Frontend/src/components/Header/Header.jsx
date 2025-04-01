import { useContext, useEffect, useRef, useState } from 'react';
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { MdMenu, MdDarkMode, MdLightMode } from 'react-icons/md';
import { authContext } from '../../context/authContext';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'Find a Doctor' },
  { path: '/Services', display: 'Services' },
  { path: '/blog', display: 'Blog' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode toggle
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  // Menu toggle
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header
      ref={headerRef}
      className={`fixed w-full z-50 py-4  ${isScrolled
        ? 'bg-white dark:bg-gray-900 bg-opacity-25 backdrop-blur-sm shadow-md'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home">
          
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-extrabold text-red-600 
            drop-shadow-[0_2px_4px_rgba(101,163,13,0.4)] hover:drop-shadow-[0_4px_6px_rgba(101,163,13,0.6)]
            transition-all duration-300 hover:scale-105">
              Medicare+
            </span>
          </div>
          </Link>

          {/* Navigation */}
          <nav
            ref={menuRef}
            className="hidden md:flex items-center gap-8"
            onClick={toggleMenu}
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors ${isActive
                    ? 'text-[#007e69] dark:text-emerald-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#007e69] dark:hover:text-emerald-400'
                  }`
                }
              >
                {link.display}
              </NavLink>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {darkMode ? (
                <MdLightMode className="w-6 h-6 text-yellow-400" />
              ) : (
                <MdDarkMode className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>

            {/* Profile/Login */}
            {token && user ? (
              <Link
                to={`${role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"}`}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <img
                  src={user?.photo}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-[#007e69]"
                />
                <span className="text-sm font-semibold text-[#007e69] dark:text-emerald-400">
                  {role === "doctor" ? `Dr. ${user?.name}` : user?.name}
                </span>
              </Link>
            ) : (
              <Link to="/login">
                <button className="bg-[#007e69] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#006653] transition-colors dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  Login
                </button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <MdMenu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;