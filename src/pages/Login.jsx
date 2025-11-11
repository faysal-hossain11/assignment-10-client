import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const { signInWithGoogle, signInUser } = use(AuthContext);

    const navigator = useNavigate();
    const location = useLocation();

    const handleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                toast.success("Successfully Signed In")
                navigator(location?.state || '/');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("Logged in successfully");
                navigator(location?.state || "/");
                e.target.reset();
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const handlePassword = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl ">
                <h1 className="text-4xl font-bold text-center">Login</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full outline-0" placeholder="Email" />
                        </div>
                        <div className='mb-3'>
                            <label className="label">Password</label>
                            <div className='flex items-center gap-2 border-2 border-gray-600 pr-2 focus:border-2 rounded-md '>
                                <input type={showPassword ? "text" : "password"} name='password' className="border-none input w-full outline-0" placeholder="Password" />
                                {
                                    <p onClick={handlePassword}> {showPassword ? <FaRegEye /> : <FaRegEyeSlash />} </p>
                                }
                            </div>
                        </div>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4 w-full">Login</button>
                    </form>
                    {/* Google */}
                    <div className='flex gap-4 items-center'>
                        <div className='h-[1px] w-full bg-gray-700'></div>
                        <>Or</>
                        <div className='h-[1px] w-full bg-gray-700'></div>
                    </div>
                    <button onClick={handleSignIn} className="btn bg-white text-black border-[#e5e5e5] mt-4">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='mt-3'>Don't have an account? <Link to='/register' className='underline'>Register here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;