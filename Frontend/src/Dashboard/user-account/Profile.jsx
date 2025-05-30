/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import { BASE_URL, token } from "../../utils/config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";


const Profile = ({ user }) => {


  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: null,
    gender: "",
    bloodType: "",

  })
  const navigate = useNavigate();
  useEffect(() => {
    setFormData({ name: user.name, email: user.email, photo: user.photo, gender: user.gender, bloodType: user.bloodType })
  }, [user])

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
    setSelectedFile(data.url)
    setFormData({ ...formData, photo: data.url })


  }
  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData)
      })
      const { message } = await res.json()
      if (!res.ok) {
        throw new Error(message)
      }
      setLoading(false);
      toast.success(message);
      navigate('/users/profile/me');

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  };
  return (

    <div className='pt-3 bg-black/60 px-5 '>

      <form onSubmit={submitHandler}>

        <div className="mb-5 hover:animate-hover-pulse">
          <input type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 pr-4 pt-3 border-b-2 border-solid border-headingColor focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 bg-[#404c49] text-headingColor placeholder:text-headingColor rounded-md cursor-pointer"
            required
          />
        </div>
        <div className="mb-5 hover:animate-hover-pulse">
          <input type="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 pr-4 py-1 border-b-2 border-solid border-headingColor focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 bg-[#404c49] text-headingColor placeholder:text-headingColor rounded-md cursor-pointer"
            aria-readonly
            readOnly
          />
        </div>
        <div className="mb-5 hover:animate-hover-pulse">
          <input type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 pr-4 py-1 border-b-2 border-solid border-headingColor focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 bg-[#404c49] text-headingColor placeholder:text-headingColor rounded-md cursor-pointer" aria-readonly
            readOnly

          />
        </div>
        <div className="mb-5 ">
          <input type="text"
            placeholder="Blood type"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full px-4 pr-4 py-1 border-b-2 border-solid border-headingColor focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 bg-[#404c49] text-headingColor placeholder:text-headingColor rounded-md cursor-pointer"
            aria-readonly
            readOnly
          />
        </div>

        <div className='mb-5 flex items-center justify-between '>

          <label className='text-headingColor font-bold text-[16px] leading-7 '>
            Gender : <select name="gender" value={formData.gender}
              onChange={handleInputChange} className=' font-bold  text-[15px] leading-7 px-4 py-3 focus:outline-none bg-[#404c49] text-headingColor hover:animate-hover-pulse'>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </label>
        </div>
        <div className='mb-5 flex items-center gap-3'>
          {formData.photo && (
            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-[#007e69] flex items-center justify-center'>
              <img src={formData.photo}
                alt="photo"
                className='w-[60px] h-[60px] rounded-full border-2 border-solid border-[#007e69] flex items-center justify-center '
              />
            </figure>
          )}
          <div className='relative w-[130px] h-[50px] hover:animate-hover-pulse' >
            <input type="file"
              name='Photo'
              id='customFile'
              onChange={handleFileInputChange}
              accept='.jpg, .png'
              className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
            <label htmlFor="customFile" className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer'>
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>

        <div className="mt-7 animate-scale-up">
          <button disabled={loading && true} type="submit" className="w-full bg-[#007e69] font-bold border-solid border-2 border-[#007e69] text-white text-[20px] leading-[30px] rounded-lg px-4 py-3  ">
            {loading ? <HashLoader size={25} color='#ffffff' /> : 'Update'}
          </button>
        </div>


      </form>

    </div>

  )
}

export default Profile