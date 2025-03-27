import shree from "../../assets/images/shree.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
   <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[100px] xl:gap-0 flex-col lg:flex-row">
                <div className="relative w-3/4 h-[500px] lg:w-1/2 xl:w-[500px] z-10 order-1" >
                {/* image  */}
                <img src={shree} alt="" className="h-[550px]" />
                

                </div>

        {/* about content */}
        <div className="w-full lg:w-1/2 xl:w-[670] order-1 lg:order-2">
        <h2 className='heading'> Proud to be one of the nations best</h2>
        <p className='text__para'> For 30 years in a row, Nepal News & World Report has recognized us as one of the best public hospitals in the nation, known for exceptional care, innovation, and community-focused healthcare services.
        </p>
        <p className='text__para mt-[30px] '> Our best is something we strive for each day, caring for our patients—not looking back at what we accomplished but towards what we can do tomorrow. Providing the best care, compassion, innovation, excellence, dedication, integrity, empathy, trust, teamwork, and growth.
        </p>
            <Link to='/Services'>
            <button className='btn bg-[#007e69] rounded-[50px] hover:bg-[#37d892]  hover:text-white hover:border-[#007e69] border-[1px]'>Learn More...</button></Link>
        </div>


            </div>
        </div>

   </section>
  )
}

export default About