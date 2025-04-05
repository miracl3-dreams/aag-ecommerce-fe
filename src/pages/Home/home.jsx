import React from "react";
import Flower from "../../assets/home/Flower.jpg";
import "../../index.css";

const Home = () => {
  return (
    <>
      <div className="relative min-h-[80vh] sm:min-h-[90vh] lg:min-h-[100vh] bg-primary flex justify-center items-center dark:bg-gray-800 dark:text-white duration-200 flex-grow">
        {/* Abstract flower-like background on the right side */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-120px] right-[-80px] w-[350px] h-[350px] bg-rose-400 rounded-full blur-xl opacity-90 rotate-45"></div>
          <div className="absolute top-[100px] right-[60px] w-[300px] h-[300px] bg-pink-500 rounded-full blur-lg opacity-90 rotate-[20deg]"></div>
          <div className="absolute top-[300px] right-[-60px] w-[350px] h-[350px] bg-fuchsia-500 rounded-full blur-md opacity-85 rotate-[70deg]"></div>
          <div className="absolute top-[200px] right-[120px] w-[200px] h-[200px] bg-white rounded-full blur-lg opacity-50"></div>
        </div>

        {/* Home section */}
        <div className="container mx-auto px-4 sm:px-10 pb-10 sm:pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Text content */}
            <div className="overflow-visible">
              <div className="flex flex-col justify-center gap-4 pt-14 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 sm:pl-10 lg:pl-20">
                <h1 className="text-4xl sm:text-6xl lg:text-5xl font-bold font-playfair leading-tight">
                  Rooted with Passion,
                </h1>
                <h1 className="text-4xl sm:text-6xl lg:text-5xl font-bold font-playfair leading-normal pb-4 sm:pb-6">
                  Growing with Love.
                </h1>
                <p className="text-sm sm:text-base text-primary font-bold"></p>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 sm:order-2">
              <div className="relative z-10">
                <img
                  src={Flower}
                  alt="Flower"
                  className="w-[300px] h-[350px] sm:h-[400px] sm:w-[450px] sm:scale-100 lg:scale-110 object-contain mx-auto rounded-3xl mt-5 image-animation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
