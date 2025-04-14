import React from "react";

const AboutUs = () => {
  return (
    <div className="mt-16 mb-16 px-4 sm:px-8 lg:px-16">
      {/* About Us Content */}
      <div className="bg-[#F8EECF] border-black border-2 dark:bg-gray-600 p-8 rounded-2xl shadow-2xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 font-playfair dark:text-white">
          About Us
        </h2>

        {/* Vision Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 dark:text-white text-center">Vision</h3>
          <p className="text-gray-700 text-sm sm:text-base dark:text-white text-center font-playfair">
            To be the no.1 provider of high-quality, sustainably grown flowers
            and plants that enrich the beauty of nature.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 dark:text-white text-center font-playfair">
            Mission
          </h3>
          <p className="text-gray-700 text-sm sm:text-base dark:text-white text-center font-playfair">
            To foster emotional resonance and nurture hearts through the beauty
            of exceptional flowers and plants, shared with passion and love.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 dark:text-white text-center font-playfair">
            Core Values
          </h3>
          <ul className="text-gray-700 text-sm sm:text-base dark:text-white list-disc list-inside text-center font-playfair">
            <li className="font-semibold">Shared Passion</li>
            <li className="font-semibold">Sustainable Growth</li>
            <li className="font-semibold">Emotional Resonance</li>
            <li className="font-semibold">Customer Love</li>
          </ul>
        </div>

        {/* Background about the Enterprise */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 dark:text-white text-center font-playfair">
            Background about Enterprise Name
          </h3>
          <p className="text-gray-700 text-sm sm:text-base dark:text-white text-center font-playfair">
            The name <strong>Amara Amour Garden</strong> is a blend of elegance,
            love, and nature. “Amara” is derived from various languages meaning
            “eternal” or “grace,” while “Amour” is the French word for “love.”
            Together, Amara Amour signifies everlasting love and beauty. The
            word “Garden” reflects the brand’s connection to nature, growth, and
            tranquility. This name was chosen to represent a peaceful and
            romantic environment where beauty, nature, and heartfelt emotions
            flourish—perfect for a business that values harmony, aesthetics, and
            meaningful experiences.
          </p>
        </div>
      </div>

      {/* Organizational Chart Section */}
      <div className="text-center mt-8">
        <img
          src="/assets/aboutUs/orgchart.png"
          alt="Organizational Chart"
          className="w-full h-auto max-w-4xl mx-auto rounded-xl shadow-lg border-2 border-black"
        />
      </div>
    </div>
  );
};

export default AboutUs;
