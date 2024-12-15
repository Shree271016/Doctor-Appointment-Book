import prajwal from "../assets/images/prajwal.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"
import About from "../components/About/About";
import ServicesList from "../components/Services/ServicesList";

const Home = () => {
  return <>
    {/* hero section */}
    <>

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className='container'>
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">

            {/* hero content */}


            <div>
              <div className="lg:w-[570px]">
                <h1 className='text-[36px] leading-[46px] text-[#B63E96] font-[800] md:text-[60px] md:leading-[70px]'> We help patients live a healthy, longer life.</h1>
                <p className='text__para'>
                 MEDICAREplus is Kathmandu’s leading preventive clinic, offering top-quality care for all ages. With skilled professionals and advanced facilities, we focus on wellness, prevention, and patient comfort—whether at our clinic or your home.
                </p>

                <button className='btn bg-[#007e69] hover:text-[#007e69] hover:bg-[white] hover:border-[#007e69] border-[1px]'> Request an Appointment</button>

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
            <div className=" gap-[60px] justify-end grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div>
                <img className='w-full rounded-[15px] h-[95%]' src={prajwal} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className='w-full mb-[30px] ' src={heroImg02} alt="" />
                <img className='w-full' src={heroImg03} alt="" />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* hero section end */}

      <section>
        <div className="container">
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
                <Link  to="/doctors" className="w-[50px] h-[50px] rounded-full border border-solid border-[#007e69] mt-[30px] mx-auto text-[#007e69] flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none">
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
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">MedicarePlus, Duwakot 2,Bhaktapur, Nepal  01-1234567<br/> 
                <span className="text-blue-600 cursor-pointer">shreekrishnapudasaini.com.np</span>  <br/>
               <span className="text-xl cursor-pointer"> &#9877; View on Map &#10132; </span></p>
                <Link to="/doctors" className="w-[50px] h-[50px] rounded-full border border-solid border-[#007e69] mt-[30px] mx-auto text-[#007e69] flex items-center justify-center group hover:bg-[rgb(0,126,105)] hover:border-none">
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>

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

    
   <About/>

        {/* services section */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center "> Our Medical Services</h2>
              <p className="text__para text-center">
                World-class care for everyone. Our helath System offers unmatched,expert health care.
              </p>

            </div>

            <ServicesList/>
          </div>
        </section>
      


    </>

  </>
}

export default Home;