import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import { toast } from "react-toastify";
import { authContext } from "../context/AuthContext";
import HashLoader from "react-spinners/HashLoader";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import medicareplus from "../assets/images/medicareplus.png";



const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",

  })
  const [showPassword, setShowPassword] = useState(false);
  // lets define loader
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useContext(authContext)

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  // copyed fron signup
  const submitHandler = async event => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json()
      if (!res.ok) {
        throw new Error(result.message)
      }
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role,
        },

      });



      setLoading(false);
      toast.success(result.message);
      navigate('/home');

    } catch (err) {
      toast.error(err.message)
      setLoading(false)
    }
  };


  return <section className="relative min-h-screen overflow-hidden bg-fixed bg-no-repeat bg-center px-5 lg:px-0">
        {/* Fixed Background Image with Overlay */}
        <div className="fixed inset-0 z-[-1] w-full h-full">
          <img
            className="w-full h-full object-cover object-top"
            src={medicareplus}
            alt="Medical background"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

    <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-lg py-5 px-10 bg-black/60 md:p-10 '>


      <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10 mt-4 animate-rotate-bounce'>
        Hello ! <span className='text-[#007e69]'> Welcome</span> Back 💐
      </h3>


      <form className="py-4 md:py-0" onSubmit={submitHandler}>

        <div className="mb-5">
          <input type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b-2 border-solid border-headingColor focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 bg-[#404c49] text-headingColor placeholder:text-white/80 rounded-md cursor-pointer hover:animate-hover-pulse"
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
            className="w-full px-4 py-3 border-b-2 border-solid border-headingColor focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 bg-[#404c49] text-headingColor placeholder:text-white/80 rounded-md cursor-pointer hover:animate-hover-pulse"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 text-headingColor"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p className="mt-5 text-textColor text-center ">
          <Link to='/register' className="text-headingColor font-medium ml-1">
          Forget Password ?
          </Link>
        <div className="mt-7">
          <button type="submit" className="w-full bg-[#007e69] font-bold border-solid border-2 border-[#007e69] text-white text-[20px] leading-[30px] rounded-lg px-4 py-3 hover:bg-white hover:border-[#007e69] hover:border-solid  hover:text-[#007e69] animate-scale-up">
            {loading ? <HashLoader color="#fff" size={25} /> : 'login'}
          </button>
        </div>
        <p className="mt-5 text-textColor text-center hover:animate-hover-pulse">
          Don&apos;t have an account?
          <Link to='/register' className="text-[#007e69] font-medium ml-1">
            Register
          </Link>
        </p>
        <button type="submit" className="w-3/4 bg-heading border-solid border-2 border-[#007e69] text-green-500 text-[16px] leading-[30px] rounded-lg px-1 py-1 mt-2 ">
            Sign In with 
            <Link to='' className="text-headingColor font-medium ml-1">
            Google
          </Link> 
          </button>
       
         

        </p>
      </form>



    </div>
  </section>

}

export default Login;