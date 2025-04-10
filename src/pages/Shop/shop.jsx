import React, { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Shop = () => {
  const navItems = [
    {
      name: "Flowers",
      path: "categories/flowers",
      logo: "/assets/logo/LogoFlower.jpg",
      description: "Check our flowers here",
    },
    {
      name: "Fertilizers",
      path: "categories/fertilizers",
      logo: "/assets/logo/LogoFertilizer.jpg",
      description: "Check our fertilizers here",
    },
    {
      name: "Plants",
      path: "categories/plants",
      logo: "/assets/logo/LogoPlant.jpg",
      description: "Check our plants here",
    },
    {
      name: "Seeds",
      path: "categories/seeds",
      logo: "/assets/logo/LogoSeeds.jpg",
      description: "Check our seeds here",
    },
    {
      name: "Tools",
      path: "categories/tools",
      logo: "/assets/logo/LogoTools.jpg",
      description: "Check our tools here",
    },
  ];

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="mt-16 mb-16 px-4 sm:px-8 lg:px-16">
      {/* Shop Section */}
      <div className="bg-[#F8EECF] border-black border-2 dark:bg-gray-600 p-8 rounded-2xl shadow-2xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 font-playfair dark:text-white">
          Shop Now!
        </h2>

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
                    title={`Shop for ${item.name}`}
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} Logo`}
                      title={item.description}
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
    </div>
  );
};

export default Shop;
