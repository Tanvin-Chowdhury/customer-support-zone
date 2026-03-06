import React, { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise) || [];

  return (
    <div>
      <h2 className="font-semibold mb-[25px] text-[#34485A] text-[24px]">
        Customer Tickets
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ticketData.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
