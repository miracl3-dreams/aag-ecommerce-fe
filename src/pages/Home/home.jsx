import React, { useState } from "react";
import Flower from "../../../public/assets/home/Flower.jpg";
import Background from "../../../public/assets/home/backgroundImage.png";
import "../../index.css";
import Expert1 from "../../../public/assets/experts/expert1.jpg";
import Expert2 from "../../../public/assets/experts/expert2.jpg";
import Expert3 from "../../../public/assets/experts/expert3.jpg";
import { FaUserCircle } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const bestSellers = [
    {
      name: "Vermicompost",
      image: "/assets/home/bestSeller/FertilizerVermicompost.jpg",
      price: 250,
    },
    {
      name: "Carnations",
      image: "/assets/home/bestSeller/FlowersCARNATIONS.jpg",
      price: 180,
    },
    {
      name: "Succulents",
      image: "/assets/home/bestSeller/PlantsSUCCULENTS.jpg",
      price: 200,
    },
    {
      name: "Cilantro",
      image: "/assets/home/bestSeller/SeedsCilantro.jpg",
      price: 50,
    },
  ];

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_priw7f4",
        "template_3wwucgi",
        formData,
        "TYwjK4dBOxwBHcdNj"
      )
      .then(
        () => {
          toast.success("Customer Feedback sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setShowForm(false);
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Hero Section */}
      <div
        className="relative min-h-[90vh] bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${Background})`,
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="bg-white/50 dark:bg-black/50 backdrop-blur-md absolute w-full h-full z-0 top-0 left-0" />
        <div className="relative z-10 container mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center py-20">
            <div className="text-center sm:text-left sm:pl-8">
              <h1 className="text-4xl sm:text-6xl font-bold font-playfair dark:text-white">
                Rooted in Passion,
              </h1>
              <h1 className="text-4xl sm:text-6xl font-bold font-playfair pb-6 dark:text-white">
                Growing with Love.
              </h1>
            </div>
            <div className="flex justify-center">
              <img
                src={Flower}
                alt="Flower"
                className="w-[300px] h-[350px] sm:w-[450px] sm:h-[400px] object-contain rounded-3xl mt-5 image-animation"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Best Selling Products */}
      <section className="py-16 bg-primary-gradient-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-10">
          <h2 className="text-3xl font-bold font-playfair text-center mb-10 dark:text-white">
            Best Selling Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, i) => (
              <div
                key={i}
                className="bg-[#F8EECF] border-2 border-black dark:bg-gray-800 p-4 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform"
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

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative w-full h-full flex justify-center items-center">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-white text-4xl z-50"
            >
              &times;
            </button>
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

      {/* Meet Our Experts */}
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
                  className="border-2 border-black bg-[#F8EECF] dark:bg-gray-700 p-6 rounded-xl shadow-md"
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

      {/* Floating Customer Feedback Icon */}
      <button
        onClick={toggleForm}
        title="Send us your feedback"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        <FaUserCircle size={24} />
      </button>

      {/* Customer Feedback Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="border-2 border-black bg-[#F8EECF] dark:bg-gray-800 p-6 rounded-xl shadow-xl w-[90%] max-w-md animate-fadeIn transform scale-95">
            <h3 className="text-xl font-semibold mb-4 font-playfair text-black dark:text-white text-center">
              We'd Love Your Feedback 💬
            </h3>
            <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-4 font-playfair">
              Please share your thoughts with us. Your feedback helps us
              improve!
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-xl border-2 border-black dark:border-gray-600 dark:bg-gray-700 dark:text-white font-playfair"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-xl border-2 border-black dark:border-gray-600 dark:bg-gray-700 dark:text-white font-playfair"
                required
              />
              <textarea
                name="message"
                placeholder="Your feedback..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded-xl border-2 border-black dark:border-gray-600 dark:bg-gray-700 dark:text-white font-playfair"
                rows="3"
                required
              ></textarea>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="text-sm px-3 py-1 rounded-xl bg-red-500 hover:bg-red-700 text-white font-playfair"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-sm px-3 py-1 rounded-xl bg-green-600 hover:bg-green-700 text-white font-playfair"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
