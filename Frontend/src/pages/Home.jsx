import shree from "../assets/images/shree.png";
import kasmitapng from "../assets/images/kasmitapng.png";
import doctor2 from "../assets/images/doctor2.avif";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import kasmita2 from "../assets/images/kasmita2.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";
import DoctorList from "../components/Doctors/DoctorList";
import kasmita1 from "../assets/images/kasmita1.jpg";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* hero section */}


      <section className="hero__section pt-[60px] 2xl:h-[1000px]">
        <div className='container'>
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

            {/* hero content */}


            <div>
              <div className="lg:w-[570px]">
                <h1 className='text-[36px] leading-[46px] text-[#B63E96] font-[800] md:text-[60px] md:leading-[70px]'> We help patients live a healthy, longer life.</h1>
                <p className='text__para '>
                  <span className="text-center pl-56 font-bold text-emerald-700">Welcome !</span>
                  <br />
                  With the <strong>MEDICARE+</strong> app, you can easily access top-quality medical care at your fingertips.
                  Our platform allows you to:
                  <br />
                  ✅ <strong>Book Appointments Instantly</strong> – Schedule an appointment with top doctors for today.
                  More features are coming soon to enhance your booking experience.
                  <br />
                  ✅ <strong>Explore Doctor Profiles</strong> – View detailed doctor portfolios, including their experience,
                  qualifications, and specialties, so you can make an informed choice.
                  <br />
                  ✅ <strong>Seamless Online Payments</strong> – Securely pay for your appointments and
                  check payment status directly from the app.
                  <br />
                  ✅ <strong>Stay Informed</strong> – Get real-time updates about your bookings,
                  upcoming appointments, and doctor availability.
                  <br />


                  <strong className="text-green-600 ">Your health, our priority!</strong>
                </p>
                <Link to="/doctors" className="pl-44 ">
                  <button to="/doctors" className='btn bg-[#007e69]  hover:bg-[#37d892] hover:text-white hover:border-[#007e69] border-[1px]'> Request an Appointment</button>
                </Link>

                {/* hero counter */}
                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                  <div className="div">

                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[30px] font-[700]  text-yellowColor text-center'>
                      30+
                    </h2>
                    {/* <span className="w-[100px] h-2 bg-headingColor rounded-full block mt-[-14px]"></span> */}
                    <p className='text__para text-[#007e69]'>Years of Experience</p>
                  </div>


                  <div className="div">
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[30px] font-[700] text-purpleColor text-center'>
                      15+
                    </h2>
                    {/* <span className="w-[100px] h-2 bg-headingColor rounded-full block mt-[-14px]"></span> */}
                    <p className='text__para text-[#007e69] text-lg'>Clinic Location</p>
                  </div>


                  <div className="div">
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[30px] font-[700] text-irisBlueColor text-center'>
                      100%
                    </h2>
                    {/* <span className="w-[100px] h-2 bg-headingColor rounded-full block mt-[-14px]"></span> */}
                    <p className='text__para text-[#007e69] '>Patient Satisfaction</p>
                  </div>


                </div>

              </div>
            </div>
            {/* hero content */}
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

      {/* hero section end */}

      <section>
        <div className="container bg-[#f6f6f6]">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">World-class care for everyone. Our health System offers unmatched,expert health care</p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] landing-9 text-headingColor font-[700] text-center"> Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center "> World class care for everyone. Our health offers unmatched,expert health care. From the lab to the clinic.</p>
                <Link to="/doctors" className="w-[50px] h-[50px] rounded-full border border-solid border-[#007e69] mt-[30px] mx-auto text-[#007e69] flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>

              </div>

            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] landing-9 text-headingColor font-[700] text-center"> Find a Location</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">MedicarePlus Hospital pvt.ltd. <br />
                  <span className="text-blue-600 cursor-pointer">Duwakot 2, Bhaktapur, Nepal  01-1234567</span>  <br />
                  <span className="text-xl cursor-pointer"> &#9877; View on Map &#10132; </span></p>
               
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
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] landing-9 text-headingColor font-[700] text-center"> Book an Appointment</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center "> Experience expert care at Medicare+ with skilled professionals and advanced facilities, ensuring your health and wellness.</p>
                <Link to="/doctors" className="w-[50px] h-[50px] rounded-full border border-solid border-[#007e69] mt-[30px] mx-auto text-[#007e69] flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>

              </div>

            </div>

          </div>




        </div>
      </section>

      <About />

      {/* services section */}
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
      {/* service section end */}

      {/* feature section start */}
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
            {/* feature image */}
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

      {/* feature section end */}
      {/* our great doctors */}
      <section>

        <div className="container">
          <div className="xl:w[470px] mx-auto">
            <h2 className="heading text-center "> Meet Our Exceptional Doctors</h2>
            <p className="text__para text-center"> World-class care for everyone. Dedicated to providing expert care with compassion and precision.</p>


          </div>
          <DoctorList />
        </div>
      </section>
      {/* our great doctors end*/}


      {/* FAQ section start */}
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
      {/* FAQ section end */}


      {/* testimonial  */}
      <section>
        <div className="container">
          <div className="xl:w[470px] mx-auto">
            <h2 className="heading text-center "> Our Patients Speak</h2>
            <p className="text__para text-center"> World-class care for everyone. Experience compassionate, personalized health care tailored to your needs.</p>

          </div>
          <Testimonial />
        </div>

      </section>
      {/* testimonial end */}
    </>
  )
}

export default Home;