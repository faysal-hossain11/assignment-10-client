import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gray-600 text-gray-200 py-12">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                <div>
                    <div className="w-[40px] h-[40px] ">
                        <Link to="/" className="btn btn-ghost text-xl">
                            <img src={Logo} alt="PawMart Logo" className="w-full h-full rounded-md" />
                            <span className='text-3xl font-semibold'>PawMart</span>
                        </Link>
                    </div>
                    <p className="text-sm text-gray-300">PawMart connects local pet owners and buyers for adoption and pet care products. Find, adopt, and shop — all in one place.</p>
                    <div className="mt-4 text-sm text-gray-400">© 2025 PawMart. All rights reserved.</div>
                </div>

                <div>
                    <div className="font-semibold mb-3">Useful Links</div>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#listings" className="hover:text-white">Pets & Supplies</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                        <li><a href="#terms" className="hover:text-white">Terms</a></li>
                    </ul>
                </div>

                <div>
                    <div className="font-semibold mb-3">Newsletter</div>
                    <p className="text-sm text-gray-400 mb-3">Get adoption stories and new listings straight to your inbox.</p>
                    <form className="flex gap-2">
                        <input type="email" placeholder="Your email" className="px-3 py-2 rounded-lg w-full text-white outline-0 border border-gray-300" />
                        <button className="bg-sky-400 text-white px-4 py-2 rounded-lg">Subscribe</button>
                    </form>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">X</a>
                        <a href="#" className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">F</a>
                        <a href="#" className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center">I</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;