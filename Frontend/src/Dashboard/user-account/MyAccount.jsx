import userImg from "../../assets/images/doctor-img02.png";
const MyAccount = () => {
  return (
    <div className='max-w-[1170px] px-5 mx-auto'>
      <div className='grid md:grid-cols-3 gap-10'>
        <div className='pb-[50px] px-[30px] rounded-md'>
          <div className='flex items-center justify-center'>
            <figure className='w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor'>
              <img src={userImg} alt="" className='w-ful h-full rounded-full' />
            </figure>

          </div>
          <div className="text-center mt-4 ">
            <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">Dr.Elon Musk</h3>
            <p className="text-textColor text-[15px] leading-6 font-medium">muskelon@gmail.com</p>
            <p className="text-textColor text-[15px] leading-6 font-medium">Blood Type: <span className="ml-2 text-headingColor text-[22px] leading-8">0+
              
              </span>
              </p>
    
          </div>
          <div className="mt-[50px] md:mt[100px]">
            <button className="w-full bg-[#181A1E] font-bold shadow-sm shadow-black p-3 text-[16px] leading-7 rounded-md text-white hover:text-[#181A1E] hover:bg-white hover:border border-solid hover:border-[#181A1E]">Logout
              </button> 
            <button className="w-full font-bold shadow-sm shadow-red-600 bg-red-600 p-3 mt-3 text-[16px] leading-7 rounded-md text-white hover:text-red-600 hover:bg-white border-red-600 border-solid hover:border hover:border-red-600 ">Delete
              </button> 

          </div>

        </div>

      </div>
      

    </div>
  )
}

export default MyAccount