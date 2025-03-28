import React from "react";
import { Routes, Route } from "react-router";
import Login from "../components/Login";
import Browse from "../components/Browse";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default Navigation;
