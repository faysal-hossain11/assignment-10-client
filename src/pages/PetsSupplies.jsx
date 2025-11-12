import React from 'react';
import { useLoaderData } from 'react-router';
import MyListingCard from '../components/MyListingCard';
import ListingDetails from './ListingDetails';

const PetsSupplies = () => {
    const allListings = useLoaderData();
    console.log(allListings);
    
    return (
        <div className='max-w-[1440px] mx-auto py-16'>
            {
                allListings ? (
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            allListings.map((listing) => {
                                return(
                                    <MyListingCard key={listing?._id} listing={listing}/>
                                )
                            })
                        }
                    </div>
                ) : (
                    <p>No Listings Available</p>
                )
            }
        </div>
    );
};

export default PetsSupplies;