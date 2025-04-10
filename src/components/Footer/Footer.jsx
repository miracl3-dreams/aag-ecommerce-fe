import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="relative shadow-md bg-[#F8EECF] dark:text-white duration-200 py-8 text-center w-full overflow-hidden px-4 sm:px-8">
      <div className="absolute inset-0 bg-primary-gradient opacity-40 dark:bg-gray-700"></div>

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between items-center">
        {/* Copyright Text */}
        <p className="text-lg text-black dark:text-white font-playfair">
          © 2025 Amara Amour Garden. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-4 sm:mt-0">
          {/* TikTok Link (placeholder for now) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-3xl text-black dark:text-white hover:text-[#7C2A2A] transition-all duration-300"
            />
          </a>

          {/* Facebook Link */}
          <a
            href="https://www.facebook.com/profile.php?id=61572739294910"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-3xl text-black dark:text-white hover:text-[#7C2A2A] transition-all duration-300"
            />
          </a>

          {/* Instagram Link (placeholder for now) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-3xl text-black dark:text-white hover:text-[#7C2A2A] transition-all duration-300"
            />
          </a>

          {/* Email Link */}
          {/* <a href="mailto:amaraamourgarden@gmail.com" aria-label="Email">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-3xl text-black dark:text-white hover:text-[#7C2A2A] transition-all duration-300"
            />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
