import React, { use, useState } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (ticket) => {
    const newCart = [...cart, ticket];
    setCart(newCart);
  };

  return (
    <div>
      <h2 className="font-semibold mb-[25px] text-[#34485A] text-[24px]">
        Customer Tickets
      </h2>
      <p>Added: {cart.length}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ticketData.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
