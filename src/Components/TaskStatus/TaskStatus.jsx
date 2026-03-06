import React from "react";

const TaskStatus = ({ cart }) => {
  return (
    <div className="mb-10">
      <h2 className="text-color-h font-semibold text-[24px] mb-[16px]">
        Task Status
      </h2>
      {cart.length === 0 ? (
        <p className="text-color-p text-[16px]">
          Select a ticket to add to Task Status
        </p>
      ) : (
        cart.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white border border-gray-100 p-4 rounded-md mb-3"
          >
            <p className="mb-3">{ticket.title}</p>
            <button
              className="bg-[#02A53B] text-white w-full py-[6px] rounded-sm"
              onClick={() => handleResolved(cart)}
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
