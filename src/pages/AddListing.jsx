import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const AddListing = () => {

    const { user } = use(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const listing = {
            name: e.target.productName.value,
            category: e.target.category.value,
            price: e.target.price.value,
            location: e.target.location.value,
            description: e.target.description.value,
            image: e.target.photoURL.value,
            date: e.target.date.value,
            email: e.target.email.value
        }

        fetch('http://localhost:3000/add-listing', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(listing)
        })
            .then(res => res.json())
            .then(data => {
                console.log("listing saved:", data);
                toast.success("Listing added successfully");
                e.target.reset();
                navigate('/');
            })
        

    }



    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl ">
                <h1 className="text-4xl font-bold text-center">Add Listing</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label className="label">Product Name</label>
                            <input type="text" name='productName' className="input w-full outline-0" placeholder="Product Name" />
                        </div>
                        <div className='mb-3'>
                            <label name="category" className="label">Category</label>
                            <select name="category" className="select w-full" defaultValue="">
                                <option disabled value="">Pick a category</option>
                                <option value="Pet">Pet</option>
                                <option value="Food">Food</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Care Products">Care Products</option>
                            </select>

                        </div>
                        <div className='mb-3'>
                            <label className="label">Price</label>
                            <input type="number" name='price' className="input w-full outline-0" placeholder="price" />
                        </div>
                        <div className='mb-3'>
                            <label className="label">Location</label>
                            <input type="text" name='location' className="input w-full outline-0" placeholder="Location" />
                        </div>
                        <div className='mb-3'>
                            <label className="label">Description</label>
                            <textarea name="description" className="textarea w-full" placeholder="Description"></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className="label">Photo URL</label>
                            <input type="text" name="photoURL" className="input w-full outline-0" placeholder="photoURL" />
                        </div>

                        <div className='mb-3'>
                            <label className="label">Date</label>
                            <input name="date" type="date" className="input w-full" />
                        </div>

                        <div className='mb-3'>
                            <label className="label">Email</label>
                            <input type="email" name="email" readOnly className="input w-full outline-0" value={user?.email || ""} placeholder={user?.email} />
                        </div>


                        <button type='submit' className="btn btn-neutral mt-4 w-full">Add Listing</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddListing;