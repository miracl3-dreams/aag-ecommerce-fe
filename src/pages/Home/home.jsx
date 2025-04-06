import React from "react";
import Flower from "../../assets/home/Flower.jpg";
import Background from "../../assets/home/Background.png";
import "../../index.css";
import Slider from "react-slick";

// Import expert images correctly if they're in the assets folder
import Expert1 from "../../assets/experts/expert1.jpg";
import Expert2 from "../../assets/experts/expert2.jpg";
import Expert3 from "../../assets/experts/expert3.jpg";

const Home = () => {
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
            {/* Text content */}
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-6xl font-bold font-playfair">
                Rooted with Passion,
              </h1>
              <h1 className="text-4xl sm:text-6xl font-bold font-playfair pb-6">
                Growing with Love.
              </h1>
            </div>

            {/* Image */}
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

      {/* Section 2: Best Selling Products Slider */}
      <section className="py-16 bg-primary-gradient-light dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-10">
          <h2 className="text-3xl font-bold font-playfair text-center mb-10 dark:text-white">
            Best Selling Products
          </h2>

          <Slider
            dots={true}
            infinite={true}
            speed={800}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={2000}
            arrows={false}
            className="w-full max-w-4xl mx-auto"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="px-4">
                <img
                  src={Background}
                  alt={`Product ${i + 1}`}
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Section 3: Meet These Experts */}
      <section className="py-16 bg-primary-gradient dark:bg-gray-800 text-center text-white">
        <div className="container mx-auto px-4 sm:px-10">
          <h2 className="text-3xl font-bold font-playfair mb-12 text-black">
            Meet Our Experts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                name: "Amara",
                title: "Founder & Designer",
                image: Expert1,
              },
              {
                name: "Leo",
                title: "Botanist",
                image: Expert2,
              },
              {
                name: "Selena",
                title: "Marketing Lead",
                image: Expert3,
              },
            ].map((expert, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{expert.name}</h3>
                <p className="text-sm">{expert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
