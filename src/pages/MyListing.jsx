import { useEffect, useState } from "react";
import MyListingCard from "../components/MyListingCard";

const MyListing = () => {
    // const listingsPromise = fetch('http://localhost:3000/latest-listings').then(res => res.json());


    // const allListings = use(listingsPromise);
    // console.log("all listing", allListings);

    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:3000/latest-listings`)
        .then((res) => res.json())
        .then((data) => {
            setListings(data)
            console.log("listing ", listings);
            
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [listings])


    if(loading) return <p className="text-center">loading...</p>

    return (
        <div>
            {
                listings ? (
                    listings.map((listing) => {
                        return (
                            <MyListingCard key={listing?._id} listing={listing} />
                        )
                    })
                ) : (
                    <p>No Listings</p>
                )
            }
        </div>
    );
};

export default MyListing;