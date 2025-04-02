import signupImg from '../assets/images/giphy.webp';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import { BASE_URL } from '../utils/config';
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AnimateOnScroll from '../components/AnimateOnScroll';



const Signup = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",

  })
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  }
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file);
    // we only need the url which we will store in our database
    // now image url recives form cloudinary as a preview url
    // allowing the user to see the uploaded image before submission
    // also update the selected file and form data so form data and update a photo field so photo and data .url
    setPreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })

    // later we use cloudinary to upload images

  }
  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const { message } = await res.json()
      if (!res.ok) {
        throw new Error(message)
      }
      setLoading(false);
      toast.success(message);
      navigate('/login');

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  };


  return <section className='px-5 xl:px-0'>
    <div className='max-w-[1170px] mx-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
        {/* img box */}
        <div className="hidden lg:block  rounded-l-lg">
          <figure className='rounded-l-lg bg-white'>

            <img src={signupImg} alt="" className='w-full p-9 rounded-full' />
          </figure>
        </div>
        {/* sign up form */}
        <div className='rounded-l-lg lg:pl-16 py-10'>
    <AnimateOnScroll delay={0.1} >

          <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
            Create an <span className='text-[#007e69] '>Account</span>
          </h3>
          </AnimateOnScroll>
    <AnimateOnScroll delay={0.2} >

          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <input type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 pr-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                required
              />
            </div>
            <div className="mb-5">
              <input type="email"
                placeholder="Enter your email address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 pr-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                required
              />
            </div>
            <div className="mb-5 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
            <div className='mb-5 flex items-center justify-between'>
              <label className='text-headingColor font-bold text-[16px] leading-7 '>
                Are You a : <select value={formData.role} name="role"
                  onChange={handleInputChange} className='text-textColor font-bold  text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                  <option value="">Select</option>

                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </label>
              <label className='text-headingColor font-bold text-[16px] leading-7 '>
                Gender : <select name="gender" value={formData.gender}
                  onChange={handleInputChange} className='text-textColor font-bold  text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
              </label>
            </div>
            <div className='mb-5 flex items-center gap-3'>
              {selectedFile && (
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-[#007e69] flex items-center justify-center'>
                <img src={previewURL} 
                alt="" 
                className='w-[60px] h-[60px] rounded-full border-2 border-solid border-[#007e69] flex items-center justify-center '
                />
              </figure>
            )}
              <div className='relative w-[130px] h-[50px]'>
                <input type="file"
                  name='Photo'
                  id='customFile'
                  onChange={handleFileInputChange}
                  accept='.jpg, .png'
                  className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
                  Upload Photo
                </label>
              </div>
            </div>

            <div className="mt-7">
              <button disabled={loading && true} type="submit" className="w-full bg-[#007e69] font-bold border-solid border-2 border-[#007e69] text-white text-[20px] leading-[30px] rounded-lg px-4 py-3  ">
               {loading ?<HashLoader size={35}  color='#ffffff'  /> : 'Sign UP'}
              </button>
            </div>
            <p className="mt-5 text-textColor text-center">
              Already have an account?
              <Link to='/login' className="text-[#007e69] font-medium ml-1">
                LogIn
              </Link>

            </p>

          </form>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  </section>
}

export default Signup;