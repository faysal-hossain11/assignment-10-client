import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">P</div>
                        <div className="font-semibold text-lg">PawMart</div>
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
                        <input type="email" placeholder="Your email" className="px-3 py-2 rounded-lg w-full text-gray-800" />
                        <button className="bg-primary text-white px-4 py-2 rounded-lg">Subscribe</button>
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