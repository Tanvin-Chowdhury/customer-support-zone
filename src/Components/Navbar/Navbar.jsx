import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-[80px] py-[16px]">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-[24px] text-[#34485A]">
            CS — Ticket System
          </h1>
        </div>

        <div className="flex items-center text-[16px] gap-[32px] text-gray-600">
          <a className="hover:text-black" href="">
            Home
          </a>
          <a className="hover:text-black" href="">
            FAQ
          </a>
          <a className="hover:text-black" href="">
            Changelog
          </a>
          <a className="hover:text-black" href="">
            Blog
          </a>
          <a className="hover:text-black" href="">
            Download
          </a>
          <a className="hover:text-black" href="">
            Contact
          </a>

          <button className="bg-[linear-gradient(135deg,#632EE3_0%,#9F62F2_100%)] text-white px-4 py-2 rounded-md font-medium">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
