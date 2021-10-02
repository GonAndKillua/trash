import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Body from "./Body";
import "./dashboard.css";
export default function Dashboard() {
  return (
    <div className="d_flex container">
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <Body />
      </div>
    </div>
  );
}
