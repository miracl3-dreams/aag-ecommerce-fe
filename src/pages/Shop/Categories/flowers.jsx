import React, { useState } from "react";

const flowerImages = [
  "BEGONIAS.jpg",
  "BOUGAINVILLEA.jpg",
  "CARNATIONS.jpg",
  "COSMOS.jpg",
  "DAISIES.jpg",
  "DAISY.jpg",
  "FREESIA.jpg",
  "GLADIOLUS.jpg",
  "GUMAMELA.jpg",
  "HYDRANGEAS.jpg",
  "IMPATIENS.jpg",
  "IRIS.jpg",
  "KALACHUCHI.jpg",
  "MARIGOLD.jpg",
  "MINIATUREROSES.jpg",
  "PATIO.jpg",
  "PETUNIA.jpg",
  "ROSAL.jpg",
  "SNAPDRAGONS.jpg",
  "SNAPYDRAGONTWINNYPEACH.jpg",
  "SUNFLOWER.jpg",
  "TERRACOTA.jpg",
  "TUBEROSE.jpg",
  "TULIPS.jpg",
  "YARROW.jpg",
  "YLANG.jpg",
  "ZINNIAS.jpg",
];

const flowerPrices = {
  BEGONIAS: 150,
  BOUGAINVILLEA: 200,
  CARNATIONS: 180,
  COSMOS: 160,
  DAISIES: 120,
  DAISY: 100,
  FREESIA: 170,
  GLADIOLUS: 180,
  GUMAMELA: 220,
  HYDRANGEAS: 250,
  IMPATIENS: 130,
  IRIS: 140,
  KALACHUCHI: 160,
  MARIGOLD: 130,
  MINIATUREROSES: 180,
  PATIO: 200,
  PETUNIA: 150,
  ROSAL: 220,
  SNAPDRAGONS: 170,
  SNAPYDRAGONTWINNYPEACH: 180,
  SUNFLOWER: 160,
  TERRACOTA: 150,
  TUBEROSE: 170,
  TULIPS: 200,
  YARROW: 180,
  YLANG: 190,
  ZINNIAS: 140,
};

const Flowers = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);

  return (
    <>
      <div className="p-6 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
          Flower Shop
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {flowerImages.map((image, index) => {
            const name = image.split(".")[0];
            const imagePath = `/assets/shop/categories/flowers/${image}`;
            const price = flowerPrices[name];

            return (
              <div
                key={index}
                className="group relative cursor-pointer"
                onClick={() => handleClick(image)}
              >
                <img
                  src={imagePath}
                  alt={`Flower ${index + 1}`}
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
                src={`/assets/shop/categories/flowers/${selectedImage}`}
                alt={selectedImage}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold">
                  {selectedImage.split(".")[0]}
                </h3>
                <p className="text-lg">
                  ₱
                  {flowerPrices[selectedImage.split(".")[0]]?.toFixed(2) ||
                    "N/A"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Flowers;
