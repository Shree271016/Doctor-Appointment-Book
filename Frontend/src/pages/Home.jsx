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
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> Anytime
              </h2>
              <ul>
                <li className="text__para">
                  1. Schedule the appointment durectly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and content their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointmet time.
                </li>
              </ul>
              <Link to="/doctors/67e57087e4429f939241421e">
                <button className="btn">Learn More...</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={kasmita2} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-[#f6f6f6] shadow-xl absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:px-4 lg:pt-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Thu, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[500]"> 09:00AM</p>

                  </div>
                  <span className="w-5 h-5 lg:w-[40px] lg:h-[40px] flex items-center justify-center bg-yellowColor rounded px-1">
                    <img src={kasmita2} className="rounded-lg" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-3 rounded-full cursor-pointer">
                  Consultaiton
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[16px]">
                  <img src={kasmita2} alt="" className="w-8 h-8 lg:w-[38px] lg:h-[38px] flex items-center justify-center rounded-full" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Dr. Kasmita Ghimire
                  </h4>
                </div>
              </div>
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