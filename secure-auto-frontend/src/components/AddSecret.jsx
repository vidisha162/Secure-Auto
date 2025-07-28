import React, { useState } from "react";

const AddSecret = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [secret, setSecret] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !secret) return alert("Both fields are required!");
    
    // Call parent handler
    onAdd({ title, secret });

    // Clear form
    setTitle("");
    setSecret("");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Add a New Secret
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., ATM PIN"
          />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Secret</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="e.g., 1234"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Add Secret
        </button>
      </form>
    </div>
  );
};

export default AddSecret;
