import React from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Newsletter from "./pages/NewsLetter.jsx";
import Success from "./pages/Success.jsx";

function App1() {
  return (
    <>
      <h1>Navbar</h1>
      <HashRouter basename="/frontend_mentor-newsletter">
        <Routes>
          <Route path="/" element={<Newsletter />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App1;
