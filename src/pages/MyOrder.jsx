import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import jsPDF from 'jspdf';
import autoTable from "jspdf-autotable";
import Breadcrumb from '../components/breadcrumb';

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://assignment-ten-server-blond-seven.vercel.app/my-orders?email=${user.email}`, {
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
  }, [user]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.text("My Orders Report", 14, 15);

    // Define columns & rows
    const tableColumn = [
      "Product Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone"
    ];

    const tableRows = myOrders.map(order => [
      order.productName,
      order.buyerName,
      order.price,
      order.quantity,
      order.address,
      new Date(order.date).toLocaleDateString(),
      order.phone
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
    });

    doc.save("MyOrdersReport.pdf");
  };

  return (
    <>
      <Breadcrumb title="My Orders" desc="Find your perfect companion today" />

      <div className="p-6 max-w-[1440px] mx-auto mb-16">
        <div className='flex justify-between items-center'>
          <h2 className="text-3xl font-bold mb-5">
            My Orders ({myOrders?.length})
          </h2>
          <div className="mb-5">
            <button
              onClick={handleDownloadPDF}
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md"
            >
              Download Report
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead className="bg-sky-300 text-white">
              <tr>
                <th>Product Name</th>
                <th>Buyer Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Date</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.productName}</td>
                  <td>{order.buyerName}</td>
                  <td>${order.price}</td>
                  <td>{order.quantity}</td>
                  <td>{order.address}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>{order.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrder;

