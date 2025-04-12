
import Testimonial from "../../components/Testimonial/Testimonial";
// import  doctors  from "./../../assets/data/doctors";
import DoctorCard from "./../../components/Doctors/DoctorCard";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { BASE_URL } from "./../../utils/config";
import { useFetchData } from "./../../hooks/useFetchData";
import { useEffect, useState } from "react";
import medicareplus from "../../assets/images/medicareplus.png";



const Doctors = () => {
  const [query, setQuery] = useState('');
  const [debounceQuery, setDebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query)
    }, 700)
    return () => clearTimeout(timeout)

  }, [query]);


  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  return (

    <>
      <section className='relative py-20 overflow-hidden bg-fixed bg-no-repeat bg-center'>
        <div className="fixed inset-0 z-[-1] w-full h-full">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={medicareplus}
                    alt="Medical background"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
        <div className='container text-center mt-6'>
          <h2 className='heading animate-rotate-bounce text-headingColor'>Find a Doctor</h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-headingColor rounded-md flex items-center justify-between relative '>
            <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-headingColor' placeholder='Search Doctor Dr by Name or Specification'
              value={query} onChange={e => setQuery(e.target.value)} />
            <button className='btn mt-0 rounded-[0px] rounded-r-md text-[#404c49] bg-headingColor' onClick={handleSearch}>Search
            </button>
          </div>
        </div>
      </section>
      <section >
        <div className="relative -mt-24 z-10">

          {loading && <Loader />}
          {error && <Error />}

          {!loading && !error && (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>{doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}</div>)}
        </div>


      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">

            <h2 className="heading text-center animate-slide-in"> Our Patients Speak</h2>


            <p className="text__para font-bold text-center hover:animate-hover-pulse relative text-headingColor "> World-class care for everyone. Experience compassionate, personalized health care tailored to your needs.</p>


          </div>


          <Testimonial />


        </div>

      </section>
    </>
  );
};
export default Doctors;