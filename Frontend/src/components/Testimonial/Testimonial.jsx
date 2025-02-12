
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import patientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'
const Testimonial = () => {
  return (
    <div className='mt-[30px] lg:mt-[55px] '>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
        }} >
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div ><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Anita Sharma</h4>
                        <div className='flex items-center gap-[2px] '>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor'>&quot;I visited this clinic for my health concerns, and I am extremely satisfied with the care I received. The staff is highly professional and friendly. Highly recommend their services!&quot;

                    </p>

                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div ><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Ravi Patel</h4>
                        <div className='flex items-center gap-[2px] '>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-white w-[18px] h-5' />

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor'>&quot;Their medical team is truly remarkable. From diagnosis to treatment, they ensure every detail is taken care of. I feel fortunate to have found such an amazing healthcare provider.&quot;

                    </p>

                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div ><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Sophia Khan</h4>
                        <div className='flex items-center gap-[2px] '>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-white w-[18px] h-5' />
                            <HiStar className='text-white w-[18px] h-5' />

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor'>&quot;I received excellent treatment here. The doctors were very kind and explained everything in detail. I feel healthier and happier now!&quot;

                    </p>

                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div ><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>John Williams</h4>
                        <div className='flex items-center gap-[2px] '>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor'>&quot;The clinic exceeded my expectations. The staff was attentive, and the facilities were well-maintained. I wouldn’t hesitate to recommend them to anyone seeking quality care.&quot;

                    </p>

                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div ><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Priya Mehta</h4>
                        <div className='flex items-center gap-[2px] '>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor'>&quot;This place is a blessing for those in need of reliable medical services. They provide exceptional care and ensure your comfort at all times.&quot;

                    </p>

                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div ><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Daniel Kim</h4>
                        <div className='flex items-center gap-[2px] '>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor'>&quot;I’ve never felt more at ease during a doctor’s visit. The attention to detail and personalized care are unmatched. Truly the best in the field!&quot;

                    </p>

                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div ><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Ayesha Siddiqui</h4>
                        <div className='flex items-center gap-[2px] '>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor'>&quot;The doctors and nurses here treat every patient with compassion and respect. I’ve always had positive experiences and feel well-cared-for every time I visit.&quot;

                    </p>

                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt="" />
                        <div ><h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Rajesh Bhandari</h4>
                        <div className='flex items-center gap-[2px] '>
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />
                            <HiStar className='text-yellowColor w-[18px] h-5' />

                        </div>

                        </div>
                    </div>
                    <p className='text-[16px] leading-7 font-[400] text-textColor'>
                    &quot;Amazing service and excellent doctors! They go above and beyond to ensure patient satisfaction. I couldn’t be happier with the care I received.&quot;
                    </p>

                </div>

            </SwiperSlide>

        </Swiper>
        

    </div>
  )
}

export default Testimonial