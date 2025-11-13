import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ListingCard from '../components/ListingCard';
import Breadcrumb from '../components/breadcrumb';

const PetsSupplies = () => {
    const allListings = useLoaderData();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');

    // Get unique categories from the listings
    const categories = ['All', ...new Set(allListings.map(listing => listing.category))];

    // Safe filtering
    const filteredListings = allListings.filter(listing => {
        const matchesCategory = category === 'All' || listing.category === category;
        const productName = listing.productName || '';
        const matchesSearch = productName.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <Breadcrumb title="Pets Supplies" desc="Find your perfect companion today" />
            <div className='max-w-[1440px] mx-auto py-16'>
                {/* Filters */}
                <div className='flex justify-between'>
                    <h2 className='text-2xl font-semibold '>All Listings</h2>
                    <div className='flex flex-col justify-end sm:flex-row items-start sm:items-center gap-4 mb-8'>
                        <input
                            type="text"
                            placeholder="Search by name..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="input input-bordered w-[300px] "
                        />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="select select-bordered w-[300px] "
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Listings */}
                {filteredListings.length > 0 ? (
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {filteredListings.map(listing => (
                            <ListingCard key={listing?._id} listing={listing} />
                        ))}
                    </div>
                ) : (
                    <p>No Listings Available</p>
                )}
            </div>
        </>
    );
};

export default PetsSupplies;



// import React from 'react';
// import { useLoaderData } from 'react-router';
// import ListingCard from '../components/ListingCard';
// import ListingDetails from './ListingDetails';

// const PetsSupplies = () => {
//     const allListings = useLoaderData();
//     console.log(allListings);
    
//     return (
//         <div className='max-w-[1440px] mx-auto py-16'>
//             {
//                 allListings ? (
//                     <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
//                         {
//                             allListings.map((listing) => {
//                                 return(
//                                     <ListingCard key={listing?._id} listing={listing}/>
//                                 )
//                             })
//                         }
//                     </div>
//                 ) : (
//                     <p>No Listings Available</p>
//                 )
//             }
//         </div>
//     );
// };

// export default PetsSupplies;