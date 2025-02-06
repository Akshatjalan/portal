import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./ExceptionTable.css";

const ExceptionTable = () => {
  const navigate = useNavigate();

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
  ]);

  const columnDefs = [
    {
      headerName: "Facility ID",
      field: "facilityId",
      sortable: true,
      filter: true,
      cellRenderer: (params) => {
        return (
          <span
            className="clickable-link"
            onClick={() => navigate(`/facilityDetails/${params.value}`)}
          >
            {params.value}
          </span>
        );
      },
    },
    { headerName: "GCI", field: "gci", sortable: true, filter: true },
    { headerName: "Obligor Name", field: "obligorName", sortable: true, filter: true },
    { headerName: "SOR", field: "sor", sortable: true },
    { headerName: "2 Dot", field: "dot2", sortable: true },
    { headerName: "5 Dot", field: "dot5", sortable: true },
    { headerName: "Line of Business Description", field: "businessDescription", sortable: true, filter: true },
    { headerName: "Status", field: "status", sortable: true },
    { headerName: "Open Items", field: "openItems", sortable: true },
    { headerName: "Complete Status", field: "completeStatus", sortable: true },
  ];

  return (
    <div className="exception-table-container">
      <h2>Exception Search</h2>
      <div className="search-container">
        <select className="search-input">
          <option>Exception Queue</option>
        </select>
        <input type="text" placeholder="Facility ID" className="search-input" />
        <input type="text" placeholder="GCI" className="search-input" />
        <input type="text" placeholder="Obligor Name" className="search-input" />
        <input type="text" placeholder="Line of Business Description" className="search-input" />
      </div>

      <div className="ag-theme-alpine ag-grid-container">
        <AgGridReact rowData={rowData} columnDefs={columnDefs} pagination={true} paginationPageSize={10} />
      </div>
    </div>
  );
};

export default ExceptionTable;
