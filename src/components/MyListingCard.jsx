import React from 'react';
import { Link } from 'react-router';

const MyListingCard = ({ listing }) => {
    // const allListings = 
    return (
        <article className="bg-white rounded-xl shadow-card overflow-hidden flex flex-col">
            <div className="h-44 card-image">
                <img src={listing?.image} className='h-full' alt="" />
            </div>
            <div className="p-4 flex-1 flex flex-col">
                <div className="">
                    <h2 className="text-lg font-semibold">{listing?.name}</h2>
                    <p className="text-sm ">{listing?.category}</p>
                    <p className="text-xs ">$ {listing?.Price}</p>
                    <p className="text-xs ">{listing?.location}</p>
                </div>
                <div className="mt-4">
                    <Link className="text-sm bg-primary text-white px-3 py-2 rounded-lg">See Details</Link>
                </div>
            </div>
        </article>
    );
};

export default MyListingCard;