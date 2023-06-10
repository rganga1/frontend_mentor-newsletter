import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newsletter from "./pages/NewsLetter.jsx"
import Success from "./pages/Success.jsx";

function App1() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Newsletter/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App1;
