import React, { useState } from "react";
import Flower from "../../../public/assets/home/Flower.jpg";
import Background from "../../../public/assets/home/backgroundImage.png";
import "../../index.css";
import Expert1 from "../../../public/assets/experts/expert1.jpg";
import Expert2 from "../../../public/assets/experts/expert2.jpg";
import Expert3 from "../../../public/assets/experts/expert3.jpg";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const bestSellers = [
    {
      name: "Vermicompost",
      image: "/assets/home/bestSeller/FertilizerVermicompost.jpg",
      price: 250, // Price for Vermicompost
    },
    {
      name: "Carnations",
      image: "/assets/home/bestSeller/FlowersCARNATIONS.jpg",
      price: 180, // Price for Carnations
    },
    {
      name: "Succulents",
      image: "/assets/home/bestSeller/PlantsSUCCULENTS.jpg",
      price: 200, // Price for Succulents
    },
    {
      name: "Cilantro",
      image: "/assets/home/bestSeller/SeedsCilantro.jpg",
      price: 50, // Price for Cilantro
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat flex justify-center items-center dark:bg-gray-800 dark:text-white"
        style={{
          backgroundImage: `url(${Background})`,
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="bg-white/50 dark:bg-black/50 backdrop-blur-md w-full h-full absolute top-0 left-0 z-0" />
        <div className="container mx-auto px-4 sm:px-10 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center py-20">
            <div className="text-center sm:text-left sm:pl-8">
              <h1 className="text-4xl sm:text-6xl font-bold font-playfair">
                Rooted with Passion,
              </h1>
              <h1 className="text-4xl sm:text-6xl font-bold font-playfair pb-6">
                Growing with Love.
              </h1>
            </div>

            <div className="flex justify-center">
              <img
                src={Flower}
                alt="Flower"
                className="w-[300px] h-[350px] sm:h-[400px] sm:w-[450px] object-contain rounded-3xl mt-5 image-animation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Best Selling Products - Grid of 4 Images */}
      <section className="py-16 bg-primary-gradient-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-10">
          <h2 className="text-3xl font-bold font-playfair text-center mb-10 dark:text-white">
            Best Selling Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg cursor-pointer transition transform hover:scale-105"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-center text-gray-800 dark:text-white font-playfair">
                  {product.name}
                </h3>
                <p className="text-center text-gray-700 dark:text-white">
                  ₱{product.price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-white text-4xl z-50"
            >
              &times;
            </button>

            {/* Image and Name */}
            <div className="flex flex-col items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-auto max-w-[90%] max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />
              <h2 className="mt-4 text-3xl font-bold text-white font-playfair text-center">
                {selectedProduct.name}
              </h2>
              <p className="text-xl text-white text-center">
                ₱{selectedProduct.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section 3: Meet These Experts */}
      <section className="py-16 bg-primary-gradient dark:bg-gray-800 text-center text-white">
        <div className="container mx-auto px-4 sm:px-10">
          <h2 className="text-3xl font-bold font-playfair mb-12 text-black">
            Meet Our Experts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[Expert1, Expert2, Expert3].map((img, idx) => {
              const expert = [
                { name: "Amara", title: "Founder & Designer" },
                { name: "Leo", title: "Botanist" },
                { name: "Selena", title: "Marketing Lead" },
              ][idx];

              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
                >
                  <img
                    src={img}
                    alt={expert.name}
                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-black dark:text-white font-playfair">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-black dark:text-white font-playfair">
                    {expert.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
