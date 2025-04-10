import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const form = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          toast.success("Message sent successfully!");
          form.current.reset();
          setIsModalOpen(false);
        },
        () => toast.error("Failed to send message. Please try again.")
      );
  };

  return (
    <div className="mt-16 mb-16 px-4 sm:px-8 lg:px-16">
      <ToastContainer />

      {/* Flex wrapper */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="bg-[#F8EECF] border-[#7C2A2A] border-4 dark:bg-gray-600 p-8 rounded-2xl shadow-2xl w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 font-playfair dark:text-white">
              BLOOM WITH US - OUR OPENING HOURS
            </h2>
            <div className="mb-6 text-gray-700 text-sm sm:text-base dark:text-white">
              <p className="font-semibold mb-2">Weekdays:</p>
              <ul className="mb-4 list-disc list-inside">
                <li>Tuesday - 9:00 AM to 5:00 PM</li>
                <li>Wednesday - 9:00 AM to 5:00 PM</li>
                <li>Thursday - 9:00 AM to 5:00 PM</li>
              </ul>

              <p className="font-semibold mb-2">Weekends:</p>
              <ul className="list-disc list-inside">
                <li>Friday - 9:00 AM to 5:00 PM</li>
                <li>Saturday - 9:00 AM to 5:00 PM</li>
                <li>Sunday - 9:00 AM to 8:00 PM</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-center mb-4 dark:text-white">
              Let's stay in touch!
            </h3>
            <div className="space-y-3 text-gray-700 text-sm sm:text-base dark:text-white">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <span>amaraamourgarden@gmail.com</span>
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-green-600" />
                <span>09810736741</span>
              </p>
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Brgy. San Bartolome, Novaliches, Quezon City</span>
              </p>
            </div>
          </div>

          {/* Inquire text link */}
          <div className="text-center mt-6">
            <p className="text-[#7C2A2A] font-semibold">
              WANT TO GET ORDER? INQUIRE NOW!{" "}
              <span
                onClick={() => setIsModalOpen(true)}
                className="text-[#7C2A2A] font-semibold underline hover:text-[#a03e3e] transition-all cursor-pointer"
              >
                Click here.
              </span>
            </p>
          </div>
        </div>

        {/* Right Column with Full-Screen Location Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/assets/contacts/location.png"
            alt="Shop Location"
            className="w-full max-h-[90vh] object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="relative bg-[#F8EECF] border-[#7C2A2A] border-4 dark:bg-gray-600 p-8 rounded-2xl shadow-2xl w-full max-w-2xl mx-4 sm:mx-0">
            <button
              onClick={() => setIsModalOpen(false)}
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

export default Contacts;
