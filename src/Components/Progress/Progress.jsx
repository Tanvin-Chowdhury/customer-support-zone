import React from "react";

const Progress = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-10">
      {/* In Progress */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl shadow p-10">
        <p className="text-lg opacity-90">In-Progress</p>
        <h1 className="text-5xl font-bold mt-3">0</h1>
      </div>

      {/* Resolved */}
      <div className="bg-gradient-to-r from-green-400 to-teal-600 text-white rounded-xl shadow p-10">
        <p className="text-lg opacity-90">Resolved</p>
        <h1 className="text-5xl font-bold mt-3">0</h1>
      </div>
    </div>
  );
};

export default Progress;
