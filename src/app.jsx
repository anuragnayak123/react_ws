import React from "react";
import Home from "./pages/home/home";
import { Navigate,BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    {/* <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router> */}
    <Home />
    </div>
  )
}

export default App;
