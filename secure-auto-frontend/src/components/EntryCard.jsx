import React from 'react';

const EntryCard = ({ entry }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4 border">
      <h2 className="text-xl font-bold text-gray-800">{entry.title}</h2>
      <p className="text-gray-600 mt-2">{entry.description}</p>
      <div className="text-sm text-gray-500 mt-3">
        <span>Date: {entry.date}</span>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button className="text-blue-500 hover:underline">Edit</button>
        <button className="text-red-500 hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default EntryCard;
