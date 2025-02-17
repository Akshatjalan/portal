import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./ExceptionTable.css";

const ExceptionTable = () => {
  const navigate = useNavigate();

  // Different datasets
  const dataSets = {
    set1: [
      { facilityId: "000001110000000010000215", gci: "325200012", obligorName: "TURNER HILL PARTNERS LLC", sor: "LIQ", dot2: "JM", dot5: "JMEFA", businessDescription: "CREB EAST - SOUTHEAST", status: "Existing", openItems: 21, completeStatus: "NOT COMPLETE" },
      { facilityId: "00000119600000001000022", gci: "327207692", obligorName: "GRACE HOSPITALITY LLC", sor: "LIQ", dot2: "JM", dot5: "JMEFA", businessDescription: "CREB EAST - SOUTHEAST", status: "Existing", openItems: 8, completeStatus: "NOT COMPLETE" }
    ],
    set2: [
      { facilityId: "00000128000000001000056", gci: "327792404", obligorName: "VAIL MANOR DEVELOPERS L.L.C.", sor: "LIQ", dot2: "JM", dot5: "JMEJA", businessDescription: "CREB EAST - NY/NJ", status: "Existing", openItems: 6, completeStatus: "NOT COMPLETE" },
      { facilityId: "00000132100000010099715", gci: "328314168", obligorName: "BERLEY DAVID I", sor: "LIQ", dot2: "TA", dot5: "TADGD", businessDescription: "PB-NYT-MIDTOWN EAST-NM", status: "Existing", openItems: 9, completeStatus: "NOT COMPLETE" }
    ],
    set3: [
      { facilityId: "00000154000000001000183", gci: "335530412", obligorName: "FOUNTAINS AT MILLENIA III LLLP", sor: "LIQ", dot2: "JM", dot5: "JMIAA", businessDescription: "CDB - SOUTH", status: "Existing", openItems: 6, completeStatus: "NOT COMPLETE" },
      { facilityId: "00000154000000001000184", gci: "335558282", obligorName: "FOUNTAINS AT MILLENIA IV LLLP", sor: "LIQ", dot2: "JM", dot5: "JMIAA", businessDescription: "CDB - SOUTH", status: "Existing", openItems: 6, completeStatus: "NOT COMPLETE" }
    ]
  };

  const [rowData, setRowData] = useState(dataSets.set1); // Default dataset

  // Column Definitions
  const columnDefs = useMemo(() => [
    {
      headerName: "Facility ID",
      field: "facilityId",
      sortable: true,
      filter: "agTextColumnFilter",
      cellRenderer: (params) => (
        <span
          className="clickable-link"
          onClick={() => navigate(`/facilityDetails/${params.value}`)}
        >
          {params.value}
        </span>
      ),
    },
    { headerName: "GCI", field: "gci", sortable: true, filter: "agTextColumnFilter" },
    { headerName: "Obligor Name", field: "obligorName", sortable: true, filter: "agTextColumnFilter" },
    { headerName: "SOR", field: "sor", sortable: true, filter: "agTextColumnFilter" },
    { headerName: "2 Dot", field: "dot2", sortable: true, filter: "agTextColumnFilter" },
    { headerName: "5 Dot", field: "dot5", sortable: true, filter: "agTextColumnFilter" },
    { headerName: "Line of Business Description", field: "businessDescription", sortable: true, filter: "agTextColumnFilter" },
    { headerName: "Status", field: "status", sortable: true, filter: "agTextColumnFilter" },
    { headerName: "Open Items", field: "openItems", sortable: true, filter: "agNumberColumnFilter" },
    { headerName: "Complete Status", field: "completeStatus", sortable: true, filter: "agTextColumnFilter" }
  ], [navigate]);

  return (
    <div className="exception-table-container">
      <h2>Exception Search</h2>

      {/* Buttons to switch datasets */}
      <div className="button-container">
        <button onClick={() => setRowData(dataSets.set1)}>Dataset 1</button>
        <button onClick={() => setRowData(dataSets.set2)}>Dataset 2</button>
        <button onClick={() => setRowData(dataSets.set3)}>Dataset 3</button>
      </div>

      {/* AG Grid Table */}
      <div className="ag-theme-alpine table-container">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={5}
          domLayout="autoHeight"
          defaultColDef={{ resizable: true, filter: true, sortable: true }}
        />
      </div>
    </div>
  );
};

export default ExceptionTable;
