import React, { useState } from "react";
import Logo from "../../assets/logo/Logo.jpg";
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
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* Upper Navbar with integrated lower navbar */}
        <div className="bg-primary-gradient py-2 dark:bg-gray-700">
          <div className="container flex justify-between items-center px-4 sm:px-8">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-2xl sm:text-3xl"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover"
              />
              <span className="whitespace-nowrap text-black dark:text-black font-playfair text-2xl sm:text-3xl font-bold">
                Amara Amour Garden
              </span>
            </a>

            {/* Navigation Menu pushed to far right */}
            <ul className="hidden sm:flex items-center gap-6 ml-auto font-bold">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="text-black dark:text-black hover:bg-gray-700rounded-full duration-200 font-playfair"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle */}
            <div className="hidden sm:flex items-center gap-4 ml-4">
              <DarkMode />
            </div>

            {/* Mobile Burger Menu Button */}
            <button
              className="sm:hidden text-xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden ${
            menuOpen ? "block" : "hidden"
          } bg-white dark:bg-black py-4 px-6 shadow-md`}
        >
          {/* Navigation Links */}
          <ul className="flex flex-col gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="block text-black dark:text-white hover:text-black font-playfair"
                >
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
