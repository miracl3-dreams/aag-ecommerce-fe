import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contacts = () => {
  const form = useRef();

  return (
    <div className="mt-16 mb-16 px-4 sm:px-8 lg:px-16">
      <ToastContainer />

      {/* Flex wrapper */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Contact Info */}
        <div className="bg-[#F8EECF] border-black border-2 dark:bg-gray-600 p-8 rounded-2xl shadow-2xl w-full lg:w-1/2 flex flex-col justify-between">
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

          {/* Inquire text link
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
          </div> */}
        </div>

        {/* Right Column with Full-Screen Location Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <iframe
            title="Amara Amour Garden Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.512046924875!2d121.0329047!3d14.7085974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b03b76347b7d%3A0xc5e7d8f72d8cb4f9!2sBrgy.%20San%20Bartolome%2C%20Novaliches%2C%20Quezon%20City!5e0!3m2!1sen!2sph!4v1712839900000!5m2!1sen!2sph"
            className="w-full h-[500px] rounded-xl shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
