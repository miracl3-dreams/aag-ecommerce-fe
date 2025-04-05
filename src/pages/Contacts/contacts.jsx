// src/pages/Contacts/contacts.jsx
import React from "react";

const Contacts = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mt-24 mb-16 gap-16 px-4 sm:px-8 lg:px-16">
      {/* Left Section - Contact Information */}
      <div className="bg-primary p-6 rounded-2xl shadow-2xl text-center w-full sm:w-1/2 h-full">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Contact Us
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Feel free to inquire, and we'll assist you
          with your order!
        </p>

        {/* Contact details */}
        <div className="mb-6">
          <p className="text-sm sm:text-base text-gray-500">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:amaraamourgarden@gmail.com"
              className="text-blue-500"
            >
              amaraamourgarden@gmail.com
            </a>
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            <strong>Phone:</strong>{" "}
            <a href="" className="text-blue-500">
              09810736741
            </a>
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            <strong>Address:</strong> San Bartolome, Novaliches, Quezon City
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            <strong>Facebook:</strong>{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Amara Amour Garden
            </a>
          </p>
        </div>

        {/* Inquire Now button */}
        <a
          href="https://www.facebook.com/profile.php?id=61573162643583"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 duration-300 mb-6 inline-block"
        >
          Inquire Now
        </a>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          {/* Example social media icon, replace with your actual icons */}
          <a
            href="https://facebook.com/AmaraAmourGarden"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500"
          >
            <i className="fab fa-facebook-f"></i> {/* Example icon */}
          </a>
          {/* Add other social media icons as needed */}
        </div>
      </div>

      {/* Right Section - Google Map Location */}
      <div className="w-full sm:w-1/2 rounded-2xl">
        <div className="mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12159.158941073696!2d121.04850129999999!3d14.7488203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5fd5f0e8c7f01%3A0xb46614e0d5973a0!2sSan%20Bartolome%2C%20Novaliches%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1678298232201!5m2!1sen!2sph"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
