import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Shop = () => {
  const navItems = [
    { name: "Flowers", path: "categories/flowers" },
    { name: "Plants", path: "categories/plants" },
    { name: "Seeds", path: "categories/seeds" },
    { name: "Tools", path: "categories/tools" },
  ];

  return (
    <div className="min-h-screen p-6 bg-primary-gradient-light dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-6 text-center font-playfair">
        Shop Categories
      </h1>

      {/* Navigation Bar */}
      <ul className="flex justify-center gap-6 mb-10 font-playfair">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "hover:text-primary"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Render the selected category */}
      <Outlet />
    </div>
  );
};

export default Shop;
