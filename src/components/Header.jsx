import React, { use } from 'react';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Header = () => {

    const { user, signOutUser } = use(AuthContext);



    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("sign out successfully");
                toast.success("Signed out successfully");
            })
            .catch((error) => {
                console.error("Error signing out: ", error);
                toast.error("Error signing out")
            })
    }

    const link = <>
        <div className='flex items-center gap-4'>
            <li className='list-none'><Link className='font-semibold' to='/'>Home</Link></li>
            <li className='list-none'><Link className='font-semibold' to='/pets-supplies'>Pets & Supplies</Link></li>
            {
                user && (
                    <div className='flex items-center gap-4'>
                        <li className='list-none'><Link className='font-semibold' to='/my-listings'>My Listings</Link></li>
                        <li className='list-none'><Link className='font-semibold' to='/add-listing'>Add Listing</Link></li>
                        <li className='list-none'><Link className='font-semibold' to='/my-orders'>My Orders</Link></li>
                    </div>
                )
            }
        </div>
    </>


    return (
        <div className=' bg-base-100 shadow-sm'>
            <div className="navbar w-[1440px] mx-auto flex justify-between items-center">
                {/* left logo  */}
                <div className="flex">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                {/* middle nav links */}
                <div>
                    {link}
                </div>
                {/* right avatar and login register button */}
                {user ? (
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user?.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><p className="">Profile</p></li>
                                <li><p>Settings</p></li>
                                <li><p className='text-white bg-red-300 hover:bg-red-400 transition-all duration-300' onClick={handleSignOut}>Logout</p></li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className='flex gap-4'>
                        <Link to="/login" >Login</Link>
                        <Link to="/register" className="">Register</Link>
                    </div>
                )}


            </div>
        </div>
    );
};

export default Header;