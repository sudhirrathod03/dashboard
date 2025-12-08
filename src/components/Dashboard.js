
import React, { useState,lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import "./dashboard.css";

const Summary = lazy(() => import("./Summary"));
const Orders = lazy(() => import("./Orders"));
const Holdings = lazy(() => import("./Holdings"));
const Positions = lazy(() => import("./Positions"));
const Apps = lazy(() => import("./Apps"));

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-wrapper">

      <button 
        className={`menu-toggle ${isSidebarOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      </aside>

      {isSidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}


      <main className="dashboard-main">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </Suspense>
    </main>
    </div>
  );
};

export default Dashboard;