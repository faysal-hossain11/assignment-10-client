import React from 'react';
import { Link } from 'react-router';
import PetImage from '../assets/pet.jpeg';

const ListingCard = ({ listing }) => {
    // const allListings = 
    return (
        <article className="rounded-md shadow-card overflow-hidden flex flex-col shadow-md shadow-gray-400 hover:shadow-sky-100 hover:scale-105 transition-transform duration-300">
            <div className="h-[220px] card-image">
                <img src={listing?.image ? listing?.image : PetImage} className='h-full w-full object-cover' alt={listing?.name} />
            </div>
            <div className="p-4 flex-1 flex flex-col">
                <div className="">
                    <h2 className="text-2xl font-semibold mb-2">{listing?.name}</h2>
                    <p className="text-md mb-1 font-medium">Category: {listing?.category}</p>
                    <p className="text-md mb-1 font-medium">Price: ${listing?.Price}</p>
                    <p className="text-md mb-1 font-medium">Location: {listing?.location}</p>
                </div>
                <div className="mt-4 w-full">
                    <Link className="text-lg font-semibold bg-sky-300 text-white px-3 py-2 rounded-md block text-center" to={`/listing-details/${listing?._id}`}>See Details</Link>
                </div>
            </div>
        </article>
    );
};

export default ListingCard;