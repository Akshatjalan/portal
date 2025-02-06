import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExceptionTable.css";

const ExceptionTable = () => {
  const navigate = useNavigate();

  // Sample row data (based on your image)
  const [rowData] = useState([
    {
      facilityId: "000001110000000010000215",
      gci: "325200012",
      obligorName: "TURNER HILL PARTNERS LLC",
      sor: "LIQ",
      dot2: "JM",
      dot5: "JMEFA",
      businessDescription: "CREB EAST - SOUTHEAST",
      status: "Existing",
      openItems: 21,
      completeStatus: "NOT COMPLETE",
    },
    {
      facilityId: "00000119600000001000022",
      gci: "327207692",
      obligorName: "GRACE HOSPITALITY LLC",
      sor: "LIQ",
      dot2: "JM",
      dot5: "JMEFA",
      businessDescription: "CREB EAST - SOUTHEAST",
      status: "Existing",
      openItems: 8,
      completeStatus: "NOT COMPLETE",
    },
    {
      facilityId: "00000128000000001000056",
      gci: "327792404",
      obligorName: "VAIL MANOR DEVELOPERS L.L.C.",
      sor: "LIQ",
      dot2: "JM",
      dot5: "JMEJA",
      businessDescription: "CREB EAST - NY/NJ",
      status: "Existing",
      openItems: 6,
      completeStatus: "NOT COMPLETE",
    },
  ]);

  return (
    <div className="exception-table-container">
      <h2>Exception Search</h2>
      
      {/* Search Bar */}
      <div className="search-container">
        <select className="search-input">
          <option>Exception Queue</option>
        </select>
        <input type="text" placeholder="Facility ID" className="search-input" />
        <input type="text" placeholder="GCI" className="search-input" />
        <input type="text" placeholder="Obligor Name" className="search-input" />
        <input type="text" placeholder="Line of Business Description" className="search-input" />
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Facility ID</th>
              <th>GCI</th>
              <th>Obligor Name</th>
              <th>SOR</th>
              <th>2 Dot</th>
              <th>5 Dot</th>
              <th>Line of Business Description</th>
              <th>Status</th>
              <th>Open Items</th>
              <th>Complete Status</th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, index) => (
              <tr key={index}>
                <td>
                  <span 
                    className="clickable-link"
                    onClick={() => navigate(`/facilityDetails/${row.facilityId}`)}
                  >
                    {row.facilityId}
                  </span>
                </td>
                <td>{row.gci}</td>
                <td>{row.obligorName}</td>
                <td>{row.sor}</td>
                <td>{row.dot2}</td>
                <td>{row.dot5}</td>
                <td>{row.businessDescription}</td>
                <td>{row.status}</td>
                <td>{row.openItems}</td>
                <td>{row.completeStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExceptionTable;
