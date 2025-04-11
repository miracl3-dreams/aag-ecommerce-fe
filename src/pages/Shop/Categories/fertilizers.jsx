import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const fertilizerImages = [
  "Alfalfameal.jpg",
  "AmmoniumSulfate.jpg",
  "BloodMeal.jpg",
  "Bonemeal.jpg",
  "Compost.jpg",
  "Cottonseedmeal.jpg",
  "CowManure.jpg",
  "FishEmulsion.jpg",
  "Mushroomcompost.jpg",
  "Organicliquidfertilizer.jpg",
  "Potash.jpg",
  "Slowreleasegranularfertilizer.jpg",
  "Superphosphate.jpg",
  "Urea.jpg",
  "Vermicompost.jpg",
];

const fertilizerPrices = {
  Alfalfameal: 150,
  AmmoniumSulfate: 180,
  BloodMeal: 200,
  Bonemeal: 160,
  Compost: 100,
  Cottonseedmeal: 130,
  CowManure: 120,
  FishEmulsion: 220,
  Mushroomcompost: 170,
  Organicliquidfertilizer: 250,
  Potash: 190,
  Slowreleasegranularfertilizer: 230,
  Superphosphate: 210,
  Urea: 180,
  Vermicompost: 140,
};

const Fertilizers = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (image) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);

  const filteredFertilizers = fertilizerImages.filter((image) =>
    image.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 font-playfair">
        Fertilizer Shop
      </h2>

      {/* Search Input */}
      <div className="mb-4 max-w-md mx-auto flex items-center border-2 border-gray-300 rounded-xl relative">
        <input
          type="text"
          placeholder="Search fertilizers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-black font-playfair pl-10" // added padding-left to make space for the icon
        />
        <FaSearch className="absolute left-3 text-gray-500" />{" "}
        {/* Search icon inside the input */}
      </div>

      {/* Fertilizer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-4">
        {" "}
        {/* Reduced mt-16 to mt-4 */}
        {filteredFertilizers.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No fertilizers found.
          </p>
        ) : (
          filteredFertilizers.map((image, index) => {
            const name = image.split(".")[0];
            const imagePath = `/assets/shop/categories/fertilizers/${image}`;
            const price = fertilizerPrices[name];

            return (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => handleClick(image)}
              >
                <img
                  src={imagePath}
                  alt={`Fertilizer ${index + 1}`}
                  className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-bold">{name}</p>
                  <p className="text-sm">₱{price?.toFixed(2) || "N/A"}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Modal */}
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
              src={`/assets/shop/categories/fertilizers/${selectedImage}`}
              alt={selectedImage}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-white text-center">
              <h3 className="text-2xl font-bold">
                {selectedImage.split(".")[0]}
              </h3>
              <p className="text-lg">
                ₱
                {fertilizerPrices[selectedImage.split(".")[0]]?.toFixed(2) ||
                  "N/A"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fertilizers;
