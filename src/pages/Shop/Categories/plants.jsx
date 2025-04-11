import React, { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const plantImages = [
  "ALOEVERAPLANT.jpg",
  "CACTUS.jpg",
  "CHINESEEVERGREEN.jpg",
  "CREEPINGFIGPLANT.jpg",
  "DEVILSIVYPLANT.jpg",
  "FERN.jpg",
  "LUCKYBAMBOO.jpg",
  "MICROGREENSPLANT.jpg",
  "MINT.jpg",
  "MONEYTREE.jpg",
  "MONSTERA.jpg",
  "PARADISETREE.jpg",
  "PEACELILY.jpg",
  "PHILODENDRON.jpg",
  "ROSEMARY.jpg",
  "RUBBERPLANT.jpg",
  "SNAKEPLANT.jpg",
  "SPIDERPLANT.jpg",
  "SUCCULENTS.jpg",
  "ZZPLANT.jpg",
];

const plantPrices = {
  ALOEVERAPLANT: 150,
  CACTUS: 100,
  CHINESEEVERGREEN: 120,
  CREEPINGFIGPLANT: 80,
  DEVILSIVYPLANT: 90,
  FERN: 70,
  LUCKYBAMBOO: 200,
  MICROGREENSPLANT: 60,
  MINT: 50,
  MONEYTREE: 250,
  MONSTERA: 180,
  PARADISETREE: 160,
  PEACELILY: 140,
  PHILODENDRON: 130,
  ROSEMARY: 70,
  RUBBERPLANT: 160,
  SNAKEPLANT: 110,
  SPIDERPLANT: 75,
  SUCCULENTS: 90,
  ZZPLANT: 140,
};

const Plants = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useRef();

  const handleClick = (image) => setSelectedImage(image);
  const handleClose = () => setSelectedImage(null);
  const handleInquireClick = () => setIsModalOpen(true);
  const handleCloseInquire = () => setIsModalOpen(false);

  const filteredImages = plantImages.filter((image) =>
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
    <>
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

        <h2 className="text-3xl font-bold text-center mb-4 font-playfair">
          Plant Shop
        </h2>

        {/* Search Input */}
        <div className="mb-6 max-w-md mx-auto flex items-center border-2 border-gray-300 rounded-xl relative">
          <input
            type="text"
            placeholder="Search plants..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-black font-playfair pl-10" // added padding-left to make space for the icon
          />
          <FaSearch className="absolute left-3 text-gray-500" />{" "}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => {
              const name = image.split(".")[0];
              const imagePath = `/assets/shop/categories/plants/${image}`;
              const price = plantPrices[name];

              return (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  onClick={() => handleClick(image)}
                >
                  <img
                    src={imagePath}
                    alt={`Plant ${index + 1}`}
                    className="w-full h-60 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm">₱{price?.toFixed(2) || "N/A"}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No plants found.
            </p>
          )}
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
                src={`/assets/shop/categories/plants/${selectedImage}`}
                alt={selectedImage}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold">
                  {selectedImage.split(".")[0]}
                </h3>
                <p className="text-lg">
                  ₱
                  {plantPrices[selectedImage.split(".")[0]]?.toFixed(2) ||
                    "N/A"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-8">
        <button
          className="py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          onClick={handleInquireClick}
        >
          Inquire Now for Plants
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
    </>
  );
};

export default Plants;
