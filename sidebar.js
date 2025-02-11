import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/exceptionTable">Exception Table</Link>
        </li>
        <li>
          <Link to="/facilityList">Facility List</Link>
        </li>
        <li>
          <Link to="/administration">Administration</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;





layout.js

import React from "react";
import Sidebar from "./Sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;




/* Sidebar container */
.sidebar {
  width: 250px;
  height: 100vh;
  background: #2c3e50;
  color: white;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

/* Sidebar title */
.sidebar h2 {
  text-align: center;
  margin-bottom: 20px;
}

/* Sidebar links */
.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin: 15px 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  display: block;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s;
}

.sidebar ul li a:hover {
  background: #34495e;
}
