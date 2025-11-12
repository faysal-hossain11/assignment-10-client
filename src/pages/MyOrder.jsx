import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyOrder = () => {

    const [myOrders, setMyOrders] = useState([]);
    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:3000/my-orders?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("My Orders:", data);
                setMyOrders(data);
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
            });
    }, [user, setMyOrders]);
    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-6">My Orders {myOrders?.length}</h2>
        </div>
    );
};

export default MyOrder;