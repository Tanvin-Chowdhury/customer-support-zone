import React from "react";

const ResolveTask = ({ resolvedTickets }) => {
  return (
    <div>
      <h2 className="text-color-h font-semibold text-[24px] mb-[16px]">
        Resolved Task
      </h2>
      {resolvedTickets.length === 0 ? (
        <p className="text-color-p text-[16px]">No resolved tasks yet.</p>
      ) : (
        resolvedTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-[#E0E7FF] border border-gray-100 rounded-md mb-3"
          >
            <p className="p-2">{ticket.title}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ResolveTask;
