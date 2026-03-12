import { Calendar } from "lucide-react";
import React from "react";

const Ticket = ({ ticket, handleAddToCart }) => {
  const priorityColors = {
    "Low-priority": "text-green-600",
    "Medium-priority": "text-yellow-500",
    "High-priority": "text-red-600",
  };

  const statusStyles = {
    Open: "bg-[#B9F8CF] text-[#0B5E06]",
    "In Progress": "bg-[#F8F3B9] text-[#9C7700]",
    Resolved: "bg-red-100 text-red-600",
  };

  return (
    <div
      className="bg-white p-5 rounded-sm border border-gray-100 shadow-md hover:shadow-md transition cursor-pointer"
      onClick={() => handleAddToCart(ticket)}
    >
      <div className="flex justify-between items-start gap-3">
        <h3 className="font-semibold text-[18px] text-[#34485A] leading-snug">
          {ticket?.title}
        </h3>

        <div
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap
      ${statusStyles[ticket?.status] || "bg-gray-100 text-gray-600"}`}
        >
          <span className="w-4 h-4 rounded-full bg-current"></span>
          {ticket?.status}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-2">{ticket?.description}</p>

      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-[#627382] font-medium">{ticket?.ticketNo}</span>

          <span
            className={`text-[14px] font-medium text-[#627382]
            ${priorityColors[ticket?.priority] || "text-gray-500"}`}
          >
            {ticket?.priority?.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <span className="text-[#627382] text-[14px] font-[400]">
            {ticket?.customer}
          </span>

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
