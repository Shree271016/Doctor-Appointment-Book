import medicareplus from "../assets/images/medicareplus.png";

const Contact = () => {
  return (
    <section className='py-2 pt-28'>
      <div className='flex flex-col md:flex-row items-center justify-between  px-10 mx-auto max-w-screen-2xl gap-8'>
        {/* Left Side - Image */}
        <div className='w-full  mb-6 md:mb-0 mr-6 '>
          <img 
           src={medicareplus} 
            alt='Contact Us' 
            className='w-full rounded-lg shadow-lg' 
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className='w-full '>
          <h2 className='heading text-center md:text-center'>Contact Us</h2>
          <p className='mb-6 lg:mb-10 font-light text-center md:text-left text__para'>
            Encountering a technical issue? Feedback on a beta feature? We&apos;d love to hear from you!
          </p>
          <form action="#" className='space-y-6'> 
            <div>
              <label htmlFor="email" className='form__label'>Your Email : </label>
              <input type="email" id='email' placeholder='example@gmail.com' className='form__input ' />
            </div>
            <div>
              <label htmlFor="subject" className='form__label'>Subject : </label>
              <input type="text" id='subject' placeholder='Let us know how we can help you.' className='form__input' />
            </div>
            <div>
              <label htmlFor="message" className='sm:col-span-2'>Your Message : </label>
              <textarea type="text" rows="5" id='message' placeholder='Leave a Comment....' className='form__input' />
            </div>
            <div className='text-right'>
              <button type='submit' className='btn rounded sm:w-fit mb-10 mt-2'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
