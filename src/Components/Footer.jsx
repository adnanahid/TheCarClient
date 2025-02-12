import React, { useContext } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const Footer = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div
      className={` ${
        theme === "dark"
          ? "bg-[#141414] text-white"
          : "bg-base-200 text-gray-800"
      } mt-36`}
    >
      <footer className="footer text-neutral-content py-10 flex justify-around items-center">
        <aside
          className={` ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          <p className="md:text-lg font-bold">
            The Cars Ltd.
            <br />
            Providing reliable cars since 1992
          </p>
        </aside>
        <nav
          className={` ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookF className="w-4 h-4 md:w-6 md:h-6"></FaFacebookF>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaLinkedinIn className="w-4 h-4 md:w-6 md:h-6"></FaLinkedinIn>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaInstagram className="w-4 h-4 md:w-6 md:h-6"></FaInstagram>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaTwitter className="w-4 h-4 md:w-6 md:h-6"></FaTwitter>
            </a>
          </div>
        </nav>
      </footer>
      <p className="text-center md:pb-3 pb-2 text-sm  ">
        Copyright © 2024 - All right reserved by The Cars Ltd
      </p>
    </div>
  );
};

export default Footer;
