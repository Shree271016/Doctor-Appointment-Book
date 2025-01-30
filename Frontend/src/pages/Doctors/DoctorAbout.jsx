
import { formateDate } from "../../utils/formateDate";
const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of
                    <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                        Dr.Saleh Mahmud
                    </span>
                </h3>
                <p className='text__para '>
                    Dr.   Saleh Mahmud is a Consultant General / Pediatric & Laparoscopic surgeon dealing general surgery along with Special interests: Advanced minimally invasive surgery in neonates, infants, children and adolescents including congenital anomalies of the lung, esophagus, diaphragm and intestines; tumors of the chest and abdomen; inflammatory bowel disease; familial polyposis; splenectomy for hematologic disease and urosurgery.<br /><br />

                    Research interests: simulation-based medical education, rapid prototyping, innovations in education, clinical and translational research.

                    <br />  <br />
                    &#x2756; <span className="font-bold">  NMC Number  </span>- 1234 <br />
                    &#x2756; <span className="font-bold">Qualification </span> - MBBS, MS <br />
                    &#x2756; <span className="font-bold">Speciality </span> - Consultant General / Pediatric & Laparoscopic Surgeon <br />
                    &#x2756;  <span className="font-bold">Website </span> -<span className="text-blue-500 cursor-pointer"> https:// Saleh Mahmud.wordpress.com.np </span>
                </p>
            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold border-b border-solid border-[#0066ff34]">Education</h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                        <div>
                            <span className="text-irisBlueColor text-[18px] leading-6 font-semibold">
                                {formateDate("09-13-2014")} -{formateDate("12-13-2016")}
                            </span>
                            <p className="text-[18px] leading-6 font-medium text-textColor">&nbsp; PhD in Surgery
                            </p>

                        </div>
                        <p className="text-[18px] leading-5 font-medium text-textColor"> New Apollo Hospital , New York</p>

                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] ">
                        <div>
                            <span className="text-irisBlueColor text-[18px] leading-6 font-semibold">
                                {formateDate("03-13-2008")} - {formateDate("04-13-2012")}
                            </span>
                            <p className="text-[18px] leading-6 font-medium text-textColor">&nbsp; MS in Surgery
                            </p>

                        </div>
                        <p className="text-[18px] leading-5 font-medium text-textColor">TUTH,Kathmandu,Nepal</p>

                    </li>
                </ul>

            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold border-b border-solid border-[#0066ff34]">Experience

                </h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[18px] leading-6 font-semibold">
                            {formateDate("12-16-2016")} - {formateDate("04-13-2020")}
                        </span>
                        <p className="text-[18px] leading-6 font-medium text-textColor">
                            Sr . Surgeon
                        </p>
                        <p className="text-[16px] leading-5font-medium text-textColor">
                            New Apollo Hospital , New York
                        </p>
                    </li>


                    <li className="p-4 rounded bg-[#fff9ea]">
                        <span className="text-yellowColor text-[18px] leading-6 font-semibold">
                            {formateDate("05-03-2020")} - {formateDate("01-13-2025")}
                        </span>
                        <p className="text-[18px] leading-6 font-medium text-textColor">
                            Asst . Prof. Surgeon
                        </p>
                        <p className="text-[16px] leading-5font-medium text-textColor">
                            TUTH,Kathmandu,Nepal
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DoctorAbout 