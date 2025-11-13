import { use, useEffect, useState } from "react";
import MyListingCard from "../components/MyListingCard";
import { AuthContext } from "../context/AuthContext";
import Breadcrumb from "../components/breadcrumb";

const MyListing = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = use(AuthContext);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`http://localhost:3000/my-listings?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setListings(data);
                } else {
                    setListings([]);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching listings:", error);
                setLoading(false);
            });
    }, [user, listings, setListings]);

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <>
            <Breadcrumb title="My Listings" desc="Find your perfect companion today" />
            <div className="max-w-[1440px] mx-auto py-16">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {listings ? (
                        listings.map((myListing) => (
                            <MyListingCard key={myListing?._id} myListing={myListing} />
                        ))
                    ) : (
                        <p className="text-center col-span-3 mt-6 text-gray-500">
                            No Listings Found
                        </p>
                    )}
                </div>
            </div>
        </>

    );
};

export default MyListing;
