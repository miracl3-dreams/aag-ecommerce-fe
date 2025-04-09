import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Shop = () => {
  const navItems = [
    {
      name: "Flowers",
      path: "categories/flowers",
      logo: "/assets/logo/LogoFlower.jpg",
    },
    {
      name: "Fertilizers",
      path: "categories/fertilizers",
      logo: "/assets/logo/LogoFertilizer.jpg",
    },
    {
      name: "Plants",
      path: "categories/plants",
      logo: "/assets/logo/LogoPlant.jpg",
    },
    {
      name: "Seeds",
      path: "categories/seeds",
      logo: "/assets/logo/LogoSeeds.jpg",
    },
    {
      name: "Tools",
      path: "categories/tools",
      logo: "/assets/logo/LogoTools.jpg",
    },
  ];

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="min-h-[75vh] p-6 bg-primary-gradient-light dark:bg-gray-900 text-gray-800 dark:text-white">
        <h1 className="text-5xl font-bold mb-10 text-center font-playfair">
          Shop Now!
        </h1>

        {/* vertical on mobile, horizontal/grid on sm+ screens */}
        <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-10 sm:gap-20 mb-12 font-playfair text-xl text-center items-center">
          {navItems.map((item, index) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <li
                key={index}
                className={`flex flex-col items-center space-y-3 transition-all duration-300 ${
                  isActive ? "scale-105" : "hover:scale-105"
                }`}
              >
                <NavLink to={item.path}>
                  <div
                    className={`rounded-full p-1 transition-all duration-300 ${
                      isActive
                        ? "ring-4 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-gray-900"
                        : ""
                    }`}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      className="w-20 h-20 object-cover rounded-full shadow-md"
                    />
                  </div>
                </NavLink>

                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-2 border-black pb-1 transition-all duration-300"
                      : "hover:text-primary p-2"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <Outlet />
      </div>
    </>
  );
};

export default Shop;
