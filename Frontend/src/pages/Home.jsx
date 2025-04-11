/* eslint-disable react/jsx-no-undef */
import myAi2 from "../assets/images/myAi2.png";
import kasmitapng from "../assets/images/kasmitapng.png";
import HomeImage from "../assets/images/HomeImage.png";
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
      <section className="relative min-h-screen overflow-hidden bg-fixed bg-no-repeat bg-center">
        {/* Fixed Background Image with Overlay */}
        <div className="fixed inset-0 z-[-1] w-full h-full">
          <img
            className="w-full h-full object-cover object-top"
            src={medicareplus}
            alt="Medical background"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Original Content (unchanged) */}
        <div className="container relative z-10 h-full flex items-center bg-transparent">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between w-full">
            <div className="lg:w-[570px] space-y-6">
              <div className="space-y-6">
                <h1 className="opacity-95 text-4xl md:text-5xl mt-4 font-bold leading-tight animate-slide-in">
                  Empowering Your Health Journey
                </h1>

                <div className="space-y-6">
                  <p className="text-lg font-semibold text-red-600 text-center md:text-left animate-scale-up">
                    Welcome to Medicare+
                  </p>
                  <div className="space-y-4 text-textColor opacity-95">
                    <p className="text-lg hover:animate-hover-pulse ">
                      Discover a new era of healthcare with our comprehensive digital platform
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 hover:animate-hover-pulse">
                        <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-textColor">Instant Appointments</h3>
                          <p className="text-sm text-textColor">Book same-day consultations with top specialists</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 hover:animate-hover-pulse">
                        <UserCircleIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-textColor">Verified Doctors</h3>
                          <p className="text-sm text-textColor">Detailed profiles with qualifications and reviews</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 hover:animate-hover-pulse">
                        <CreditCardIcon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-textColor">Secure Payments</h3>
                          <p className="text-sm text-textColor">Encrypted transactions with real-time tracking</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex justify-center md:justify-start">
                  <Link to="/doctors" className="inline-block">
                    <button className="animate-scale-up px-8 py-3 bg-gradient-to-r from-[#007e69] to-[#B63E96] text-textColor opacity-95 rounded-lg font-semibold hover:scale-105 transition-transform">
                      Book Your Consultation Now
                    </button>
                  </Link>
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-200 rounded-lg py-4">
                  <div className="text-center px-4 hover:animate-hover-pulse">
                    <p className="text-3xl font-bold text-[#007e69] opacity-95">30+</p>
                    <p className="text-sm font-medium text-textColor">Years Experience</p>
                  </div>
                  <div className="text-center px-4 hover:animate-hover-pulse">
                    <p className="text-3xl font-bold text-[#B63E96] opacity-95">15+</p>
                    <p className="text-sm font-medium text-textColor">Clinics Nationwide</p>
                  </div>
                  <div className="text-center px-4 hover:animate-hover-pulse">
                    <p className="text-3xl font-bold text-[#37d892] opacity-95">100%</p>
                    <p className="text-sm font-medium text-textColor ">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:grid gap-4 lg:gap-[40px] grid-cols-1 md:grid-cols-2">
              <div>
                <img className='w-full rounded-lg h-auto max-h-[700px] object-cover animate-scale-up' src={kasmitapng} alt="" />
              </div>
              <div className="">
                <img className='w-full rounded-lg h-[500px] object-cover animate-scale-up' src={myAi2} alt="" />
                <img className='w-[90%] pt-5 rounded-lg h-[400px] object-cover animate-scale-up' src={HomeImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-20 bg- ">
        <div className="container">
          <div className="lg:w-[470px] mx-auto">

            <h2 className="heading text-center animate-slide-in">
              Providing the best medical services
            </h2>

            <p className="text__para text-textColor opacity-100 text-center hover:animate-hover-pulse">World-class care for everyone. Our health System offers unmatched,expert health care</p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] pb-10">
            <div className=" px-5">
              <div className="flex items-center justify-center h-[200px]">
                <img src="https://media.istockphoto.com/id/489779612/photo/doctor-holding-stethoscope-in-hand.jpg?s=1024x1024&w=is&k=20&c=Fk5QEzwe4Daa5UB1PZFXUY36fxJ8TACun_VcUGcqnSg=" alt="" className="w-full max-w-[200px] h-auto rounded-lg shadow-lg object-cover animate-scale-up" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] landing-9 text-headingColor font-[700] text-center hover:animate-hover-pulse"> Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center "> World class care for everyone. Our health offers unmatched,expert health care. </p>
                <Link to="/doctors" className="w-[50px] h-[50px] rounded-full border border-solid border-headingColor mt-[35px] mx-auto text-headingColor flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none animate-scale-up">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className=" px-5">
              <div className="flex items-center justify-center h-[200px] animate-scale-up">
                <img
                  src={medicareplus}
                  alt="Medicare+ Hospital"
                  className="w-full max-w-[200px] h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center hover:animate-hover-pulse">Find a Location</h2>
                <p className="text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center">
                  MedicarePlus Hospital Pvt. Ltd.<br />
                  <span className="text-[16px] cursor-pointer inline-block mt-3">
                    📍 View on Map →
                  </span>
                </p>
                <a
                  href="https://www.shreekrishnapudasaini.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-95 w-[50px] h-[50px] rounded-full border border-solid border-textColor mt-[30px] mx-auto text-headingColor flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none t animate-scale-up"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </a>
              </div>
            </div>

            <div className=" pt-1 px-5">
              <div className="flex items-center justify-center h-[200px]">
                <img src="https://media.istockphoto.com/id/2147709938/photo/doctor-working-on-laptop-computer-and-tablet-and-medical-stethoscope-on-clipboard-on-desk.jpg?s=1024x1024&w=is&k=20&c=RyXhH87EF18FgqOeKjfKwPIjRKoo7k-wtvujetnZl88=" alt="" className="w-full max-w-[200px] h-[200px] rounded-lg shadow-lg object-cover animate-scale-up" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] landing-9 text-headingColor font-[700] text-center hover:animate-hover-pulse"> Book an Appointment</h2>
                <p className="text-[16px] leading-7 text-headingColor font-[400] mt-4 text-center "> Experience expert care at Medicare+ with skilled professionals and advanced facilities.</p>
                <Link to="/doctors" className="w-[50px] h-[50px] rounded-full border border-solid border-headingColor mt-[30px] mx-auto text-headingColor flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none animate-scale-up">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>


        </div>
      </section>
      <About />
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">


            <h2 className="heading text-center animate-slide-in"> Our Medical Services</h2>


            <p className="text__para text-center text-headingColor">
              World-class care for everyone. Our helath System offers unmatched,expert health care.
            </p>


          </div>


          <ServicesList />


        </div>
      </section>
      <section className="relative py-16 bg-gradient-to-br ">


        <div className="container max-w-7xl px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">

            <div className="xl:w-[670px] relative z-10 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight animate-slide-in">
                Get Virtual Treatment <br />
                <span className="bg-gradient-to-r from-[#007e69] to-[#e60adf] bg-clip-text text-transparent">
                  Anytime
                </span>
              </h2>

              <ul className="space-y-6 mb-10">
                {[1, 2, 3].map((item) => (
                  <li key={item} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-[#007e69] rounded-full flex items-center justify-center text-headingColor font-bold shrink-0">
                      {item}
                    </div>
                    <p className="hover:animate-hover-pulse  text-lg text-headingColor leading-relaxed transition-all group-hover:text-[#003366]">
                      {item === 1 && "Schedule the appointment directly."}
                      {item === 2 && "Search for your physician here, and contact their office."}
                      {item === 3 && "View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time."}
                    </p>
                  </li>
                ))}
              </ul>

              <Link to="/doctors/67e57087e4429f939241421e">
                <button className="px-8 py-4 bg-gradient-to-r from-[#007e69] to-[#00a88b] text-headingColor rounded-full font-semibold hover:from-[#00a88b] hover:to-[#007e69] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 animate-scale-up">
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


              <div className="absolute -bottom-8 left-8 w-[280px] bg-gray-200 shadow-2xl rounded-2xl p-4 transform hover:-translate-y-2 transition-all duration-300 z-20 animate-scale-up">
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


            <h2 className="heading text-center animate-slide-in"> Meet Our Exceptional Doctors</h2>



            <p className="text__para text-center text-headingColor hover:animate-hover-pulse"> World-class care for everyone. Dedicated to providing expert care with compassion and precision.</p>


          </div>


          <DoctorList />


        </div>
      </section>


      <section>
      <div className="container pt-10 pb-3" >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          <div className="relative group w-full h-[680px] overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={kasmita1}
              alt="Medical FAQ"
              className="w-[85%] h-full object-cover transform group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute z-10 inset-0 bg-gradient-to-t from-[#007e69]/40 to-transparent" />
            <div className="absolute z-10 bottom-8 left-8 bg-slate-200 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-2 animate-scale-up">Have Questions?</h3>
              <p className="text-black animate-scale-up">Our team is always ready to help with any inquiries</p>
            </div>
          </div>


          <div className="w-full  relative">
            <h2 className="text-4xl lg:text-5xl font-bold text-headingColor mb-3 leading-tight animate-rotate-bounce">
              Most questions by our<br className="hidden lg:block" /> beloved patients
            </h2>

            <div className="relative z-10">
              <FaqList />
            </div>
          </div>
        </div>
      </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w[470px] mx-auto">
            <h2 className="heading text-center animate-slide-in text-headingColor "> Our Patients Speak</h2>
            <p className="text__para text-center hover:animate-hover-pulse relative text-headingColor " > World-class care for everyone. Experience compassionate, personalized health care tailored to your needs.</p>
          </div>


          <Testimonial />


        </div>
      </section>
    </>
  )
}

export default Home;