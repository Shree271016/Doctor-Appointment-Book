
import Testimonial from "../../components/Testimonial/Testimonial";
// import  doctors  from "./../../assets/data/doctors";
import DoctorCard from "./../../components/Doctors/DoctorCard";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { BASE_URL } from "./../../utils/config";
import { useFetchData } from "./../../hooks/useFetchData";
import { useEffect, useState } from "react";
import AnimateOnScroll from "../../components/AnimateOnScroll";


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
      <section className='bg-[#fff9ea]'>
        <div className='container text-center'>
          <AnimateOnScroll delay={0.1} >

            <h2 className='heading'>Find a Doctor</h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2} >

            <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
              <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Doctor Dr by Name or Specification'
                value={query} onChange={e => setQuery(e.target.value)} />
              <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>Search
              </button>
            </div>
          </AnimateOnScroll>

        </div>
      </section>
      <section >
        <AnimateOnScroll delay={0.3} >
          <div className="container">

            {loading && <Loader />}
            {error && <Error />}

            {!loading && !error && (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>{doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}</div>)}
          </div>
        </AnimateOnScroll>

      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <AnimateOnScroll delay={0.1} >

              <h2 className="heading text-center "> Our Patients Speak</h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} >

              <p className="text__para text-center"> World-class care for everyone. Experience compassionate, personalized health care tailored to your needs.</p>
            </AnimateOnScroll>

          </div>
          <AnimateOnScroll delay={0.3} >

            <Testimonial />
          </AnimateOnScroll>

        </div>

      </section>
    </>
  );
};
export default Doctors;