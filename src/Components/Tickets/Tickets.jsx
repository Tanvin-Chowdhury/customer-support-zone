import React, { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);

  console.log(ticketData);
  return (
    <div className="mx-auto w-[1440px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <h2 className="font-semibold text-[#34485A] text-[24px]">
        Customer Tickets
      </h2>
      {ticketData.map((ticket) => (
        <Ticket ticket={ticket} key={ticket.id}></Ticket>
      ))}
    </div>
  );
};

export default Tickets;
