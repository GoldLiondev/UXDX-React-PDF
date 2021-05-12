import React from "react";
import CustomTable from "./CustomTable";
const TableView = (props) => (
  <CustomTable
    data={props.tabledata}
    headerdata={props.hearderData}
    width={props.width}
    height={props.rowHeight}
    styletype={props.styletype}
  />
);
export default TableView;
