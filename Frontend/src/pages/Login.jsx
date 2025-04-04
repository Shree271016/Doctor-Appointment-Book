import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import { toast } from "react-toastify";
import { authContext } from "../context/authContext";
import HashLoader from "react-spinners/HashLoader";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AnimateOnScroll from "../components/AnimateOnScroll";


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


  return <section className='px-5 lg:px-0'>

    <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-lg bg-white md:p-10 '>
    <AnimateOnScroll delay={0.1} >
      
      <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
        Hello ! <span className='text-[#007e69]'> Welcome</span> Back 💐
      </h3>
      </AnimateOnScroll>
    <AnimateOnScroll delay={0.2} >

      <form className="py-4 md:py-0" onSubmit={submitHandler}>

        <div className="mb-5">
          <input type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-b-2 border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#007e69] text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
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
        <div className="mt-7">
          <button type="submit" className="w-full bg-[#007e69] font-bold border-solid border-2 border-[#007e69] text-white text-[20px] leading-[30px] rounded-lg px-4 py-3 hover:bg-white hover:border-[#007e69] hover:border-solid  hover:text-[#007e69]">
            {loading ? <HashLoader color="#fff" size={25} /> : 'login'}
          </button>
        </div>
        <p className="mt-5 text-textColor text-center">
          Don&apos;t have an account?
          <Link to='/register' className="text-[#007e69] font-medium ml-1">
            Register
          </Link>

        </p>
      </form>
      </AnimateOnScroll>


    </div>
  </section>

}

export default Login;