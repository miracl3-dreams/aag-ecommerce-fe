import React, { useState } from "react";

// Array of flower image names
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

const Flowers = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen p-6 bg-primary-gradient-light dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Flower Shop</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {flowerImages.map((image, index) => {
          const imagePath = `/src/assets/shop/categories/flowers/${image}`;
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
                <p>{image.split(".")[0]}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full text-center relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">
              {selectedImage.split(".")[0]}
            </h3>
            <img
              src={`/src/assets/shop/categories/flowers/${selectedImage}`}
              alt={selectedImage}
              className="w-full h-72 object-contain rounded mb-4"
            />
            <p>
              {/* Placeholder definition */}
              This is a beautiful flower known for its vibrant colors and
              symbolic meaning. 🌸
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flowers;
