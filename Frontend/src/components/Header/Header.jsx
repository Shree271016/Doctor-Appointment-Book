import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import { MdMenu, MdDarkMode, MdLightMode, MdClose } from 'react-icons/md';
import { authContext } from '../../context/AuthContext';

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
  const [menuOpen, setMenuOpen] = useState(false);

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
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside or resizing to desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && 
          !event.target.closest('.menu-toggle')) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed w-full z-50 py-4 ${isScrolled
        ? 'bg-white dark:bg-gray-600 bg-opacity-25 backdrop-blur-sm shadow-md'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 ">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors  ${isActive
                    ? 'text-[#007e69] dark:text-emerald-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-[#007e69] dark:hover:text-emerald-400 hover:animate-hover-pulse'
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
                className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity hover:animate-hover-pulse"
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
                <button className="hidden sm:block bg-[#007e69] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#006653] transition-colors dark:bg-emerald-600 dark:hover:bg-emerald-700">
                  Login
                </button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="menu-toggle md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {menuOpen ? (
                <MdClose className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              ) : (
                <MdMenu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>

        {/* Transparent Mobile Navigation */}
        <div
          ref={menuRef}
          className={`md:hidden fixed top-20 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}
        >
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-3 px-4 rounded-lg text-lg font-medium transition-colors ${isActive
                        ? 'text-[#007e69] dark:text-emerald-400 bg-[#007e69]/10 dark:bg-emerald-400/10'
                        : 'text-gray-600 dark:text-gray-300 hover:text-[#007e69] dark:hover:text-emerald-400 hover:bg-[#007e69]/5 dark:hover:bg-emerald-400/5'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
              
              {/* Mobile-only Login/Profile */}
              {token && user ? (
                <li>
                  <Link
                    to={`${role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"}`}
                    className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-[#007e69]/5 dark:hover:bg-emerald-400/5 sm:hidden"
                    onClick={() => setMenuOpen(false)}
                  >
                    <img
                      src={user?.photo}
                      alt="Profile"
                      className="w-8 h-8 rounded-full border-2 border-[#007e69]"
                    />
                    <span className="text-sm font-semibold text-[#007e69] dark:text-emerald-400">
                      {role === "doctor" ? `Dr. ${user?.name}` : user?.name}
                    </span>
                  </Link>
                </li>
              ) : (
                <li className="sm:hidden">
                  <Link
                    to="/login"
                    className="block py-3 px-4 rounded-lg bg-[#007e69] text-white font-semibold hover:bg-[#006653] transition-colors dark:bg-emerald-600 dark:hover:bg-emerald-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;