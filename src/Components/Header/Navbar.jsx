// import React from 'react';
// // import React, { useContext } from 'react';
// // import { NavLink, useLocation, useNavigate } from 'react-router';
// import { NavLink } from 'react-router';
// import { CgProfile } from "react-icons/cg";
// import logo from "../../assets/Green_Minimalist_Home_Logo___2_-removebg-preview.png"
// import "./Navbar.css"
// // import { AuthContext } from '../../AuthProvider/AuthProvider';
// // import { Bounce, toast } from 'react-toastify';

// const Navbar = () => {
//     // const { userData, logout, theme, setTheme } = useContext(AuthContext)
//     // const navigate = useNavigate()
//     // const { pathname } = useLocation()
//     const nav = <>
//         <li classNameName='myclassName hover:text-[#DC143C] duration-400'><NavLink to={"/"}>Home</NavLink></li>
//     </>

//     // const logoutHandler = () => {
//     //     logout()
//     //         .then(() => {
//     //             toast.success('🦄 Login Successfully', {
//     //                 position: "top-right",
//     //                 autoClose: 1000,
//     //                 hideProgressBar: false,
//     //                 closeOnClick: false,
//     //                 pauseOnHover: true,
//     //                 draggable: true,
//     //                 progress: undefined,
//     //                 theme: "colored",
//     //                 transition: Bounce
//     //             });
//     //             navigate("/")
//     //         })
//     //         .catch(error => {
//     //             toast.error(`${error.code}`, {
//     //                 position: "top-right",
//     //                 autoClose: 1000,
//     //                 hideProgressBar: false,
//     //                 closeOnClick: false,
//     //                 pauseOnHover: true,
//     //                 draggable: true,
//     //                 progress: undefined,
//     //                 theme: "colored",
//     //                 transition: Bounce
//     //             });
//     //         })
//     // }

//     return (
//         <div classNameName="navbar bg-base-100 shadow-sm border-b-2 border-bg-base-100">
//             <div classNameName="navbar-start">
//                 <div classNameName="dropdown">
//                     <div tabIndex={0} role="button" classNameName="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" classNameName="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         classNameName="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//                         {nav}
//                     </ul>
//                 </div>
//                 <div classNameName='max-w-[150px]'>
//                     <img src={logo} alt={logo} />
//                 </div>
//             </div>
//             <div classNameName="navbar-center hidden lg:flex">
//                 <ul classNameName="text-base font-medium flex gap-7 px-1">
//                     {nav}
//                 </ul>
//             </div>
//             <div classNameName="mynewclassName flex items-center gap-3 navbar-end">
//                 <label classNameName="swap swap-rotate">
//                     {/* this hidden checkbox controls the state */}
//                     <input type="checkbox" onChange={toggleHandler} checked={theme === "dark"} />

//                     {/* sun icon */}
//                     <svg classNameName="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24">
//                         <path d="M5 12a7 7 0 1114 0 7 7 0 01-14 0z" />
//                     </svg>

//                     {/* moon icon */}
//                     <svg classNameName="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 24 24">
//                         <path d="M21.64 13.65A9 9 0 1110.35 2.36a9 9 0 0011.29 11.29z" />
//                     </svg>
//                 </label>

//                 <div classNameName='relative flex w-[70px] h-[70px] group items-center'>
//                     {
//                         userData ? <img classNameName='w-[35px] h-[35px] flex items-center rounded-full object-cover' src={userData?.photoURL} /> : <CgProfile size={35} color='#DC143C' />
//                     }
//                     {
//                         userData && <div classNameName="absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                             <p classNameName="text-[#DC143C] text-[12px] font-normal">{userData?.displayName}</p>
//                         </div>
//                     }
//                 </div>
//                 {
//                     userData ? <button onClick={logoutHandler} classNameName={`rounded-md flex justify-center items-center px-3.5 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium bg-[#DC143C] border-[#DC143C]`}>
//                         <span classNameName={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-[#DC143C] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
//                         <span classNameName={`relative text-[#FFFFFF]`}>Logout</span>
//                     </button> : <>
//                         <button onClick={() => navigate("login")} classNameName={`rounded-md flex justify-center items-center px-3.5 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium ${(pathname === "/login") && "bg-[#DC143C]"} border-[#DC143C]`}>
//                             <span classNameName="absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-[#DC143C] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
//                             <span classNameName={`relative text-[#DC143C] transition duration-300 ${(pathname === "/login") && "text-white"} group-hover:text-white ease`}>Login</span>
//                         </button>
//                         <button onClick={() => navigate("signup")} classNameName={`rounded-md flex justify-center items-center px-3.5 py-1.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium  ${(pathname === "/signup") && "bg-[#DC143C]"} border-[#DC143C]`}>
//                             <span classNameName={`absolute w-64 h-0 transition-all duration-500 origin-center rotate-45 -translate-x-20 bg-[#DC143C] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease`}></span>
//                             <span classNameName={`relative text-[#DC143C] transition duration-300 ${(pathname === "/signup") && "text-white"} group-hover:text-white ease`}>Signup</span>
//                         </button>
//                     </>
//                 }
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React from 'react';
import "./Navbar.css"
import logoDefauilt from "../../assets/Black Blue and Green Modern School Logo Design (3).png"
import { Link, NavLink } from 'react-router';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
const Navbar = () => {
    const nav = <>
        <li className='text-white'><NavLink>Home</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <Link className='text-white max-w-[200px]'>
                    <img src={logoDefauilt} alt={logoDefauilt} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base font-medium">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <button href="#_" class="relative inline-flex items-center justify-start px-5 py-2.5 overflow-hidden font-medium rounded-lg group">
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-neutral opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-neutral opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative w-full text-left text-neutral transition-colors duration-200 ease-in-out group-hover:text-neutral-content flex justify-center items-center gap-2"><BiLogIn size={20} /> Login</span>
                    <span class="absolute inset-0 border-2 border-neutral rounded-lg"></span>
                </button>
                <button href="#_" class="relative inline-flex items-center justify-start px-5 py-2.5 overflow-hidden font-medium rounded-lg group">
                    <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-neutral opacity-[3%]"></span>
                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-neutral opacity-100 group-hover:-translate-x-8"></span>
                    <span class="relative w-full text-left text-neutral transition-colors duration-200 ease-in-out group-hover:text-neutral-content flex justify-center items-center gap-2"><BiLogOut size={20} /> Logout</span>
                    <span class="absolute inset-0 border-2 border-neutral rounded-lg"></span>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
