import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/mainLayout";
import Contacts from "./pages/contacts";

const PageRouter = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
    </>
  );
};

export default PageRouter;
