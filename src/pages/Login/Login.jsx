import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const [passwordShown, setPasswordShown] = useState(false);
   const { googleSign, signIn } = useContext(AuthContext);
   const [error, setError] = useState('');
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const togglePassword = () => {
      setPasswordShown(!passwordShown);
   };

   const onSubmit = (data) => {
      signIn(data.email, data.password)
         .then((result) => {
            const user = result.user;
            // console.log(user);
            navigate(from, { replace: true });
         })
         .catch(error => setError(error.message))
   }

   const handleGoogleSignIn = () => {
      googleSign()
         .then(() => {
            navigate(from, { replace: true });
         })
         .catch(error => setError(error.message))
   }

   return (
      <div>
         <Helmet>
            <title>Skill Up - Login</title>
         </Helmet>

         <div className="hero py-10">
            <div className="hero-content w-full">
               <div className="card w-full max-w-sm border rounded-md bg-base-200">
                  <h2 className='text-4xl text-[#32345B] text-center font-bold mt-5 uppercase'>Login</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered rounded-md" />
                        {errors.email && <small className="text-rose-600 font-semibold">Email field is required</small>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <div className="flex justify-center items-center">
                           <input {...register("password", { required: true })} type={passwordShown ? "text" : "password"} placeholder="Password" className="input input-bordered rounded-md w-full" />
                           <span onClick={togglePassword} className="absolute right-14 cursor-pointer text-[18px]">{passwordShown ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                        </div>
                        {errors.password && <small className="text-rose-600 font-semibold">Password field is required</small>}
                     </div>

                     <div className="form-control mt-6">
                        <input type="submit" value="Login" className="btn bg-[#32345B] hover:bg-[#32345be8] text-white capitalize text-[16px] rounded-md" />
                        <ToastContainer />

                        <div className="flex justify-center items-center mt-3 space-x-3">
                           <span onClick={handleGoogleSignIn} className=""><FcGoogle className='mr-2 text-2xl cursor-pointer p-2 w-[45px] h-[45px] rounded-full border border-[#32345B] hover:bg-[#e1e2e6] transition' /></span>

                           <span onClick={handleGoogleSignIn} className=""><FaFacebookF className='mr-2 text-blue-600 text-2xl cursor-pointer p-2 w-[45px] h-[45px] rounded-full border border-[#32345B] hover:bg-[#e1e2e6] transition' /></span>
                        </div>
                     </div>


                     <small className='text-center mt-2'>Don&lsquo;t have account? <Link to="/register" className='text-[#F36B22] font-semibold'>Register</Link></small>
                  </form>
                  <p className="text-red-500 text-center font-semibold -mt-5 mb-5">{error}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;