import Lottie from 'lottie-react';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import loginAnimation from "../../assets/login.json"
import ContexData from '../../Hooks/AuthContext/ContexData';
import { Bounce, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { loginAccount, googleLogin } = ContexData()
    const navigate = useNavigate()
    const location = useLocation()

    const loginHandler = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const { email, password } = Object.fromEntries(formData.entries())

        loginAccount(email, password)
            .then(() => {
                toast.success('Login Successfully', {
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
                navigate(location.state || "/")
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

    const googleHandler = () => {
        googleLogin()
            .then(() => {
                toast.success('Google Login Successfully', {
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
                navigate(location.state || "/")
              
              
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
    return (
        <div className="hero px-6 flex flex-col md:flex-row justify-center">
           <Helmet>
                <title>StudySync || Login</title>
            </Helmet>
            <div className="card bg-base-100 w-full border-base-300 border-b-[2px] border-t-[2px] shadow-sm max-w-sm shrink-0">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-center text-base-content mb-5">Login now!</h1>
                    <button onClick={googleHandler} className="btn bg-white text-black border-gray-300">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <div className="flex items-center w-full my-4">
                        <hr className="w-full text-base-content" />
                        <p className="px-3 text-base-content">OR</p>
                        <hr className="w-full text-base-content" />
                    </div>
                    <form onSubmit={loginHandler} className="fieldset text-base-content">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn text-base font-bold text-primary-content bg-primary mt-4">Login</button>
                        <p className="text-sm text-center text-gray-400">Don't have account ?
                            <Link to={"/signup"} rel="noopener noreferrer" className="text-blue-600 focus:underline hover:underline"> Sign up here</Link>
                        </p>
                    </form>
                </div>
            </div>
            <div>
                <Lottie style={{ width: "360px" }} animationData={loginAnimation} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Login;