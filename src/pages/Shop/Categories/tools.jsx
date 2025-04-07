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

const toolPrices = {
  Cultivator: 220,
  dibber: 100,
  GardenFork: 300,
  GardenGloves: 100,
  GardenHose: 450,
  GardenScissors: 150,
  Gardentwine: 50,
  HandTrowel: 120,
  Hoe: 280,
  Leafblower: 2000,
  PruningShears: 250,
  Spade: 350,
  WateringCan: 200,
  Wheelbarrow: 1500,
};

const Tools = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);

  return (
    <>
      <div className="p-6 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
          Tool Shop
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {toolImages.map((image, index) => {
            const name = image.split(".")[0];
            const imagePath = `/assets/shop/categories/tools/${image}`;
            const price = toolPrices[name];

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
                  <p className="font-bold">{name}</p>
                  <p className="text-sm">₱{price?.toFixed(2) || "N/A"}</p>
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
            <div className="w-full h-full flex items-center justify-center p-4 flex-col gap-4">
              <img
                src={`/assets/shop/categories/tools/${selectedImage}`}
                alt={selectedImage}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold">
                  {selectedImage.split(".")[0]}
                </h3>
                <p className="text-lg">
                  ₱
                  {toolPrices[selectedImage.split(".")[0]]?.toFixed(2) || "N/A"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tools;
