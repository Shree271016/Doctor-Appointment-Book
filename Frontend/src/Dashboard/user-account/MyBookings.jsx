
import { BASE_URL } from "../../utils/config";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { useFetchData } from "../../hooks/useFetchData.jsx";
import AnimateOnScroll from "../../components/AnimateOnScroll.jsx";

const MyBookings = () => {
  const { data: appointments, loading, error, } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`)

  return (
      <AnimateOnScroll >
    <div>
      {loading && !error && <Loading />}
      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {appointments.map(doctor => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}
        </div >
      )}
      {
        !loading && !error && appointments.length === 0 && (
          <h2 className="mt-5 text-center  leading-7 text-[22px] font-bold text-[rgb(0,126,108)]">
            You did not book any doctor yet!
          </h2>
        )
      }
    </div>
    </AnimateOnScroll>
  )
}
export default MyBookings;