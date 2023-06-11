import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Newsletter from "./pages/NewsLetter.jsx";
import Success from "./pages/Success.jsx";

function App1() {
  return (
    <>
      <h1>Navbar</h1>
      <BrowserRouter basename="/frontend_mentor-newsletter">
        <Routes>
          <Route path="/" element={<Newsletter />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App1;
