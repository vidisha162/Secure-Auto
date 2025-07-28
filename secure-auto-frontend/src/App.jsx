import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Secrets from "./pages/Secrets";
import AddSecret from "./components/AddSecret";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import './App.css';
import { useState } from "react";

function App() {
  const [secrets, setSecrets] = useState([]);
  const handleAddSecret = (newSecret) => {
  setSecrets([...secrets, newSecret]);
};
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 min-h-screen">
          <AddSecret onAdd={handleAddSecret} />

<div className="max-w-md mx-auto mt-6 space-y-4">
  {secrets.map((s, index) => (
    <div
      key={index}
      className="bg-gray-100 p-4 rounded-lg shadow-sm border border-gray-200"
    >
      <h3 className="font-semibold text-lg text-gray-800">{s.title}</h3>
      <p className="text-gray-600">{s.secret}</p>
    </div>
  ))}
</div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Future routes */}
            {/* <Route path="/vault" element={<Vault />} /> */}
            {/* <Route path="/settings" element={<Settings />} /> */}
            <Route path="/secrets" element={<Secrets />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
