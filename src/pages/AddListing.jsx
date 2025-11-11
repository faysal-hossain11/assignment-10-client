import React, { use, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const AddListing = () => {

    const [selectedDate, setSelectedDate] = useState("");
    const calendarRef = useRef(null);

    const {user} = use(AuthContext);


    useEffect(() => {
        const calendar = calendarRef.current;

        if (!calendar) return;

        const handleChange = (event) => {
            setSelectedDate(event.target.value);
        };

        calendar.addEventListener("change", handleChange);

        return () => {
            calendar.removeEventListener("change", handleChange);
        };
    }, []);



    const handleSubmit = (e) => {
        e.predentDefault();
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
                            <label className="label">Category</label>
                            <div className=''>
                                <select defaultValue="Pick a color" className="select w-full">
                                    <option>Crimson</option>
                                    <option>Amber</option>
                                    <option>Velvet</option>
                                </select>
                            </div>
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
                            <textarea className="textarea w-full" placeholder="Description"></textarea>
                        </div>

                        <div>
                            <button
                                popoverTarget="cally-popover1"
                                className="input input-border"
                                id="cally1"
                                style={{ anchorName: "--cally1" }}
                            >
                                {selectedDate || "Pick a date"}
                            </button>

                            <div
                                popover
                                id="cally-popover1"
                                className="dropdown bg-base-100 rounded-box shadow-lg"
                                style={{ positionAnchor: "--cally1" }}
                            >
                                <calendar-date ref={calendarRef} class="cally">
                                    <svg aria-label="Previous" className="fill-current size-4" slot="previous" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                                    </svg>
                                    <svg aria-label="Next" className="fill-current size-4" slot="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                                    </svg>
                                    <calendar-month></calendar-month>
                                </calendar-date>
                            </div>
                        </div>
                        
                         <div className='mb-3'>
                            <label className="label">Email</label>
                            <input type="email" name={user?.email} className="input w-full outline-0" value={user?.email} placeholder={user?.email} />
                        </div>


                        <button type='submit' className="btn btn-neutral mt-4 w-full">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddListing;