import React, { useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();

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
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10 mt-16 mb-16 px-4 sm:px-8 lg:px-16">
      {/* Contact Info (Left Side) */}
      <div className="bg-[#F8EECF] border-[#7C2A2A] border-4 dark:bg-white p-8 rounded-2xl shadow-2xl w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 font-playfair">
            BLOOM WITH US - OUR OPENING HOURS
          </h2>

          <div className="mb-6 text-gray-700 text-sm sm:text-base">
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
          <h3 className="text-xl font-semibold text-center mb-4">
            Let's stay in touch!
          </h3>

          <div className="space-y-3 text-gray-700 text-sm sm:text-base">
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
      </div>

      {/* EmailJS Form (Right Side) */}
      <div className="bg-[#F8EECF] border-[#7C2A2A] border-4 dark:bg-white p-8 rounded-2xl shadow-2xl w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 font-playfair">
            Inquiry Form
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 font-playfair"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 font-playfair"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded-xl border border-gray-300 font-playfair"
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
    </div>
  );
};

export default Contacts;
