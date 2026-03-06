import { Calendar } from "lucide-react";
import React from "react";

const Ticket = ({ ticket, handleAddToCart }) => {
  const priorityColors = {
    "Low-priority": "text-green-600",
    "Medium-priority": "text-yellow-500",
    "High-priority": "text-red-600",
  };

  const statusStyles = {
    Open: "bg-green-100 text-green-600",
    "In Progress": "bg-yellow-100 text-yellow-700",
    Resolved: "bg-red-100 text-red-600",
  };

  return (
    <div
      className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={() => handleAddToCart(ticket)}
    >
      <div className="flex justify-between items-start gap-3">
        <h3 className="font-semibold text-[18px] text-[#34485A] leading-snug">
          {ticket?.title}
        </h3>

        <div
          className={`flex items-center gap-2 px-3 py-[4px] rounded-full text-xs font-semibold
          ${statusStyles[ticket?.status] || "bg-gray-100 text-gray-600"}`}
        >
          <span className="w-2 h-2 rounded-full bg-current"></span>
          {ticket?.status}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
        {ticket?.description}
      </p>

      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <span>#{ticket?.ticketNo}</span>

          <span
            className={`text-xs font-semibold 
            ${priorityColors[ticket?.priority] || "text-gray-500"}`}
          >
            {ticket?.priority?.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <span>{ticket?.customer}</span>

          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(ticket?.createdAt).toLocaleDateString("en-US")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
