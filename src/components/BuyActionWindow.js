// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import GeneralContext from "./GeneralContext";
// import "./BuyActionWindow.css";
// const API_BASE = process.env.REACT_APP_API_URL;
// const BuyActionWindow = ({ uid }) => {
//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   const handleBuyClick = async() => {
//     try {
//       await axios.post(`${API_BASE}/newOrder`, {
//         name: uid,
//         qty: parseInt(stockQuantity),
//         price: parseFloat(stockPrice),
//         mode: "BUY",
//       });
//       GeneralContext.closeBuyWindow();
//     } catch (error) {
//       console.error("Order failed:", error);
//     }
//   };

//   const handleSellClick = async() => {
//     try {
//       await axios.post(`${API_BASE}/newOrder`, {
//         name: uid,
//         qty: parseInt(stockQuantity),
//         price: parseFloat(stockPrice),
//         mode: "SELL",
//       });
//       GeneralContext.closeBuyWindow();
//     } catch (error) {
//       console.error("Order failed:", error);
//     }
//   };

//   const handleCancelClick = () => {
//     GeneralContext.closeBuyWindow();
//   };

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               onChange={(e) => setStockQuantity(e.target.value)}
//               value={stockQuantity}
//             />
//           </fieldset>
//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               onChange={(e) => setStockPrice(e.target.value)}
//               value={stockPrice}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>
//         <div>
//           <button className="btn btn-blue" onClick={handleBuyClick}>
//             Buy
//           </button>
//           <button className="btn btn-red" onClick={handleSellClick}>
//             Sell
//           </button>
//           <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;

// import React, { useState, useContext } from "react";
// import GeneralContext from "./GeneralContext";
// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [price, setPrice] = useState(0);
//   const generalContext = useContext(GeneralContext);

//   const handleBuyClick = () => {
//     // Add your buy logic here
//     console.log("Buying:", { uid, quantity, price });
//     generalContext.closeBuyWindow();
//   };

//   const handleSellClick = () => {
//     // Add your sell logic here
//     console.log("Selling:", { uid, quantity, price });
//     generalContext.closeBuyWindow();
//   };

//   const handleCancelClick = () => {
//     generalContext.closeBuyWindow();
//   };

//   // Close on overlay click
//   const handleOverlayClick = (e) => {
//     if (e.target.className === "buy-action-overlay") {
//       generalContext.closeBuyWindow();
//     }
//   };

//   return (
//     <div className="buy-action-overlay" onClick={handleOverlayClick}>
//       <div className="buy-action-window">
//         <div className="buy-action-header">
//           <h3>{uid}</h3>
//           <button className="close-btn" onClick={handleCancelClick}>
//             ×
//           </button>
//         </div>

//         <div className="buy-action-content">
//           <div className="input-group">
//             <label>Qty.</label>
//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//               min="1"
//             />
//           </div>

//           <div className="input-group">
//             <label>Price</label>
//             <input
//               type="number"
//               value={price}
//               onChange={(e) => setPrice(Number(e.target.value))}
//               min="0"
//               step="0.01"
//             />
//           </div>

//           <div className="margin-info">
//             Margin required ₹0.00
//           </div>
//         </div>

//         <div className="buy-action-footer">
//           <button className="btn-buy" onClick={handleBuyClick}>
//             Buy
//           </button>
//           <button className="btn-sell" onClick={handleSellClick}>
//             Sell
//           </button>
//           <button className="btn-cancel" onClick={handleCancelClick}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;
import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const API_BASE = process.env.REACT_APP_API_URL;

const BuyActionWindow = ({ uid }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      setLoading(true);
      setError("");
      
      const orderData = {
        name: uid,
        qty: quantity,
        price: price,
        mode: "BUY"
      };

      const response = await axios.post(`${API_BASE}/newOrders`, orderData);
      console.log("Order placed successfully:", response.data);
      
      // ✅ Trigger order refresh
      generalContext.refreshOrders();
      
      // Close the window after successful order
      generalContext.closeBuyWindow();
      
      // Optional: Show success message or refresh orders
      alert("Buy order placed successfully!");
    } catch (err) {
      console.error("Failed to place buy order:", err);
      setError("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSellClick = async () => {
    try {
      setLoading(true);
      setError("");
      
      const orderData = {
        name: uid,
        qty: quantity,
        price: price,
        mode: "SELL"
      };

      const response = await axios.post(`${API_BASE}/newOrders`, orderData);
      console.log("Order placed successfully:", response.data);
      
      // ✅ Trigger order refresh
      generalContext.refreshOrders();
      
      // Close the window after successful order
      generalContext.closeBuyWindow();
      
      // Optional: Show success message or refresh orders
      alert("Sell order placed successfully!");
    } catch (err) {
      console.error("Failed to place sell order:", err);
      setError("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  // Close on overlay click
  const handleOverlayClick = (e) => {
    if (e.target.className === "buy-action-overlay") {
      generalContext.closeBuyWindow();
    }
  };

  return (
    <div className="buy-action-overlay" onClick={handleOverlayClick}>
      <div className="buy-action-window">
        <div className="buy-action-header">
          <h3>{uid}</h3>
          <button className="close-btn" onClick={handleCancelClick}>
            ×
          </button>
        </div>

        <div className="buy-action-content">
          <div className="input-group">
            <label>Qty.</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="1"
              disabled={loading}
            />
          </div>

          <div className="input-group">
            <label>Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              min="0"
              step="0.01"
              disabled={loading}
            />
          </div>

          <div className="margin-info">
            Margin required ₹0.00
          </div>

          {error && <div className="error-message">{error}</div>}
        </div>

        <div className="buy-action-footer">
          <button 
            className="btn-buy" 
            onClick={handleBuyClick}
            disabled={loading || quantity < 1 || price <= 0}
          >
            {loading ? "Processing..." : "Buy"}
          </button>
          <button 
            className="btn-sell" 
            onClick={handleSellClick}
            disabled={loading || quantity < 1 || price <= 0}
          >
            {loading ? "Processing..." : "Sell"}
          </button>
          <button 
            className="btn-cancel" 
            onClick={handleCancelClick}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;