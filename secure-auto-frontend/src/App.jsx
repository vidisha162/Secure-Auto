import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Schedular from "./pages/Schedular";
import AddEntry from "./pages/AddEntry";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import './App.css';
import { useState } from "react";

function App() {
  
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 min-h-screen">
          



          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schedular" element={<Schedular />} />
            <Route path="/add-entry" element={<AddEntry />} />
            
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
