import { Calendar } from "lucide-react";
import React from "react";

const Ticket = ({ ticket }) => {
  const priorityColors = {
    "Low-priority": "text-green-600",
    "Medium-priority": "text-yellow-300",
    "High-priority": "text-red-600",
  };

  return (
    <div className="flex flex-col">
      <div className="bg-white p-4 rounded-lg shadow border">
        <div className="flex justify-between ">
          <h3 className="font-semibold text-[18px]">{ticket.title}</h3>
          <span
            className={`text-sm font-semibold px-3 py-1 rounded-full ${
              ticket.status === "Open"
                ? "bg-green-100 text-green-600"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {ticket.status}
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-2">{ticket.description}</p>

        <div className="flex justify-between mt-3">
          <div className="text-sm text-gray-400">
            <span>{ticket.ticketNo}</span>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${priorityColors[ticket.priority] || "text-gray-600"}`}
            >
              {ticket.priority}
            </span>
          </div>
          <div className="flex items-center gap-5 text-sm text-gray-600">
            <span>{ticket.customer}</span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(ticket.createdAt).toLocaleDateString()}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
