// import React, { useState } from "react";

// import { Link } from "react-router-dom";
// import "./menu.css"

// const Menu = () => {
//   const [selectedMenu, setSelectedMenu] = useState(0);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//   const handleMenuClick = (index) => {
//     setSelectedMenu(index);
//   };

//   const handleProfileClick = (index) => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   const menuClass = "menu";
//   const activeMenuClass = "menu selected";

//   return (
//     <div className="menu-container">
//       <img src="logo.png" style={{ width: "50px" }} alt="Menu icon"/>
//       <div className="menus">
//         <ul>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/"
//               onClick={() => handleMenuClick(0)}
//             >
//               <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
//                 Dashboard
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/orders"
//               onClick={() => handleMenuClick(1)}
//             >
//               <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
//                 Orders
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/holdings"
//               onClick={() => handleMenuClick(2)}
//             >
//               <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
//                 Holdings
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/positions"
//               onClick={() => handleMenuClick(3)}
//             >
//               <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
//                 Positions
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="funds"
//               onClick={() => handleMenuClick(4)}
//             >
//               <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
//                 Funds
//               </p>
//             </Link>
//           </li>
//           <li>
//             <Link
//               style={{ textDecoration: "none" }}
//               to="/apps"
//               onClick={() => handleMenuClick(6)}
//             >
//               <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
//                 Apps
//               </p>
//             </Link>
//           </li>
//         </ul>
//         <hr />
//         <div className="profile" onClick={handleProfileClick}>
//           <div className="avatar">ZU</div>
//           <p className="username">USERID</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Menu;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const location = useLocation();
  // const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  // const handleProfileClick = () => {
  //   setIsProfileDropdownOpen(!isProfileDropdownOpen);
  // };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: "/", label: "Dashboard" },
    { path: "/orders", label: "Orders" },
    { path: "/holdings", label: "Holdings" },
    { path: "/positions", label: "Positions" },
    // { path: "/funds", label: "Funds" },
    // { path: "/apps", label: "Apps" },
  ];

  return (
    <div className="menu-container">
      <img src="logo.png" className="logo" alt="Logo" />
      
      <div className={`menus ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={handleMenuClick}
                className={isActive(item.path) ? "menu selected" : "menu"}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
       
      </div>

      <button 
        className="hamburger-btn" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
};

export default Menu;