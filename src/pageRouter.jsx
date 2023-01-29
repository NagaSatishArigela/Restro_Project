import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/mainLayout";
import Contacts from "./pages/contacts";

const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default PageRouter;
