/* eslint-disable react/jsx-no-undef */
import shree from "../assets/images/shree.png";
import kasmitapng from "../assets/images/kasmitapng.png";
import doctor2 from "../assets/images/doctor2.avif";
import medicareplus from "../assets/images/medicareplus.png";
import kasmita2 from "../assets/images/kasmita2.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import kasmita1 from "../assets/images/kasmita1.jpg";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import {
  CheckCircleIcon,
  UserCircleIcon,
  CreditCardIcon
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <>
      <section className="hero__section  2xl:h-[900px] 2xl:mb-28">
        <div className='container'>
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div className="lg:w-[570px] space-y-6">
              <div className="space-y-6 ">
                <h1 className='text-4xl md:text-5xl bg-gradient-to-r from-[#B63E96] to-[#007e69] bg-clip-text text-transparent font-bold leading-tight'>
                  Empowering Your Health Journey
                </h1>
                <div className="space-y-6">
                  <p className="text-lg font-semibold text-emerald-700 text-center md:text-left">
                    Welcome to Medicare+ 
                  </p>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg">
                      Discover a new era of healthcare with our comprehensive digital platform
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-800">Instant Appointments</h3>
                          <p className="text-sm">Book same-day consultations with top specialists</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <UserCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-800">Verified Doctors</h3>
                          <p className="text-sm">Detailed profiles with qualifications and reviews</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CreditCardIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-800">Secure Payments</h3>
                          <p className="text-sm">Encrypted transactions with real-time tracking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex justify-center md:justify-start">
                  <Link to="/doctors" className="inline-block">
                    <button className="px-8 py-3 bg-gradient-to-r from-[#007e69] to-[#B63E96] text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                      Book Your Consultation Now
                    </button>
                  </Link>
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-200 rounded-lg py-4">
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-[#007e69]">30+</p>
                    <p className="text-sm font-medium text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-[#B63E96]">15+</p>
                    <p className="text-sm font-medium text-gray-600">Clinics Nationwide</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-3xl font-bold text-[#37d892]">100%</p>
                    <p className="text-sm font-medium text-gray-600">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
           
            <div className=" gap-[40px] justify-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div>
                <img className='w-full rounded-lg h-[70%]' src={kasmitapng} alt="" />
              </div>
              <div className="">
                <img className='w-full mb-[10px] h-[60%] ' src={shree} alt="" />
                <img className='w-full rounded-lg' src={doctor2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container bg-[#f6f6f6]">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">World-class care for everyone. Our health System offers unmatched,expert health care</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] pb-10">
            <div className=" px-5">
              <div className="flex items-center justify-center h-[200px]">
                <img src="https://media.istockphoto.com/id/489779612/photo/doctor-holding-stethoscope-in-hand.jpg?s=1024x1024&w=is&k=20&c=Fk5QEzwe4Daa5UB1PZFXUY36fxJ8TACun_VcUGcqnSg=" alt="" className="w-full max-w-[200px] h-auto rounded-lg shadow-lg object-cover"/>
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] landing-9 text-headingColor font-[700] text-center"> Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center "> World class care for everyone. Our health offers unmatched,expert health care. </p>
                <Link to="/doctors" className="w-[50px] h-[50px] rounded-full border border-solid border-[#007e69] mt-[35px] mx-auto text-[#007e69] flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className=" px-5"> 
              <div className="flex items-center justify-center h-[200px]">
                <img
                  src={medicareplus}
                  alt="Medicare+ Hospital"
                  className="w-full max-w-[200px] h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  MedicarePlus Hospital Pvt. Ltd.<br />
                  <span className="text-[16px] cursor-pointer inline-block mt-3">
                    📍 View on Map →
                  </span>
                </p>
                <a
                  href="https://www.shreekrishnapudasaini.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] rounded-full border border-solid border-[#007e69] mt-[30px] mx-auto text-[#007e69] flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </a>
              </div>
            </div>

            <div className=" pt-1 px-5">
              <div className="flex items-center justify-center h-[200px]">
                <img src="https://media.istockphoto.com/id/2147709938/photo/doctor-working-on-laptop-computer-and-tablet-and-medical-stethoscope-on-clipboard-on-desk.jpg?s=1024x1024&w=is&k=20&c=RyXhH87EF18FgqOeKjfKwPIjRKoo7k-wtvujetnZl88=" alt="" className="w-full max-w-[200px] h-[200px] rounded-lg shadow-lg object-cover"/>
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] landing-9 text-headingColor font-[700] text-center"> Book an Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center "> Experience expert care at Medicare+ with skilled professionals and advanced facilities.</p>
                <Link to="/doctors" className="w-[50px] h-[50px] rounded-full border border-solid border-[#007e69] mt-[30px] mx-auto text-[#007e69] flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <section>
        <div className="container bg-[#f6f6f6]">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center "> Our Medical Services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our helath System offers unmatched,expert health care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      <section className="relative py-16 bg-gradient-to-br from-[#f8fcff] to-[#e6f4fe]">
  <div className="container max-w-7xl px-4 mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
      {/* Left Content Section */}
      <div className="xl:w-[670px] relative z-10 order-2 lg:order-1">
        <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-8 leading-tight">
          Get Virtual Treatment <br />
          <span className="bg-gradient-to-r from-[#007e69] to-[#00a88b] bg-clip-text text-transparent">
            Anytime
          </span>
        </h2>
        
        <ul className="space-y-6 mb-10">
          {[1, 2, 3].map((item) => (
            <li key={item} className="flex items-start gap-4 group">
              <div className="w-8 h-8 bg-[#007e69] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                {item}
              </div>
              <p className="text-lg text-[#4a5957] leading-relaxed transition-all group-hover:text-[#003366]">
                {item === 1 && "Schedule the appointment directly."}
                {item === 2 && "Search for your physician here, and contact their office."}
                {item === 3 && "View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time."}
              </p>
            </li>
          ))}
        </ul>

        <Link to="/doctors/67e57087e4429f939241421e">
          <button className="px-8 py-4 bg-gradient-to-r from-[#007e69] to-[#00a88b] text-white rounded-full font-semibold hover:from-[#00a88b] hover:to-[#007e69] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </Link>
      </div>

    
      <div className="relative xl:w-[770px] order-1 lg:order-2">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
          <img 
            src={kasmita2} 
            alt="Virtual Treatment" 
            className="w-full h-[600px] object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#007e69]/30 to-transparent" />
        </div>

      
        <div className="absolute -bottom-8 left-8 w-[280px] bg-white shadow-2xl rounded-2xl p-4 transform hover:-translate-y-2 transition-all duration-300 z-20">
          <div className="flex items-center justify-between mb-3">
            <div className="space-y-1">
              <p className="text-lg font-bold text-[#003366]">Thu, 24</p>
              <p className="text-sm text-[#4a5957]">09:00 AM</p>
            </div>
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img src={kasmita2} className="w-full h-full object-cover" alt="profile" />
            </div>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-[#e6f4fe] text-[#007e69] px-3 py-1 rounded-full text-sm font-semibold">
              Consultation
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#007e69]">
              <img src={kasmita2} alt="Dr. Kasmita Ghimire" className="w-full h-full object-cover" />
            </div>
            <h4 className="text-lg font-bold text-[#003366]">Dr. Kasmita Ghimire</h4>
          </div>
        </div>

        <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#007e69]/10 rounded-full blur-xl" />
        <div className="absolute -bottom-12 right-12 w-24 h-24 bg-[#00a88b]/20 rounded-full rotate-45 blur-lg" />
      </div>
    </div>
  </div>
</section>
      <section>
        <div className="container">
          <div className="xl:w[470px] mx-auto">
            <h2 className="heading text-center "> Meet Our Exceptional Doctors</h2>
            <p className="text__para text-center"> World-class care for everyone. Dedicated to providing expert care with compassion and precision.</p>
          </div>
          <DoctorList />
        </div>
      </section>
      <div className="container">
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-[30px] ]">
          <div className="w-full md:block">
            <img src={kasmita1} alt="" className="h-[680px] w-[85%] rounded-2xl" />
          </div>
          <div className="w-full md:w-full sm:1/2 ">
            <h2 className="heading ">Most questions by our beloved patients.</h2>
            < FaqList />
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="xl:w[470px] mx-auto">
            <h2 className="heading text-center "> Our Patients Speak</h2>
            <p className="text__para text-center"> World-class care for everyone. Experience compassionate, personalized health care tailored to your needs.</p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  )
}

export default Home;