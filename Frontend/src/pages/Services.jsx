
import { services } from '../assets/data/services';

import ServiceCard from '../components/Services/ServiceCard';


const Services = () => {
  return (
    <section>
      <div className='container'>


        <div className=" flex justify-center items-center text-center h-[700px] mb-12 mt-6 " >

          <img src="https://plus.unsplash.com/premium_photo-1681843039768-0e22b7a031d5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-[700px] rounded-2xl w-3/4" />


        </div>



        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] '>
          {services.map((item, index) => (<ServiceCard item={item} index={index} key={index} />))}

        </div>


      </div>
    </section>
  )
}

export default Services;