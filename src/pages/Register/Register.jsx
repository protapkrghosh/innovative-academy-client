import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [passwordShown, setPasswordShown] = useState(false);

   const { registerUser, updateUserProfile, logOut } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const [error, setError] = useState('');

   const togglePassword = () => {
      setPasswordShown(!passwordShown);
   };

   const onSubmit = data => {
      registerUser(data.email, data.password)
         .then(result => {
            updateUserProfile(data.name, data.photo)
               .then(() => { })
               .catch(error => { console.log(error) })
            reset();
            navigate("/login");
         })
         .catch(error => {
            setError(error.message);
         })
   };

   return (
      <div>
         <Helmet>
            <title>Register - Innovative Academy</title>
         </Helmet>

         <div className="hero py-10">
            <div className="hero-content w-full">
               <div className="card md:w-1/2 max-w-sm border border-[#f36b2233] shadow-md rounded-md bg-base-200">
                  <h2 className='text-[#32345B] text-4xl text-center font-bold mt-5 uppercase'>Register</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered rounded-md" />
                        {errors.name && <small className="text-rose-600 font-semibold">Name is required</small>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered rounded-md" />
                        {errors.email && <small className="text-rose-600 font-semibold">Email is required</small>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <div className="flex justify-center items-center">
                           <input {...register("password", {
                              required: true,
                              minLength: 6,
                              maxLength: 10,
                              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*])/
                           })} type={passwordShown ? "text" : "Password"} placeholder="Password" className="input input-bordered rounded-md w-full" />

                           <span onClick={togglePassword} className="absolute right-14 cursor-pointer text-[18px]">{passwordShown ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                        </div>

                        {errors.password?.type === 'required' && <small className="text-rose-500 font-semibold">Password is required</small>}
                        {errors.password?.type === 'minLength' && <small className="text-rose-500 font-semibold">Password must be 6 characters</small>}
                        {errors.password?.type === 'maxLength' && <small className="text-rose-500 font-semibold">Password must be 10 characters</small>}
                        {errors.password?.type === 'pattern' && <small className="text-rose-500 font-semibold">Password must have one uppercase, lowercase, number and special characters</small>}
                     </div>

                     <div className="form-control mt-6">
                        <input type="submit" value="Register" className="btn bg-[#32345B] hover:bg-[#32345be8] text-white capitalize text-[16px] rounded-md" />
                        <ToastContainer />

                        <small className='text-center mt-2'>Already have an account? <Link to="/login" className='text-[#F36B22] font-semibold'>Login</Link></small>
                     </div>
                  </form>
                  <p className="text-red-500 text-center font-semibold -mt-5 mb-5">{error}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;