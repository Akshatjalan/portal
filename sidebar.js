import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { FaBars, FaTable, FaList, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`sidebar ${expanded ? "expanded" : ""}`}>
      {/* Sidebar Toggle Button */}
      <div className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        <FaBars />
      </div>

      {/* Navigation Links */}
      <ul>
        <li>
          <Tooltip title={!expanded ? "Exception Table" : ""} placement="right">
            <Link to="/exceptionTable">
              <FaTable />
              {expanded && <span>Exception Table</span>}
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title={!expanded ? "Facility List" : ""} placement="right">
            <Link to="/facilityList">
              <FaList />
              {expanded && <span>Facility List</span>}
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip title={!expanded ? "Administration" : ""} placement="right">
            <Link to="/administration">
              <FaCog />
              {expanded && <span>Administration</span>}
            </Link>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;



/* Sidebar */
.sidebar {
  width: 60px; /* Collapsed width */
  height: calc(100vh - 60px); /* Full height minus header */
  background: #2c3e50;
  color: white;
  padding-top: 10px;
  position: fixed;
  top: 60px; /* Stick below header */
  left: 0;
  overflow-y: auto;
  transition: width 0.3s ease-in-out;
}

/* Expanded Sidebar */
.sidebar.expanded {
  width: 200px;
}

/* Sidebar Toggle Button */
.toggle-btn {
  text-align: center;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  color: white;
}

/* Navigation List */
.sidebar ul {
  list-style: none;
  padding: 0;
}

/* Navigation Links */
.sidebar ul li {
  margin: 15px 0;
}

.sidebar ul li a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s;
  font-size: 18px;
}

/* Icon Size */
.sidebar ul li a svg {
  font-size: 22px;
}

/* Expanded Mode Styling */
.sidebar.expanded ul li a span {
  display: inline;
  font-size: 16px;
}

/* Collapsed Mode: Hide Text */
.sidebar:not(.expanded) ul li a span {
  display: none;
}

/* Hover Effect */
.sidebar ul li a:hover {
  background: #34495e;
}



import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header"; // Create a header component
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header /> {/* Sticky Header */}
      <div className="main-content">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;



/* Layout */
.layout {
  display: flex;
  flex-direction: column;
}

/* Main Content */
.main-content {
  display: flex;
  margin-top: 60px; /* Offset for sticky header */
}

/* Content Area */
.content {
  margin-left: 60px;
  padding: 20px;
  width: 100%;
  background: #f4f4f4;
  overflow-y: auto;
  transition: margin-left 0.3s;
}

/* Adjust content width when sidebar expands */
.sidebar.expanded ~ .content {
  margin-left: 200px;
}






import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Admin Dashboard</h1>
    </div>
  );
};

export default Header;



/* Header */
.header {
  width: 100%;
  height: 60px;
  background: #34495e;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

