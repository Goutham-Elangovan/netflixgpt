import React from "react";
import Navigation from "../Routes/Navigation";
import { BrowserRouter, Route, Routes } from "react-router";

const Body = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
};

export default Body;
