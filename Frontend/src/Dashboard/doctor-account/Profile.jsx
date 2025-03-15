import { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: "",
    bio: "",
    gender: '',
    specialization: "",
    ticketprice: 0,
    qualifications: [{ startingDate: '', endingDate: '', degree: '', university: '', }],
    experiences: [{ startingDate: '', endingDate: '',position:'',hospital:''}],
    timeslots: [{ day: '', startingTime: '',endingTime:''}],
    about:'',
    photo:null,

  });


  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileInputChange = e =>{};
  
  const updateProfileHandler = async e =>{
    e.preventDefault();
  }


  return (
    <div>
      <h2 className='text-headingColor font-bold text-[24px] leading-9 mb-10'>Profile Information</h2>
      <form >
        <div className='mb-2'>
          <p className="form__label">Name*</p>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Full Name' className='form__input' />

        </div>
        <div className='mb-2'>
          <p className="form__label">Email*</p>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Email' className='form__input' readOnly aria-readonly disabled="true" />

        </div>
        <div className='mb-2'>
          <p className="form__label">Phone*</p>
          <input type="number" name="phone" value={formData.phone} onChange={handleInputChange} placeholder='Phone Number' className='form__input' />
        </div>
        <div className='mb-2'>
          <p className="form__label">Bio*</p>
          <input type="text" name="bio" value={formData.bio} onChange={handleInputChange} placeholder='Bio' className='form__input' maxLength={100} rows={"3"} />
        </div>
        <div className='mb-2'>
          <div className='grid grid-cols-3 gap-6 mb-[30px] '>
            <div>
              <p className='form__label '>Gender*</p>
              <select name="gender" value={formData.gender} onChange={handleInputChange} className='form__input py-3.5'>
                <option value="">Select</option>
                <option value="male ">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className='form__label '>Specialization*</p>
              <select name="specialization" value={formData.specialization} onChange={handleInputChange} className='form__input py-3.5'>
                <option value="">Select</option>
                <option value="surgeon ">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>
            <div>
              <p className='form__label '>Ticket Price</p>
              <input type="number" placeholder='RS.600' name='ticketPrice' value={formData.ticketprice} className='form__input' onChange={handleInputChange} />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <p className='form__label font-bold text-xl text-center text-[rgb(0,126,105)]'>Qualificaitons:*</p>
          {formData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className='form__label'>Starting Date*</p>
                    <input type="date" name='startingDate' value={item.startingDate} className='form__input' />
                  </div>
                  <div>
                    <p className='form__label'>Ending Date*</p>
                    <input type="date" name='endingDate' value={item.endingDate} className='form__input' />
                  </div>

                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className='form__label'>Degree*</p>
                    <input type="text" name='degree' value={item.degree} className='form__input' />
                  </div>
                  <div>
                    <p className='form__label'>University*</p>
                    <input type="text" name='university' value={item.university} className='form__input' />
                  </div>

                </div>
                <button className='bg-red-600 p-2 rounded-full text-white text-[22px] mt-2 mb-[30px] cursor-pointer '><AiOutlineDelete /> </button>
              </div>
            </div>
          ))}
          <button className='bg-[rgb(0,126,5)] px-2 py-3 rounded text-white h-fit cursor-pointer'>Add Qualification</button>
        </div>
        <div className='mb-5'>
          <p className='form__label font-bold text-xl text-center text-[rgb(0,126,105)]'>Experiences:*</p>
          {formData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 gap-5'>
                  <div>
                    <p className='form__label'>Starting Date*</p>
                    <input type="date" name='startingDate' value={item.startingDate} className='form__input' />
                  </div>
                  <div>
                    <p className='form__label'>Ending Date*</p>
                    <input type="date" name='endingDate' value={item.endingDate} className='form__input' />
                  </div>

                </div>
                <div className='grid grid-cols-2 gap-5 mt-5'>
                  <div>
                    <p className='form__label'>Position*</p>
                    <input type="text" name='position' value={item.position} className='form__input' />
                  </div>
                  <div>
                    <p className='form__label'>Hospital*</p>
                    <input type="text" name='hospital' value={item.hospital} className='form__input' />
                  </div>

                </div>
                <button className='bg-red-600 p-2 rounded-full text-white text-[22px] mt-2 mb-[30px] cursor-pointer '><AiOutlineDelete /> </button>
              </div>
            </div>
          ))}
          <button className='bg-[rgb(0,126,5)] px-2 py-3 rounded text-white h-fit cursor-pointer'>Add Experience</button>
        </div>
        <div className='mb-5'>
          <p className='form__label font-bold text-xl text-center text-[rgb(0,126,105)]'>Time Slots:*</p>
          {formData.timeslots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className='grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5'>
                  <div>
                    <p className='form__label'>Days*</p>
                    <select name="day" value={item.day} className='form__input py-3.5'>
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
                    <input type="time" name='startingTime' value={item.startingTime} className='form__input' />
                  </div>
                  <div>
                    <p className='form__label'>Ending Time*</p>
                    <input type="time" name='endingTime' value={item.endingTime} className='form__input' />
                  </div>
                 
                  <div className='flex items-center'>
                  <button className='bg-red-600 p-2 rounded-full text-white text-[22px]  mt-9 cursor-pointer '><AiOutlineDelete /> </button>
                  </div>

                </div>
               
              </div>
            </div>
          ))}
          <button className='bg-[rgb(0,126,5)] px-2 py-3 rounded text-white h-fit cursor-pointer'>Add TimeSlots</button>
        </div>
        <div className='mb-5'>
          <p className='form__label font-bold text-xl text-center text-[rgb(0,126,105)]'>About:*</p>
          <textarea name="about" rows={5} value={formData.about} placeholder='Write about you ...' onChange={handleInputChange} className='form__input'></textarea>
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
          <button type='submit' onClick={updateProfileHandler} className='bg-[rgb(0,126,105)] text-white text-[20px] leading-[30px] w-full py-3 px-4 rounded-lg'>Update Profile</button>

        </div>
      </form>

    </div>
  )
}

export default Profile