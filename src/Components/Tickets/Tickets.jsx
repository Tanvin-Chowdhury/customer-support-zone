import React, { use, useEffect, useState } from "react";
import Ticket from "../Ticket/Ticket";
import {
  addItem,
  addResolve,
  getCart,
  getResolve,
  removeItem,
} from "../../utilities/localstorage";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolveTask from "../ResolveTask/ResolveTask";
import Progress from "../Progress/Progress";
import { toast } from "react-toastify";

const Tickets = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);

  const [cart, setCart] = useState([]);

  const [resolvedTickets, setResolvedTickets] = useState([]);

  const filteredTickets = ticketData.filter(
    (ticket) => !resolvedTickets.some((resolved) => resolved.id === ticket.id),
  );

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

  useEffect(() => {
    const storedResolvedIds = getResolve();
    const resolvedData = [];

    for (const id of storedResolvedIds) {
      const ticket = ticketData.find((ticket) => ticket.id === id);
      if (ticket) {
        resolvedData.push(ticket);
      }
    }
    setResolvedTickets(resolvedData);
  }, [ticketData]);

  const handleAddToCart = (ticket) => {
    const exists = cart.find((item) => item.id === ticket.id);
    if (exists) return;

    const newCart = [...cart, ticket];
    setCart(newCart);
    addItem(ticket.id);

    toast.success("Ticket added to Task Status");
  };

  const handleResolved = (ticket) => {
    const exists = resolvedTickets.find((item) => item.id === ticket.id);
    if (exists) return;

    const updatedResolved = [...resolvedTickets, ticket];
    setResolvedTickets(updatedResolved);

    addResolve(ticket.id);

    const updatedCart = cart.filter((item) => item.id !== ticket.id);
    setCart(updatedCart);

    removeItem(ticket.id);

    toast.success("Task completed successfully");
  };

  return (
    <div>
      <Progress cart={cart} resolvedTickets={resolvedTickets}></Progress>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <h2 className="font-semibold mb-[25px] text-[#34485A] text-[24px]">
            Customer Tickets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredTickets.length === 0 ? (
              <p className="text-gray-500">All tickets completed</p>
            ) : (
              filteredTickets.map((ticket) => (
                <Ticket
                  key={ticket.id}
                  ticket={ticket}
                  handleAddToCart={handleAddToCart}
                />
              ))
            )}
          </div>
        </div>

        <div>
          <TaskStatus cart={cart} handleResolved={handleResolved} />
          <ResolveTask resolvedTickets={resolvedTickets} />
        </div>
      </div>
    </div>
  );
};

export default Tickets;
