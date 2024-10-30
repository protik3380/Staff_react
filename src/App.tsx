import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard"; // Assuming Dashboard is the Overview page
import Staff from "./components/Staff";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* Application Routes */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Overview */}
          <Route path="/dashboard/staff" element={<Staff />} />
          {/* Add other routes for additional pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
