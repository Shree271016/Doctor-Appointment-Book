import signupImg from '../assets/images/giphy.webp';

const Signup = () => {
  return <section className='px-5 xl:px-0'>
    <div className='max-w-[1170px] mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/* img box */}
        <div className="hidden lg:block bg-primaryColor rounded-l-lg">
          <figure className='rounded-l-lg bg-white'>

            <img src={signupImg} alt="" className='w-full p-9 rounded-l-lg' />
          </figure>
        </div>
        {/* sign up form */}
        <div className='rounded-l-lg lg:pl-16 py-10'>
          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
            Create an <span className='text-primaryColor '>Account</span>
          </h3>
          <form >
            <div className="mb-5">
              <input type="text"
                placeholder="Full Name"
                name="name"
                value=""
                className="w-full px-4 pr-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                required
              />
            </div>
            <div className="mb-5">
              <input type="email"
                placeholder="Enter your email address"
                name="email"
                value=""
                className="w-full px-4 pr-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                required
              />
            </div>
            <div className="mb-5">
              <input type="password"
                placeholder="Password"
                name="password"
                value=""
                className="w-full px-4 pr-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                required
              />
            </div>
            <div className='mb-5 flex items-center justify-between'>
              <label  className='text-headingColor font-bold text-[16px] leading-7 '>
                Are You a : <select name="role" className='text-textColor font-bold  text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                  <option value="patient">Patient</option>
                  <option value="patient">Doctor</option>
                </select>
              </label>
              <label  className='text-headingColor font-bold text-[16px] leading-7 '>
                Gender : <select name="gender" className='text-textColor font-bold  text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
}

export default Signup;