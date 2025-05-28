import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./Component/Navbar";
import Portfolio from "./Component/Portfolio";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/n" element={<Navbar />} />
          <Route path="/" element={<Portfolio/>} />
          

        </Routes>
      </Router>
    </>
  );
};

export default App;
