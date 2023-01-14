import React from "react";
import Cards from "../cards/cards"
import Table from "../Table/Table";
import "./index.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;