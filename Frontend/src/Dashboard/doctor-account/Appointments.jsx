

// export default Appointments;
/* eslint-disable react/prop-types */

import { formateDate } from "../../utils/formateDate";

const Appointments = ({ appointments }) => {
    return (


        <table className="w-full text-left text-sm text-headingColor hover:animate-hover-pulse">
            <thead className="text-xs text-headingColor uppercase bg-[#404c49]">
                <tr>
                    <th className="px-6 py-3 border border-black">Patient Name</th>
                    <th className="px-6 py-3 border border-black">Email</th>
                    <th className="px-6 py-3 border border-black">Gender</th>
                    <th className="px-6 py-3 border border-black">Payment Status</th>
                    <th className="px-6 py-3 border border-black">Amount</th>
                    <th className="px-6 py-3 border border-black">Booked On</th>
                </tr>
            </thead>
            <tbody className="border border-solid border-black">
                {appointments?.length > 0 ? (
                    appointments.map((item) => (
                        <tr key={item._id} className="border border-black">

                            <td className="px-6 py-4 text-headingColor whitespace-nowrap border-b border-black">

                                <div className="pl-3">
                                    <div className="text-base font-semibold">
                                        {item.user?.name || "Unknown"}
                                    </div>
                                </div>
                            </td>


                            <td className="px-6 py-4 border border-black text-headingColor">{item.user?.email || "N/A"}</td>


                            <td className="px-6 py-4 border border-black text-headingColor">
                                {item.user?.gender?.toUpperCase() || "N/A"}
                            </td>


                            <td className="px-6 py-4 font-extrabold border border-black">
                                {item.isPaid ? (
                                    <span className="text-green-600 font-semibold">Paid</span>
                                ) : (
                                    <span className="text-red-600 font-semibold">Unpaid</span>
                                )}
                            </td>


                            <td className="px-6 py-4 border text-headingColor border-black">
                                ${Number(item.ticketPrice || 0).toFixed(2)}
                            </td>


                            <td className="px-6 py-4 border text-headingColor border-black">
                                {formateDate(item.createdAt)}
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center py-4 text-headingColor">
                            No Appointments Found
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

    );
};

export default Appointments;
