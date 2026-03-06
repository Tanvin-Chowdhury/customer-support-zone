import React, { use, useEffect, useState } from "react";
import Ticket from "../Ticket/Ticket";
import { addItem, getCart } from "../../utilities/localstorage";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolveTask from "../ResolveTask/ResolveTask";

const Tickets = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCartIds = getCart();
    const storedCart = [];

    for (const id of storedCartIds) {
      const cartTicket = ticketData.find((ticket) => ticket.id === id);
      if (cartTicket) {
        storedCart.push(cartTicket);
      }
    }
    setCart(storedCart);
  }, [ticketData]);

  const handleAddToCart = (ticket) => {
    const newCart = [...cart, ticket];
    setCart(newCart);
    addItem(ticket.id);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
      <div className="lg:col-span-2">
        <h2 className="font-semibold mb-[25px] text-[#34485A] text-[24px]">
          Customer Tickets
        </h2>

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
      <div>
        <TaskStatus cart={cart} />
        <ResolveTask cart={cart} />
      </div>
    </div>
  );
};

export default Tickets;
