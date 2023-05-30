import React from "react";
import InputForm from "./inputForm";
import DynamicTable from "./dynamicTable";

const Search = (props) => {
  return (
    <div>
      <InputForm getData={props.getData} />
      <DynamicTable tableData={props.tableData} />
    </div>
  );
};

export default Search;
