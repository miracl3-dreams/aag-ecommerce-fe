import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const seedImages = [
  "Basilseeds.jpg",
  "Beetroot.jpg",
  "BellPepper.jpg",
  "Broccoli.jpg",
  "Carrot.jpg",
  "Chilipepperseeds.jpg",
  "Cilantro.jpg",
  "Cucumber.jpg",
  "Eggplantseeds.jpg",
  "Greenbeansseeds.jpg",
  "Kale.jpg",
  "Lavender.jpg",
  "Lettuce.jpg",
  "Marigoldseeds.jpg",
  "Mint.jpg",
  "Parsleyseeds.jpg",
  "Pumpkin.jpg",
  "Radishseeds.jpg",
  "Spinachseeds.jpg",
  "Sunflowerseeds.jpg",
  "Tomato.jpg",
  "Watermelon.jpg",
  "Zinniaseeds.jpg",
];

const seedPrices = {
  Basilseeds: 50,
  Beetroot: 40,
  BellPepper: 50,
  Broccoli: 50,
  Carrot: 35,
  Chilipepperseeds: 40,
  Cilantro: 50,
  Cucumber: 40,
  Eggplantseeds: 40,
  Greenbeansseeds: 45,
  Kale: 50,
  Lavender: 60,
  Lettuce: 35,
  Marigoldseeds: 40,
  Mint: 55,
  Parsleyseeds: 50,
  Pumpkin: 45,
  Radishseeds: 30,
  Spinachseeds: 35,
  Sunflowerseeds: 45,
  Tomato: 40,
  Watermelon: 50,
  Zinniaseeds: 40,
};

const Seeds = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (image) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);

  const filteredSeeds = seedImages.filter((image) =>
    image.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="p-6 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-4 font-playfair">
          Seed Shop
        </h2>

        {/* Search Input */}
        <div className="mb-6 max-w-md mx-auto flex items-center border-2 border-gray-300 rounded-xl relative">
          <input
            type="text"
            placeholder="Search seeds..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-black font-playfair pl-10" // added padding-left to make space for the icon
          />
          <FaSearch className="absolute left-3 text-gray-500" />{" "}
          {/* Search icon inside the input */}
        </div>

        {filteredSeeds.length === 0 ? (
          <p className="text-center text-gray-500">No seeds found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {filteredSeeds.map((image, index) => {
              const name = image.split(".")[0];
              const imagePath = `/assets/shop/categories/seeds/${image}`;
              const price = seedPrices[name];

              return (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => handleClick(image)}
                >
                  <img
                    src={imagePath}
                    alt={`Seed ${index + 1}`}
                    className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm">₱{price?.toFixed(2) || "N/A"}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
            >
              &times;
            </button>
            <div className="w-full h-full flex items-center justify-center p-4 flex-col gap-4">
              <img
                src={`/assets/shop/categories/seeds/${selectedImage}`}
                alt={selectedImage}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold">
                  {selectedImage.split(".")[0]}
                </h3>
                <p className="text-lg">
                  ₱
                  {seedPrices[selectedImage.split(".")[0]]?.toFixed(2) || "N/A"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Seeds;
