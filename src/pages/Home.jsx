import React, { useState } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';
import MyListing from './MyListing';
import ListingCard from '../components/ListingCard';
import Avatar from '../assets/download.jpeg';

const Home = () => {

    const [latestListings, setLatestListings] = useState([]);
    const [petHeroes, setPetHeroes] = useState([]);

    fetch('http://localhost:3000/latest-listings')
        .then(res => res.json())
        .then(data => {
            console.log('latest Listings:', data);
            setLatestListings(data);
        })
        .catch(error => {
            console.error('Error fetching listings:', error);
        });

    fetch('http://localhost:3000/pet-heroes')
        .then(res => res.json())
        .then(data => {
            console.log('Pet Heroes:', data);
            setPetHeroes(data);
        })
        .catch(error => {
            console.error('Error fetching pet heroes:', error);
        });



    return (
        <>
            <section id="home" className="hero-bg ">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <motion-placeholder className="space-y-3">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow">Find Your Next Best Friend At PawMart</h1>
                                <p className="max-w-xl ">Browse pets for adoption, shop for trusted pet supplies, and connect with local caregivers and shelters. Adopt a friend — give a home today.</p>
                                <div className="flex flex-wrap gap-3">
                                    <a href="#listings" className="inline-flex items-center gap-2 bg-secondary hover:opacity-95 px-5 py-3 rounded-full font-medium text-white">Explore Listings</a>
                                    <a href="#categories" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 rounded-full font-medium">Shop Supplies</a>
                                </div>
                            </motion-placeholder>
                            <div className="flex gap-4 mt-4">
                                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm">Free adoption guidance</div>
                                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm">Verified sellers & caregivers</div>
                                <div className="bg-white/10 px-4 py-2 rounded-lg text-sm">Safe local pickup</div>
                            </div>
                        </div>

                        {/* <!-- hero image block (right) --> */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
                                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=60" alt="Happy dog and cat" className="w-full h-80 md:h-96 object-cover" />
                            </div>
                            <div className="absolute -bottom-6 left-16 bg-white rounded-xl p-4 shadow-card w-11/12 md:w-3/4">
                                <div className="flex items-center gap-3">
                                    <img src={Avatar} alt="small dog" className="w-12 h-12 rounded-full object-cover border" />
                                    <div>
                                        <div className="text-md font-semibold text-gray-600">15+ Trusted Shelters</div>
                                        <div className="text-xs text-gray-500">Helping pets find loving homes</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* <!-- CATEGORIES --> */}
            <section id="categories" className="py-16 bg-soft ">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold">Browse by Category</h2>
                        <p className="text-gray-600 mt-2">Find pets and products quickly — choose a category to filter listings.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <a href="#listings" className="group rounded-xl p-6 shadow-card shadow-lg transform hover:-translate-y-1 transition">
                            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9 2 8 4 8 6s1 4 4 4 4-2 4-4-1-4-4-4zm4 14c-1-1-3-2-4-2s-3 1-4 2C6 18 5 20 5 21h14c0-1-1-3-3-5z" /></svg>
                            </div>
                            <div className="text-lg font-semibold">Pets (Adoption)</div>
                            <p className="text-sm text-gray-500 mt-2">Puppies, kittens, adult dogs & cats ready for loving homes.</p>
                        </a>

                        <a href="#listings" className="group rounded-xl p-6 shadow-card shadow-lg transform hover:-translate-y-1 transition">
                            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 text-accent mb-4">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 4.9L19 8.1l-3.8 3.5L16 16l-4-2-4 2 .8-4.4L4 8.1l4.8-1.2L12 2z" /></svg>
                            </div>
                            <div className="text-lg font-semibold">Pet Food</div>
                            <p className="text-sm text-gray-500 mt-2">Kibble, wet food, supplements and treat boxes for pets.</p>
                        </a>

                        <a href="#listings" className="group rounded-xl p-6 shadow-card shadow-lg transform hover:-translate-y-1 transition">
                            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-4">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm7 8a8 8 0 10-14 0h14z" /></svg>
                            </div>
                            <div className="text-lg font-semibold">Accessories</div>
                            <p className="text-sm text-gray-500 mt-2">Collars, toys, leashes, beds and travel supplies.</p>
                        </a>

                        <a href="#listings" className="group rounded-xl p-6 shadow-card shadow-lg transform hover:-translate-y-1 transition">
                            <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-secondary/10 text-secondary mb-4">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v2H3V3zm2 7h14v11H5V10z" /></svg>
                            </div>
                            <div className="text-lg font-semibold">Pet Care Products</div>
                            <p className="text-sm text-gray-500 mt-2">Shampoos, grooming kits, and health essentials.</p>
                        </a>
                    </div>
                </div>
            </section>

            {/* <!-- RECENT LISTINGS --> */}

            <section id="listings" className="py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

                    <div className=" mb-6">
                        <h3 className="text-2xl font-bold">Recent Listings</h3>
                        <p className="">Latest additions from our local shelters and shops.</p>
                    </div>

                    {/* this is the my listing card */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {latestListings && latestListings.length > 0 ? (
                                latestListings.map((listing) => {
                                    return (
                                        <ListingCard key={listing?._id} listing={listing} />
                                    )
                                })
                            ) : (
                                <p className="text-center col-span-4 mt-6 text-gray-500">
                                    No Listings Found
                                </p>
                            )
                            }
                        </div>
                        {/* this is the my listing card */}
                    </div>

                </div>
            </section>

            {/* <!-- WHY ADOPT SECTION --> */}
            <section className="py-16 bg-gradient-to-r from-sky-900/20 via-black/10 to-sky-900/20">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                        <img src="https://images.unsplash.com/photo-1507149833265-60c372daea22?auto=format&fit=crop&w=1400&q=60" alt="Adopt" className="rounded-2xl shadow-lg w-full object-cover h-80" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">Why Adopt from PawMart?</h3>
                        <p className="mt-3 text-gray-600">Adopting saves lives and builds a compassionate community. When you adopt, you also get professional support from shelters and a history of care for your pet.</p>

                        <ul className="mt-6 space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center">✓</div>
                                <div>
                                    <div className="font-semibold">Medical Checked</div>
                                    <div className="text-sm text-gray-500">Most pets have basic health checks and vaccinations recorded.</div>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">✓</div>
                                <div>
                                    <div className="font-semibold">Saving More Pets</div>
                                    <div className="text-sm text-gray-500">Adoption opens spots in shelters for other animals in need.</div>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-accent/10 text-accent flex items-center justify-center">✓</div>
                                <div>
                                    <div className="font-semibold">Lower Cost</div>
                                    <div className="text-sm text-gray-500">Adoption fees are often lower than buying and include initial care.</div>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-6">
                            <a href="#listings" className="inline-block bg-sky-400 text-white px-5 py-3 rounded-lg">View Adoptable Pets</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold">Meet Our Pet Heroes</h3>
                        <p className="text-gray-500 mt-2">Stories from local adopters and caregivers who made a difference.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                        {
                            petHeroes && petHeroes.length > 0 ? (
                                petHeroes.map((hero) => {
                                    return (
                                        <div className=" rounded-xl p-6 shadow-card text-center shadow-md shadow-gray-300">
                                            <img src={hero?.image} alt={hero?.name} className="w-24 h-24 rounded-full mx-auto object-cover border mb-4 animate-floaty" />
                                            <div className="font-semibold">{hero?.name}</div>
                                            <p className="text-sm text-gray-500 mt-1">{hero?.description}</p>
                                        </div>
                                    )
                                })
                            ) : (
                                <p className="text-center col-span-4 mt-6 text-gray-500">
                                    No Pet Heroes Found
                                </p>
                            )
                        }
                        
                    </div>
                </div>
            </section>

            {/* <!-- CTA / DONATION BAND --> */}
            <section className="py-12 bg-gradient-to-r from-primary to-accent text-white">
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h4 className="text-xl font-semibold">Give Pets Their Second Chance</h4>
                        <p className="text-sm opacity-90 mt-1">Support shelters, foster families, and free adoption clinics with donations or supplies.</p>
                    </div>
                    <div className="flex gap-3">
                        <a href="#donate" className="text-primary px-4 bg-white py-2 rounded-lg font-medium">Donate Now</a>
                        <a href="#volunteer" className="border border-white/60 px-4 py-2 rounded-lg">Become a Volunteer</a>
                    </div>
                </div>
            </section>

            {/* <!-- FOOTER --> */}

        </>
    );
};

export default Home;