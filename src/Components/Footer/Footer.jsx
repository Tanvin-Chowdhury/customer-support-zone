import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-10 py-10 mt-10">
      <div className="grid grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-3">CS – Ticket System</h3>
          <p className="text-sm ul">
            A powerful ticket management platform to support businesses with
            customer support requests.
          </p>
        </div>

        <div>
          <h4 className="text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm ul">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Sales</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3">Services</h4>
          <ul className="space-y-2 text-sm ul">
            <li>Products & Services</li>
            <li>Customer Service</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3">Information</h4>
          <ul className="space-y-2 text-sm ul">
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3">Social Links</h4>
          <ul className="space-y-2 text-sm ul">
            <li>
              <i class="fa-brands fa-x-twitter"></i> @CS — Ticket System
            </li>
            <li>
              <i class="fa-brands fa-instagram"></i>@CS — Ticket System
            </li>
            <li>
              <i class="fa-brands fa-facebook"></i>@CS — Ticket System
            </li>
            <li>
              <i class="fa-regular fa-envelope"></i>support@cst.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="mt-10 text-[#3A3A3D]" />

      <p className="text-center text-sm mt-8 ul">
        © 2025 CS – Ticket System. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
