import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import Breadcrumb from '../components/breadcrumb';

const ListingDetails = () => {

    const [listing, setListing] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const { user } = use(AuthContext);
    console.log("details page", user);



    useEffect(() => {
        fetch(`http://localhost:3000/listing/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setListing(data?.result);
                console.log(data?.result);
                setLoading(false);
            });
    }, [user, id])


    const handleOrderSubmit = (e) => {
        e.preventDefault();

        const order = {
            buyerName: e.target.buyerName.value,
            email: user?.email,
            productId: e.target.productId.value,
            productName: e.target.productName.value,
            quantity: e.target.quantity.value,
            price: e.target.price.value,
            address: e.target.address.value,
            date: e.target.date.value,
            phone: e.target.phone.value,
            additionalNote: e.target.additionalNote.value,
        }

        console.log(order);

        fetch('http://localhost:3000/order', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Save order", data);
                toast.success("Order placed successfully");
                e.target.reset();

                // close the modal 
                document.getElementById('my_modal_5').close();


            })
            .catch((error) => {
                console.error("Error placing order:", error);
                toast.error("Failed to place order");
            })


    }

    if (loading) return <p>loading....</p>


    return (
        <>
            <Breadcrumb title="Listing Details" desc="Find your perfect companion today" />
            <div className='max-w-[1440px] mx-auto py-16'>
                <div className='flex gap-6'>
                    <div>
                        <div className='h-[500px] mb-6'>
                            <img src={listing?.image} className='h-full rounded-md' alt={listing?.name} />
                        </div>
                        <h2 className='text-3xl font-semibold mb-6'>{listing?.name}</h2>
                        <p className=''>{listing?.description}</p>
                    </div>
                    <div>
                        <p className='mb-4'>Category: {listing?.category}</p>
                        <p className='mb-4'>Email: {listing?.email}</p>
                        <p className='mb-4'>Price: {listing?.Price}</p>
                        <p className='mb-4'>Location: {listing?.location}</p>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <div>
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className='w-[300px] bg-sky-400 py-3 rounded-md hover:bg-sky-600 transition-all duration-300 font-semibold '>Order Now</button>
                        </div>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">

                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>

                                <h3 className="font-bold text-2xl text-center mb-6">Order</h3>
                                <div>
                                    <form onSubmit={handleOrderSubmit}>
                                        <div className='mb-3'>
                                            <label className="label">Buyer Name</label>
                                            <input type="text" name='buyerName' className="input w-full outline-0" value={user?.displayName} placeholder='' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className="label">Email</label>
                                            <input type="email" name='email' className="input w-full outline-0" value={user?.email} placeholder='' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className="label">Product ID</label>
                                            <input type="text" name='productId' className="input w-full outline-0" value={id} placeholder='' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className="label">Product Name</label>
                                            <input type="text" name='productName' className="input w-full outline-0" value={listing?.name} placeholder='' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className="label">Quantity</label>
                                            <input type="number" name="quantity" className="input w-full outline-0" defaultValue={1} min="1" />
                                        </div>

                                        <div className='mb-3'>
                                            <label className="label">Price</label>
                                            <input type="number" name='price' className="input w-full outline-0" value={listing?.Price} placeholder='' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className="label">Address</label>
                                            <input type="text" name='address' className="input w-full outline-0" placeholder='Address' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className="label">Date</label>
                                            <input name="date" type="date" className="input w-full outline-0" />
                                        </div>
                                        <div className='mb-3'>
                                            <label className="label">Phone</label>
                                            <input type="text" name="phone" className="input w-full outline-0" placeholder='Phone' />
                                        </div>
                                        <div className='mb-4'>
                                            <label className="label">Additional Notes</label>
                                            <textarea name="additionalNote" className="textarea w-full outline-0" placeholder="Additional Notes"></textarea>
                                        </div>
                                        <div>
                                            <button type='submit' className='w-full py-2 bg-sky-300 hover:bg-sky-500 tranistion-all duration-300 rounded-sm cursor-pointer ' >Order Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListingDetails;