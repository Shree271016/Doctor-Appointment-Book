// layout/Layout.js
import { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers';
import ScrollToTop from '../components/ScrollTop/ScrollToTop';  

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Header />
      <main>
        <ScrollToTop /> 
        <Routers />
      </main>
      <Footer />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#007e69] text-white flex items-center justify-center shadow-xl hover:bg-[#00a88b] transition-all duration-300 z-50 animate-bounce"
          aria-label="Scroll to top"
        >
          <AiOutlineArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default Layout;
