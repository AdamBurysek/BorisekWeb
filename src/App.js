import React from "react";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Search from "./components/search";
import DataService from "./services/dataService";
import Table from "./components/table";
import NotFound from "./components/notFound";

function App() {
  let [path] = useState("");
  let [tableData, setTableData] = useState([]);

  const location = useLocation();
  path = location.pathname;

  console.log(tableData);

  const getData = (filter) => {
    DataService.postData(filter)
      .then((response) => {
        setTableData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <NavBar path={path} />

      <Routes>
        <Route
          path="/"
          element={<Search getData={getData} tableData={tableData} />}
        />
        <Route path="/newtable" element={<Table />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
