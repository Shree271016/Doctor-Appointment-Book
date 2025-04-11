import medicareplus from "../assets/images/medicareplus.png";


const Contact = () => {
  return (
   <section className="relative min-h-screen overflow-hidden bg-fixed bg-no-repeat bg-center">
             
               <div className="fixed inset-0 z-[-1] w-full h-full">
                   <img
                       className="w-full h-full object-cover object-top"
                       src={medicareplus}
                       alt="Medical background"
                   />
                   <div className="absolute inset-0 bg-black/60"></div>
               </div>

      <div className='flex flex-col md:flex-row items-center justify-between  px-10 mx-auto max-w-screen-2xl gap-8'>
        <div className='w-full  mb-6 md:mb-0 mr-6 '>
          <img
            src={medicareplus}
            alt='Contact Us'
            className='w-full rounded-lg shadow-lg animate-scale-up'
          />
        </div>

        <div className='w-full '>
          <h2 className='heading text-center md:text-center text-headingColor mt-5'>Contact Us</h2>
          <p className='mb-6 lg:mb-10 mt-5 text-center md:text-left  text-headingColor'>
            Encountering a technical issue? Feedback on a beta feature? We&apos;d love to hear from you!
          </p>
          <form action="#" className='space-y-6 '>
            <div>
              <label htmlFor="email" className='form__label '>Your Email : </label>
              <input type="email" id='email' placeholder='example@gmail.com' className='form__input bg-[#404c49] text-headingColor' />
            </div>
            <div>
              <label htmlFor="subject" className='form__label'>Subject : </label>
              <input type="text" id='subject' placeholder='Let us know how we can help you.' className='form__input bg-[#404c49] text-headingColor'  />
            </div>
            <div>
              <label htmlFor="message" className='sm:col-span-2'>Your Message : </label>
              <textarea type="text" rows="5" id='message' placeholder='Leave a Comment....' className='form__input bg-[#404c49] text-headingColor' />
            </div>
            <div className='text-right rounded-lg'>
              <button type='submit' className='btn rounded-lg sm:w-fit mb-10 mt-2 text-headingColor'>Submit</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Contact;
