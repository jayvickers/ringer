import React from "react";
import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import testdata from "./testdata";
import NameRenderer from "./NameRenderer";
import RankRenderer from "./RankRenderer";
import RoleRenderer from "./RoleRenderer";
//import classNames from "classnames";
import "./_result-grid.less";
const ResultGrid = props => {
  const customComponents = {
    frameworkComponents: {
      nameRenderer: NameRenderer,
      rankRenderer: RankRenderer,
      roleRenderer: RoleRenderer
    }
  };

  const onFirstDataRendered = params => {
    params.api.sizeColumnsToFit();
  };

  const getGrid = () => {
    return (
      <div className="">
        <div
          className="ag-theme-material"
          style={{
            height: "100%",
            width: "100%"
          }}
        >
          <AgGridReact
            columnDefs={testdata.columnDefs}
            rowData={testdata.rowData}
            frameworkComponents={customComponents.frameworkComponents}
            rowHeight={60}
            onFirstDataRendered={onFirstDataRendered}
            pagination={true}
            paginationPageSize={10}
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
