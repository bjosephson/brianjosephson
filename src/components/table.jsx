import { useCallback, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Box, Input } from "../components";

const Table = ( props ) => {
  const gridRef = useRef();
  const [ rowData, setRowData ] = useState([props.rowData]);
  const [ columdDefs, setColumnDefs ] = useState([props.columnDefs]);

  const onFilterTextBoxChanged = useCallback(() => {
    gridRef.current.api.setQuickFilter(
      document.getElementById("filter-text-box").value
    );
  }, []);

  return (
    <Box 
    className="ag-theme-alpine" 
    style={{
      height: "80%",
      width: "95"
    }}>
      <Input
        type="text"
        id="filter-text-box"
        onInput={onFilterTextBoxChanged}
        placeholder="Filter"
      />
      <AgGridReact
        ref={gridRef}
        rowData={props.rowData}
        columnDefs={props.columnDefs}
        defaultColDef={{ resizable: true, sortable: true }}
      />
    </Box>
  );
};

export default Table;
