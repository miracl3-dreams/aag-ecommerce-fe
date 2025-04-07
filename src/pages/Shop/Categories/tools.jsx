import React, { useState } from "react";

const toolImages = [
  "Cultivator.jpg",
  "dibber.jpg",
  "GardenFork.jpg",
  "GardenGloves.jpg",
  "GardenHose.jpg",
  "GardenScissors.jpg",
  "Gardentwine.jpg",
  "HandTrowel.jpg",
  "Hoe.jpg",
  "Leafblower.jpg",
  "PruningShears.jpg",
  "Spade.jpg",
  "WateringCan.jpg",
  "Wheelbarrow.jpg",
];

const Tools = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 font-playfair">
        Tool Shop
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {toolImages.map((image, index) => {
          const imagePath = `/assets/shop/categories/tools/${image}`;
          return (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => handleClick(image)}
            >
              <img
                src={imagePath}
                alt={`Tool ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{image.split(".")[0]}</p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
          >
            &times;
          </button>
          <div className="w-full h-full flex items-center justify-center p-4">
            <img
              src={`/assets/shop/categories/tools/${selectedImage}`}
              alt={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tools;
