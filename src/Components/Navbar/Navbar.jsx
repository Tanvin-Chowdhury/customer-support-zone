import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-[80px] py-[16px]">
      <div className="flex-1">
        <a className="font-bold text-[24px] text-xl">CS - Ticket System </a>
      </div>
      <div className="flex items-center gap-[32px]">
        <a href="">Home</a>
        <a href="">FAQ</a>
        <a href="">Changelog</a>
        <a href="">Blog</a>
        <a href="">Download</a>
        <a href="">Contact</a>
        <button className="bg-[linear-gradient(135deg,#632EE3_0%,#9F62F2_100%)] text-white p-2 px-3 rounded-[5px] text-center">
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
