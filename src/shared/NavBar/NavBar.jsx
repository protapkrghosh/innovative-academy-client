import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo1.png"
import { useContext } from "react";
import { AuthContext } from "../../pages/providers/AuthProvider";

const NavBar = () => {
   const { users, userLogOut } = useContext(AuthContext)

   const handleLogOut = () => {
      userLogOut()
         .then()
         .catch((error) => {
            console.log(error)
         });
   }

   const navItems = <>
      <NavLink to="/" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#F36B22", };
      }}> Home </NavLink>

      <NavLink to="/instructors" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#F36B22", };
      }}>  Colleges </NavLink>

      <NavLink to="/classes" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#F36B22", };
      }}>  Admission </NavLink>

      <NavLink to="/classes" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#F36B22", };
      }}>  My College </NavLink>

   </>

   return (
      <div>
         <div className="navbar bg-base-100 border-b-2 shadow-sm px-14">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {navItems}
                  </ul>
               </div>
               <Link to="/"><img src={logo} alt="Logo" className="w-16" /></Link>
               <Link to="/" className="text-2xl font-bold ml-2"><span className="text-[#32345B]">Innovative</span> <br /> <span className="text-[#F36B22]">Academy</span></Link>
            </div>

            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navItems}
               </ul>
            </div>

            <div className="navbar-end">

               <input type="text" placeholder="Type here" className="input input-sm border border-[#F56A1E] rounded-2xl w-52 max-w-xs mr-3" />

               <Link to="profile" className="mr-3 hover:underline font-serif italic">
                  {users ? users?.displayName : ''}
               </Link>

               {users ?
                  <button onClick={handleLogOut} className='btn btn-sm btn-outline border-[#F36B22] hover:border-[#943e10] hover:bg-[#F56A1E] rounded-2xl capitalize text-[#32345B] text-[16px]'>Log Out</button> :

                  <Link to="/login">
                     <button className='btn btn-sm btn-outline border-[#F36B22] hover:border-[#943e10] hover:bg-[#F56A1E] rounded-2xl capitalize text-[#32345B] text-[16px]'>Log In</button>
                  </Link>
               }
            </div>
         </div>
      </div>
   );
};

export default NavBar;