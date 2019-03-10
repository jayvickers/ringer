import React from "react";
import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import testdata from "./testdata";
//import classNames from "classnames";
import "./_result-grid.less";
const ResultGrid = props => {
  const getGrid = () => {
    return (
      <div className="">
        <div
          className="ag-theme-balham"
          style={{
            height: "auto",
            width: "auto"
          }}
        >
          <AgGridReact
            columnDefs={testdata.columnDefs}
            rowData={testdata.rowData}
          />
        </div>
      </div>
    );
  };

  return <div className="result-grid-container">{getGrid()}</div>;
};

ResultGrid.propTypes = {
  primaryRole: PropTypes.string,
  primaryWinRate: PropTypes.number,
  rank: PropTypes.string,
  secondaryRole: PropTypes.string,
  secondaryWinRate: PropTypes.number
};

export default ResultGrid;
