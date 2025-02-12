import React from 'react'

const Contact = () => {
  return (
    <section className='py-2'>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center '>Contact Us</h2>
        <p className='mb-8 lg:mb-12 font-light text-center text__para'>
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
          <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;