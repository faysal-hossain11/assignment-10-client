import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
        lengths: false
    });

    const { signInWithGoogle, updateUserProfile, createUser } = use(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();

    const handleGoolgeSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                // console.log(result.user);
                const user = result.user
                const saveUser = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    createdAt: new Date()
                };

                fetch(`http://localhost:3000/users`, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Save user", data);
                    navigate(location.state || "/")
                })

                toast.success("Successfully Signed In");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const displayName = e.target.displayName.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photoURL = e.target.photoURL.value

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                updateUserProfile(displayName, photoURL);

                const saveUser = {
                    name: displayName,
                    email: email,
                    password: password,
                    photoURL: photoURL,
                    createdAt: new Date()
                }

                fetch(`http://localhost:3000/users`, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Save user", data);
                    toast.success('Account Created Successfully', { id: 'create-user' });
                    navigate(location.state || "/");
                })
                e.target.reset();
            })
            .catch((error) => {
                console.log(error);
                toast.error(`Error: ${error.message}`, { id: 'create-user' });
            });
    }


    const validatePassword = (password) => {
        setErrors({
            uppercase: !/[A-Z]/.test(password),
            lowercase: !/[a-z]/.test(password),
            number: !/[0-9]/.test(password),
            specialChar: !/[!@#$%^&*(),.?":{}|<>/]/.test(password),
            lengths: !password.length >= 8
        })
    }

    const handlePasswordChange = (e) => {
        const pwd = e.target.value
        setPassword(pwd);
        validatePassword(pwd);
    }




    const handlePassword = () => {
        setShowPassword(!showPassword);
    }



    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                <h1 className="text-4xl font-bold text-center">Register</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit} >
                        <div className='mb-3'>
                            <label className="label">Name</label>
                            <input type="text" name='displayName' className="input w-full outline-0" placeholder="Name" />
                        </div>
                        <div className='mb-3'>
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full outline-0" placeholder="Email" />
                        </div>
                        <div className='mb-3'>
                            <label className="label">Password</label>
                            <div className='flex items-center gap-2 border-2 border-gray-600 pr-2 focus:border-2 rounded-md '>
                                <input type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} name='password' className="border-none input w-full outline-0" placeholder="Password" />
                                {
                                    <p onClick={handlePassword}> {showPassword ? <FaRegEye /> : <FaRegEyeSlash />} </p>
                                }
                            </div>

                            {errors.uppercase && <p className='text-red-500 text-sm'>Must include an uppercase letter (A-Z)</p>}
                            {errors.lowercase && <p className='text-red-500 text-sm'>Must include a lowercase letter (a-z)</p>}
                            {errors.number && <p className='text-red-500 text-sm'>Must include a number (0-9)</p>}
                            {errors.specialChar && <p className='text-red-500 text-sm'>Must include a symbol (!@#$…)</p>}
                            {errors.lengths && <p className='text-red-500 text-sm'>Minimum 8 characters required</p>}


                        </div>
                        <div className='mb-3'>
                            <label className="label">Photo Url</label>
                            <input type="text" name='photoURL' className="input w-full outline-0" placeholder="Photo Url" />
                        </div>
                        <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>
                    </form>
                    {/* Google */}
                    <div className='flex gap-4 items-center'>
                        <div className='h-[1px] w-full bg-gray-700'></div>
                        <>Or</>
                        <div className='h-[1px] w-full bg-gray-700'></div>
                    </div>
                    <button onClick={handleGoolgeSignIn} className="btn bg-white text-black border-[#e5e5e5] mt-4">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>

                    <p className='mt-3'>Already have an account? <Link to='/login' className='underline'>Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;