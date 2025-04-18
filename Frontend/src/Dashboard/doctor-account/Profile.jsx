/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import uploadImageToCloudinary from "./../../utils/uploadCloudinary";
import { toast } from "react-toastify";
import { BASE_URL, token } from '../../utils/config';



const Profile = ({ doctorData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: "",
    phone: "",
    bio: "",
    gender: '',
    specialization: "",
    ticketprice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    about: '',
    photo: "",

  });

  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      gender: doctorData?.gender,
      specialization: doctorData?.specialization,
      ticketprice: doctorData?.ticketprice,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      timeSlots: doctorData?.timeSlots,
      about: doctorData?.about,
      photo: doctorData?.photo,
    })
  }, [doctorData])


  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = async event => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setFormData({ ...formData, photo: data?.url });
  };

  const updateProfileHandler = async e => {
    e.preventDefault();

    if (!doctorData?._id) {
      toast.error("Invalid doctor data");
      return;
    }

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      if (!res.ok) {
        throw Error(result.message);
      }
      toast.success(result.message);

    } catch (err) {
      toast.error(err.message)

    }
  }


  // reusable function for adding item
  const addItem = (key, item) => {
    setFormData(prevFormData => ({ ...prevFormData, [key]: [...prevFormData[key], item] }))
  }

  // reusable input change function
  const handleReusableInputChangeFunc = (key, index, event) => {
    const { name, value } = event.target

    setFormData(prevFormData => {
      const updateItems = [...prevFormData[key]]

      updateItems[index][name] = value

      return {
        ...prevFormData,
        [key]: updateItems,
      }
    })
  }

  // reusable function for deleting item
  const deleteItem = (key, index) => {
    setFormData(prevFormData => ({
      ...prevFormData, [key]: prevFormData[key].filter((_, i) => i !== index),
    }))
  }



  // for qualification
  const addQualification = e => {
    e.preventDefault();
    addItem('qualifications', {
      startingDate: '', endingDate: '', degree: 'PHD', university: 'Tribhuvan University Teaching Hospital',

    })
  }
  const handleQualificationChange = (event, index) => {
    handleReusableInputChangeFunc("qualifications", index, event)
  }

  const deleteQualificaition = (e, index) => {
    e.preventDefault();
    deleteItem("qualifications", index);
  }
  // for experience
  const addExperience = e => {
    e.preventDefault();
    addItem('experiences', {
      startingDate: '', endingDate: '', position: 'Senior Sergeon', hospital: 'T.U. Teaching Hospital',

    })
  }
  const handleExperienceChange = (event, index) => {
    handleReusableInputChangeFunc("experiences", index, event)
  }

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItem("experiences", index);
  }

  // for timeslots
  const addTimeSlot = e => {
    e.preventDefault();
    addItem('timeSlots', {
      day: 'Sunday', startingTime: '10:00', endingTime: '16:00',

    })
  }
  const handleTimeSlotChange = (event, index) => {
    handleReusableInputChangeFunc("timeSlots", index, event)
  }

  const deleteTimeSlot = (e, index) => {
    e.preventDefault();
    deleteItem("timeSlots", index);
  }


  return (
    <section className='px-6'>
    <div>
      <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>Profile Information</h2>
      <form >
        <div className='mb-2'>
          <p className="form__label">Name*</p>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Full Name' className='form__input text-headingColor bg-[#404c49]' />
        </div>
        <div className='mb-2'>
          <p className="form__label">Email*</p>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Email' className='form__input text-headingColor bg-[#404c49]' readOnly aria-readonly disabled="true" />
        </div>
        <div className='mb-2'>
          <p className="form__label">Phone*</p>
          <input type="number" name="phone" value={formData.phone} onChange={handleInputChange} placeholder='Phone Number' className='form__input text-headingColor bg-[#404c49]' />
        </div>
        <div className='mb-2'>
          <p className="form__label">Bio*</p>
          <input type="text" name="bio" value={formData.bio} onChange={handleInputChange} placeholder='Bio' className='form__input text-headingColor bg-[#404c49]' maxLength={100} rows={3} />
        </div>
        <div className='mb-2'>
          <div className='grid grid-cols-3 gap-6 mb-[30px] '>
            <div>
              <p className='form__label '>Gender*</p>
              <select name="gender" value={formData.gender} onChange={handleInputChange} className='form__input py-3.5 text-headingColor bg-[#404c49]'>
                <option value="">Select</option>
                <option value="male ">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className='form__label '>Specialization*</p>
              <select name="specialization" value={formData.specialization} onChange={handleInputChange} className='form__input py-3.5 text-headingColor bg-[#404c49]'>
                <option value="">Select</option>
                <option value="Surgeon ">Surgeon</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Pulmonologist">Pulmonologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Endocrinologist">Endocrinologist</option>
                <option value="gastroenterologist">Gastroenterologist</option>
                <option value="Oncologist">Oncologist</option>
                <option value="Orthopedic surgeon">Orthopedic Surgeon</option>
                <option value="Psychiatry">Psychiatry</option>
                <option value="ENT - Otolaryngology">ENT - Otolaryngology</option>
                <option value="Ophthalmology">Ophthalmology</option>
                <option value="Urology">Urology</option>
              </select>
            </div>
            <div>
              <p className='form__label '>Ticket Price</p>
              <input type="number" placeholder='RS.600' name='ticketPrice' value={formData.ticketprice} className='form__input text-headingColor bg-[#404c49]' onChange={handleInputChange} />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <p className='form__label font-bold text-xl text-[rgb(0,126,105)] animate-scale-up'>Qualificaitons:*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className='form__label'>Starting Date*</p>
                    <input onChange={e => handleQualificationChange(e, index)} type="date" name='startingDate' value={item.startingDate} className='form__input text-headingColor bg-[#404c49]' />
                  </div>
                  <div>
                    <p className='form__label'>Ending Date*</p>
                    <input onChange={e => handleQualificationChange(e, index)} type="date" name='endingDate' value={item.endingDate} className='form__input text-headingColor bg-[#404c49]' />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className='form__label'>Degree*</p>
                    <input onChange={e => handleQualificationChange(e, index)} type="text" name='degree' value={item.degree} className='form__input text-headingColor bg-[#404c49]' />
                  </div>
                  <div>
                    <p className='form__label'>University*</p>
                    <input onChange={e => handleQualificationChange(e, index)} type="text" name='university' value={item.university} className='form__input text-headingColor bg-[#404c49]' />
                  </div>
                </div>
                <button onClick={e => deleteQualificaition(e, index)} className='bg-red-600 p-2 rounded-full text-white text-[22px] mt-2 mb-[30px] cursor-pointer '><AiOutlineDelete /> </button>
              </div>
            </div>
          ))}
          <button onClick={addQualification} className=' px-2 py-3 rounded  h-fit cursor-pointer text-headingColor bg-green-600'>Add Qualification</button>
        </div>
        <div className='mb-5'>
          <p className='form__label font-bold text-xl  text-[rgb(0,126,105)] animate-scale-up'>Experiences:*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className='form__label'>Starting Date*</p>
                    <input onChange={e => handleExperienceChange(e, index)} type="date" name='startingDate' value={item.startingDate} className='form__input text-headingColor bg-[#404c49]' />
                  </div>
                  <div>
                    <p className='form__label'>Ending Date*</p>
                    <input onChange={e => handleExperienceChange(e, index)} type="date" name='endingDate' value={item.endingDate} className='form__input text-headingColor bg-[#404c49]' />
                  </div>
                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className='form__label'>Position*</p>
                    <input type="text" name='position' value={item.position} className='form__input bg-[#404c49]' onChange={e => handleExperienceChange(e, index)} />
                  </div>
                  <div>
                    <p className='form__label'>Hospital*</p>
                    <input type="text" name='hospital' value={item.hospital} className='form__input bg-[#404c49]' onChange={e => handleExperienceChange(e, index)} />
                  </div>
                </div>
                <button className='bg-red-600 p-2 rounded-full text-white text-[22px] mt-2 mb-[30px] cursor-pointer ' onClick={e => deleteExperience(e, index)}><AiOutlineDelete /> </button>
              </div>
            </div>
          ))}
          <button onClick={addExperience} className='text-headingColor bg-green-600 px-2 py-3 rounded  h-fit cursor-pointer '>Add Experience</button>
        </div>
        <div className='mb-5'>
          <p className='form__label font-bold text-xl  text-[rgb(0,126,105)]'>Time Slots:*</p>
          {formData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5 text-headingColor bg-[#404c49]'>
                  <div>
                    <p className='form__label'>Days*</p>
                    <select name="day" value={item.day} className='form__input bg-[#404c49] py-3.5 text-headingColor' onChange={e => handleTimeSlotChange(e, index)}>
                      <option value="">Select</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                      <option value="saturday">Saturday</option>
                    </select>
                  </div>
                  <div>
                    <p className='form__label'>Starting Time*</p>
                    <input type="time" name='startingTime' value={item.startingTime} className='form__input bg-[#404c49]'  onChange={e => handleTimeSlotChange(e, index)} />
                  </div>
                  <div>
                    <p className='form__label'>Ending Time*</p>
                    <input type="time" name='endingTime' value={item.endingTime} className='form__input bg-[#404c49]' onChange={e => handleTimeSlotChange(e, index)} />
                  </div>
                  <div className='flex items-center'>
                    <button onClick={e => deleteTimeSlot(e, index)} className='bg-red-600 p-2 rounded-full text-white text-[22px]  mt-9 cursor-pointer '><AiOutlineDelete /> </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <button onClick={addTimeSlot} className='bg-[rgb(0,126,5)] px-2 py-3 rounded text-headingColor h-fit cursor-pointer animate-scale-up'>Add TimeSlots</button>
        </div>
        <div className='mb-5'>
          <p className='form__label font-bold text-xl text-center text-[rgb(0,126,105)] animate-scale-up'>About:*</p>
          <textarea name="about" rows={5} value={formData.about} placeholder='Write about you ...' onChange={handleInputChange} className='form__input bg-[#404c49] text-headingColor'></textarea>
        </div>
        <div className='mb-5 flex items-center gap-3'>
          {formData.photo && (
            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-[#007e69] flex items-center justify-center'>
              <img src={formData.photo}
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
        <div className='mt-7'>
          <button type='submit' onClick={updateProfileHandler} className='bg-[rgb(0,126,105)] text-headingColor text-[20px] leading-[30px] w-full py-3 px-4 rounded-lg animate-scale-up'>Update Profile</button>
        </div>
      </form>
    </div>
    </section>
  )
}

export default Profile