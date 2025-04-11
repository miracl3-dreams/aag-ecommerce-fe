import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef();

  const handleClick = (image) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);
  const handleInquireClick = () => setIsModalOpen(true);
  const handleCloseInquire = () => setIsModalOpen(false);

  const filteredFlowers = flowerImages.filter((image) =>
    image.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_priw7f4",
        "template_s00oqkk",
        form.current,
        "TYwjK4dBOxwBHcdNj"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          form.current.reset();
          setIsModalOpen(false);
        },
        () => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div className="p-6 min-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        style={{ zIndex: 9999 }}
      />

      <h2 className="text-3xl font-bold text-center mb-8 font-playfair">
        Flower Shop
      </h2>

      {/* Search Input */}
      <div className="mb-6 max-w-md mx-auto flex items-center border-2 border-gray-300 rounded-xl relative">
        <input
          type="text"
          placeholder="Search flowers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-black font-playfair pl-10" // added padding-left to make space for the icon
        />
        <FaSearch className="absolute left-3 text-gray-500" />{" "}
        {/* Search icon inside the input */}
      </div>

      {/* Flower Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredFlowers.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No flowers found.
          </p>
        ) : (
          filteredFlowers.map((image, index) => {
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
          })
        )}
      </div>

      <div className="text-center mt-8">
        <button
          className="py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          onClick={handleInquireClick}
        >
          Inquire Now for Flowers
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative bg-[#F8EECF] border-[#7C2A2A] border-4 dark:bg-gray-600 p-8 rounded-2xl shadow-2xl w-full max-w-2xl mx-4 sm:mx-0">
            <button
              onClick={handleCloseInquire}
              className="absolute top-2 right-4 text-2xl font-bold text-[#7C2A2A] hover:text-[#a03e3e] transition-all"
            >
              &times;
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 font-playfair dark:text-white">
              Inquiry Form
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-xl border-2 border-black font-playfair dark:bg-white dark:text-black"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded-xl border-2 border-black font-playfair"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-xl border-2 border-black font-playfair"
              ></textarea>
              <button
                type="submit"
                className="bg-[#7C2A2A] hover:bg-[#a03e3e] text-white px-6 py-2 rounded-xl w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flowers;
