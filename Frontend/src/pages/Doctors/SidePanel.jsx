
const SidePanel = () => {
    return (
        <div className="shadow-planeShadow p-3 mt-3 lg:p-5 rounded-md bg-white">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold ">
                    Ticket Price
                </p>
                <span className="text-[16px] leading-7 lg:leading-8 text-headingColor font-bold ">600 NPR
                </span>
            </div>
            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">Available Time Slots:</p>
                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Sunday

                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:15 PM - 9:30 PM

                        </p>

                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Wednesday

                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            4:15 PM - 9:30 PM

                        </p>

                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Friday

                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            2:30 PM - 6:15 PM

                        </p>

                    </li>

                </ul>

            </div>
            <button className="btn px-2 w-full rounded-md">Book Appointment</button>

        </div>
    )
}

export default SidePanel