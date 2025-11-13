import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router';

const MyListingCard = ({ myListing }) => {

    const { user } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedListing = {
            name: e.target.productName.value,
            category: e.target.category.value,
            price: e.target.price.value,
            location: e.target.location.value,
            description: e.target.description.value,
            image: e.target.photoURL.value,
            date: e.target.date.value,
            email: user?.email,
        };

        fetch(`http://localhost:3000/update-my-listing/${myListing._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedListing),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Listing updated:', data);
                toast.success('My Listing updated successfully');
                document.getElementById(`modal-${myListing._id}`).close();
                e.target.reset();
            })
            .catch((error) => {
                console.error('Error updating listing:', error);
            });
    }


    const handleDelete = (id) => {
        fetch(`http://localhost:3000/delete-my-listing/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('Listing deleted:', data);
            toast.success('My Listing deleted successfully');
            document.getElementById(`delete-modal-${myListing._id}`).close();
        })
        .catch((error) => {
            console.error('Error deleting listing:', error);
        });
    };

    return (
        <div className='p-2 border border-gray-300 rounded-md shadow-md shadow-gray-500'>
            <div className='flex gap-4 '>
                <div className='w-1/2'>
                    <img src={myListing?.image} alt={myListing?.name} className='w-full' />
                </div>
                <div className='w-1/2'>
                    <h2 className='text-2xl mb-3 font-bold'>{myListing?.name}</h2>
                    <p className='text-md mb-1 font-semibold'> Category:{myListing?.category}</p>
                    <p className='text-md mb-1 font-semibold'> Price: ${myListing?.price}</p>
                    <p className='text-md mb-1 font-semibold'> Location:{myListing?.location}</p>
                </div>
            </div>
            <div className='flex gap-2 items-center'>
                <button onClick={() => document.getElementById(`modal-${myListing._id}`).showModal()} to={myListing?._id} className='bg-sky-300 hover:bg-sky-500 text-white transition-all duration-300 px-3 py-2 rounded-md mt-4 w-full cursor-pointer'>Update</button>
                <button onClick={() => document.getElementById(`delete-modal-${myListing._id}`).showModal()} to={myListing?._id} className='bg-red-400 hover:bg-red-500 text-white transition-all duration-300 px-3 py-2 rounded-md mt-4 w-full cursor-pointer'>Delete</button>
            </div>

            <dialog id={`modal-${myListing._id}`} className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label className="label">Product Name</label>
                            <input type="text" name='productName' defaultValue={myListing?.name} className="input w-full outline-0" placeholder="Product Name" />
                        </div>
                        <div className='mb-3'>
                            <label name="category" className="label">Category</label>
                            <select name="category" className="select w-full" defaultValue={myListing?.category}>
                                <option disabled value="">Pick a category</option>
                                <option value="Pet">Pet</option>
                                <option value="Food">Food</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Care Products">Care Products</option>
                            </select>

                        </div>
                        <div className='mb-3'>
                            <label className="label">Price</label>
                            <input type="number" name='price' defaultValue={myListing?.price} className="input w-full outline-0" placeholder="price" />
                        </div>
                        <div className='mb-3'>
                            <label className="label">Location</label>
                            <input type="text" name='location' defaultValue={myListing?.location} className="input w-full outline-0" placeholder="Location" />
                        </div>
                        <div className='mb-3'>
                            <label className="label">Description</label>
                            <textarea name="description" defaultValue={myListing?.description} className="textarea w-full" placeholder="Description"></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className="label">Photo URL</label>
                            <input type="text" name="photoURL" defaultValue={myListing?.image} className="input w-full outline-0" placeholder="photoURL" />
                        </div>

                        <div className='mb-3'>
                            <label className="label">Date</label>
                            <input name="date" type="date" defaultValue={myListing?.date} className="input w-full" />
                        </div>

                        <div className='mb-3'>
                            <label className="label">Email</label>
                            <input type="email" name="email" readOnly className="input w-full outline-0" value={user?.email || ""} placeholder={user?.email} />
                        </div>


                        <button type='submit' className="btn btn-neutral mt-4 w-full">Update Listing</button>
                    </form>


                </div>
            </dialog>

            <dialog id={`delete-modal-${myListing._id}`} className="modal">
                <div className="modal-box w-1/5 max-w-3xl">
                    <h3 className="font-bold text-lg text-center">{myListing?.name}</h3>
                    <p className="py-4 text-center">Are you sure delete this product or pet</p>
                    <div className='flex justify-center items-center gap-4'>
                        <button onClick={() => handleDelete(myListing._id)} className="bg-sky-300 w-[150px] py-2 rounded-sm">Delete</button>
                        <form method="dialog">
                            <button className="bg-red-400  w-[150px] py-2 rounded-sm">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>


        </div>
    );
};

export default MyListingCard;