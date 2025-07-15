import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_URL;
const Orders = () => {
  const [allOrders, setAllorders] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/allOrders`).then((res) => {
      console.log(res.data);
      setAllorders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      <div className="no-orders">
        <Link to={"/"} className="btn">
          Get started
        </Link>
    
        <div className="order-table" style={{margin:"20px"}}>
        {allOrders.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price}</td>
                  <td>{order.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
