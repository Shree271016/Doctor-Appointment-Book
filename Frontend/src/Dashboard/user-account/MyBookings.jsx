
import { BASE_URL } from "../../utils/config";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useFetchData } from "../../hooks/useFetchData.jsx";


const MyBookings = () => {
  const { data: appointments, loading, error, } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)

  return (

    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 hover:animate-hover-pulse">
          {appointments.map(doctor => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div >
      )}
      {
        !loading && !error && appointments.length === 0 && (
          <h2 className="mt-5 text-center  leading-7 text-[22px] font-bold text-headingColor animate-scale-up">
            You did not book any doctor yet!
          </h2>
        )
      }
    </div>

  )
}
export default MyBookings;