/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import convertTime from "../../utils/convertTime";

import { BASE_URL, token } from "./../../utils/config";
import { toast } from "react-toastify";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {

    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");
    const bookingHandler = async () => {
        try {


            if (!token) {
                toast.error("You need to log in to book an appointment.");
                return;
            }

            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await res.json();
            console.log("Response:", data);
            if (!res.ok) {
                throw new Error(data.message || "Booking failed. Please try again.");
            };
            if (data.session.url) {
                window.location.href = data.session.url;
            }

        } catch (err) {
            toast.error(err.message)

        }
    }

    return (
        <div className="shadow-planeShadow p-3 mt-3 lg:p-5 rounded-md bg-[#404c49] animate-scale-up">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold ">
                    Ticket Price
                </p>
                <span className="text-[16px] leading-7 lg:leading-8 text-headingColor font-bold hover:animate-hover-pulse">Rs. {ticketPrice} |-
                </span>
            </div>
            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">Available Time Slots:</p>
                <ul className="mt-3">
                    {timeSlots?.map((item, index) =>
                    (<li key={index} className="flex items-center justify-between mb-2 hover:animate-hover-pulse">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            {item.day.charAt(0).toUpperCase() + item.day.slice(1)}

                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold ">
                            {convertTime(item.startingTime)} - {convertTime(item.endingTime)}

                        </p>

                    </li>)
                    )}

                </ul>

            </div>
            {userRole !== "doctor" && (
                <p className="text-red-600 font-bold ">
                    Now You Can Book for{" "}
                    &nbsp;&nbsp; <span className="text-green-600 font-bold border-b border-green-500 animate-scale-up">
                        {new Date(Date.now() + 86400000).toLocaleDateString()}
                    </span>
                </p>
            )}

            <button onClick={bookingHandler} className="btn px-2 w-full rounded-md animate-scale-up text-headingColor">Book Appointment</button>

        </div>
    )
}

export default SidePanel