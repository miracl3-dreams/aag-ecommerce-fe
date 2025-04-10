import React, { useState } from "react";
import Logo from "../../../public/assets/logo/Logo.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode";
import { useNavigate } from "react-router-dom";

const Menu = [
  { id: 1, name: "Home", link: "/home" },
  { id: 2, name: "Shop", link: "/shop" },
  { id: 3, name: "About Us", link: "/about-us" },
  { id: 4, name: "Contacts", link: "/contacts" },
];

const Navigationbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="shadow-md bg-primary-gradient dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* Upper Navbar with integrated lower navbar */}
        <div className="bg-primary-gradient py-2 dark:bg-gray-700">
          <div className="container flex justify-between items-center px-4 sm:px-8">
            {/* Logo */}
            <a
              href="/home"
              className="flex items-center gap-2 font-bold text-2xl sm:text-3xl"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover border-2 border-black"
              />
              <span className="whitespace-nowrap text-black dark:text-white font-playfair text-2xl sm:text-3xl font-bold">
                Amara Amour Garden
              </span>
            </a>

            {/* Desktop Navigation Menu (hidden below 701px) */}
            <ul className="hidden min-[701px]:flex items-center gap-6 ml-auto font-bold">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="text-black dark:text-white font-playfair border-b-2 border-transparent hover:border-black transition-all duration-300 pb-1"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Dark Mode Toggle (hidden below 701px) */}
            <div className="hidden min-[701px]:flex items-center gap-4 ml-4">
              <DarkMode />
            </div>

            {/* Mobile Burger Menu Button (visible below 701px) */}
            <button
              className="text-xl focus:outline-none min-[701px]:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (only visible on 700px and below) */}
        <div
          className={`min-[701px]:hidden ${
            menuOpen ? "block" : "hidden"
          } bg-white dark:bg-black py-4 px-6 shadow-md`}
        >
          <div className="flex flex-col items-start gap-4">
            <ul className="flex flex-col gap-3 w-full">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="block text-black dark:text-white hover:text-primary font-playfair text-lg"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle inside flex for alignment */}
            <div className="pt-2">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
