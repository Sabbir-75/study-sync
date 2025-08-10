
import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logoDefauilt from "../../assets/Black Blue and Green Modern School Logo Design (3).png"
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import ContexData from '../../Hooks/AuthContext/ContexData';
import { Bounce, toast } from 'react-toastify';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { userData, logout } = ContexData()
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = document.getElementById("navbarId").offsetHeight;
            if (window.scrollY > navbarHeight) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const nav = <>
        <li className='text-base-content hover:text-primary duration-150'><NavLink to={"/"}>Home</NavLink></li>
        <li className='text-base-content hover:text-primary duration-150'><NavLink to={"/assignments"}>Assignments</NavLink></li>
        {
            userData && <li className='text-base-content hover:text-primary duration-150'><NavLink to={"/pending"}>Pending Assignments</NavLink></li>
        }
        <li className='text-base-content hover:text-primary duration-150'><NavLink to={"/aboutus"}>About Us</NavLink></li>
    </>



    const logoutHandler = () => {
        logout()
            .then(() => {
                toast.success('Logout Successfully', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce
                });
            })
            .catch((error) => {
                toast.error(`${error.code}`, {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce
                });
            })
    }

    // For Theme Change

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "forest"
    })

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleToggle = (e) => {
        setTheme(e.target.checked ? "dark" : "forest")
    }

    return (
        <div id="navbarId" className={`navbar bg-base-100 border-b-[1px] border-primary shadow-sm z-50 transition-all duration-500 ease-in-out sticky ${
        isFixed
          ? 'fixed top-0 left-0 right-0 z-50 translate-y-0'
          : 'relative -top-30'
      }
        `}>

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <Link className='max-w-[200px]'>
                    <img src={logoDefauilt} alt={logoDefauilt} />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className={` myclassName1 flex gap-6 menu-horizontal px-1 text-base font-medium`}>
                    {nav}
                </ul>
            </div>

            <div className="navbar-end space-x-1 md:space-x-2 lg:space-x-3">
                <label className="toggle text-base-content">
                    <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} />
                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
                <div className='relative flex w-[70px] h-[70px] group items-center'>
                    {
                        userData ? <>

                            <div className="dropdown">
                                <div tabIndex={0}>
                                    <img className='cursor-pointer w-[35px] h-[35px] flex items-center rounded-full object-cover' src={userData?.photoURL} />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-primary text-primary-content rounded-box z-1 w-40 p-2 shadow-sm">
                                    <li className='text-primary-content hover:text-base-content hover:bg-base-100 rounded-box duration-150'><NavLink to={"/createassignment"}>+ Add Assignment</NavLink></li>
                                    <li className='text-primary-content hover:text-base-content hover:bg-base-100 rounded-box duration-150'><NavLink to={"/myassignments"}> My Assignments</NavLink></li>
                                </ul>
                            </div>

                        </>
                            :
                            <CgProfile size={35} className="text-primary" />
                    }
                    {
                        userData && <div className="absolute top-0 opacity-0 group-hover:opacity-100 duration-300">
                            <p className="text-primary text-[12px] font-medium">{userData?.displayName}</p>
                        </div>
                    }
                </div>
                {
                    userData ? <button onClick={logoutHandler} className="relative inline-flex items-center cursor-pointer justify-start px-5 py-2.5 overflow-hidden font-medium rounded-lg group">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-primary-content flex justify-center items-center gap-2"><BiLogOut size={20} /> Logout</span>
                        <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>
                    </button>
                        :
                        <button onClick={() => navigate("/login")} className={`relative ${(pathname === "/login") && "bg-primary"} inline-flex items-center cursor-pointer justify-start px-5 py-2.5 overflow-hidden font-medium rounded-lg group`}>
                            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                            <span className={`relative ${(pathname === "/login") && "text-primary-content"} w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-primary-content flex justify-center items-center gap-2`}><BiLogIn size={20} /> Login</span>
                            <span className="absolute inset-0 border-2 border-primary rounded-lg"></span>
                        </button>
                }

            </div>
        </div>
    );
};

export default Navbar;
