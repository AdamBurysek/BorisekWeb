import React from "react";

function DynamicTable(props) {
  if (props.tableData && props.tableData.length > 0) {
    let column = Object.keys(props.tableData[0]);

    const ThData = () => {
      return column.map((data) => {
        return <th key={data}>{data}</th>;
      });
    };

    const tdData = () => {
      return props.tableData.map((data, id) => {
        return (
          <tr key={id}>
            {column.map((v) => {
              return <td key={data[v] + id}>{data[v]}</td>;
            })}
          </tr>
        );
      });
    };

    return (
      <table className="table container-lg">
        <thead>{<tr>{ThData()}</tr>}</thead>
        <tbody>{tdData()}</tbody>
      </table>
    );
  } else {
    return (
      <div className="alert alert-info container-sm text-center" role="alert">
        No Data
      </div>
    );
  }
}
export default DynamicTable;
