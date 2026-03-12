import React from "react";

const Progress = ({ cart, resolvedTickets }) => {
  return (
    <div className=" flex flex-wrap gap-5 justify-between items-center min-h-90 py-10 px-1">
      <div className="in-progress flex-1 hero-gradient-left rounded-lg text-center text-white   min-height-220px;">
        <div className="info hero-bg-image py-10 px-20 flex flex-col justify-center items-center">
          <h2 className="text-3xl">In-Progress</h2>
          <h3 className="font-semibold text-6xl">{cart.length}</h3>
        </div>
      </div>
      <div className="resolved flex-1 hero-gradient-right rounded-lg text-center text-white   min-height-220px;">
        <div className="info hero-bg-image py-10 px-20 flex flex-col justify-center items-center">
          <h2 className="text-3xl">Resolved</h2>
          <h3 className="font-semibold text-6xl">{resolvedTickets.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default Progress;
