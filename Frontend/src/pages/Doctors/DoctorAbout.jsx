/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { formateDate } from "../../utils/formateDate";
const DoctorAbout = ({name,about,qualifications,experiences,phone}) => {
    return (
        <div >
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
                    <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                       {name}
                    </span>
                </h3>
                <p className='text__para '>
                   {about}

                    <br />  <br />
                    &#x2756; <span className="font-bold">  NMC Number  </span>- 1234 <br />
                    &#x2756; <span className="font-bold">Qualification </span> - MBBS, MS <br />
                    &#x2756; <span className="font-bold">Speciality </span> - Consultant General / Pediatric & Laparoscopic Surgeon <br />
                    &#x2756;  <span className="font-bold">Website </span> -<span className="text-blue-500 cursor-pointer"> https:// Saleh Mahmud.wordpress.com.np </span>
                </p>

            </div>
                <p className='text__para font-[15px] lg:max-w-[390px] leading-6'>Phone Number :{phone}</p>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold border-b border-solid border-[#0066ff34]">
                    Education :</h3>
                <ul className="pt-4 md:p-5 bg-[rgb(229,231,235)] rounded-xl mt-3 ">
                    {qualifications?.map((item,index)=>  <li key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]  ">
                        <div>
                            <span className="text-irisBlueColor text-[18px] leading-6 font-semibold">
                                {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                            </span>
                            <p className="text-[18px] leading-6 font-medium text-textColor">&nbsp; {item.degree}
                            </p>

                        </div>
                        <p className="text-[18px] leading-5 font-medium text-textColor pb-6">{item.university}</p>

                    </li>)}
               
                  
                </ul>

            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold border-b border-solid border-[#0066ff34]">
                    Experience :

                </h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    {experiences?.map((item,index)=><li  key={index} className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[18px] leading-6 font-semibold">
                            {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                        </span>
                        <p className="text-[18px] leading-6 font-medium text-textColor">
                            {item.position}
                        </p>
                        <p className="text-[16px] leading-5font-medium text-textColor">
                           {item.hospital}
                        </p>
                    </li>)}

            
                    
                </ul>
            </div>
        </div>
    )
}

export default DoctorAbout 