import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navbar/Navigationbar";
import Contacts from "./pages/Contacts/contacts";
import Home from "./pages/Home/home";
import Shop from "./pages/Shop/shop";
import AboutUs from "./pages/AboutUs/aboutUs";
import Footer from "./components/Footer/Footer";
import Flowers from "./pages/Shop/Categories/flowers";
import Plants from "./pages/Shop/Categories/plants";
import Seeds from "./pages/Shop/Categories/seeds";
import Tools from "./pages/Shop/Categories/tools";
import Fertilizers from "./pages/Shop/Categories/fertilizers";
import DarkMode from "./components/DarkMode/DarkMode";

import "aos/dist/aos.css";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 1000,
    });
    AOS.refresh();
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Navigationbar />
        <main className="flex-grow bg-primary-gradient dark:bg-gray-750">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contacts" element={<Contacts />} />

            {/* SHOP ROUTES */}
            <Route path="/shop" element={<Shop />}>
              <Route path="categories/flowers" element={<Flowers />} />
              <Route path="categories/fertilizers" element={<Fertilizers />} />
              <Route path="categories/plants" element={<Plants />} />
              <Route path="categories/seeds" element={<Seeds />} />
              <Route path="categories/tools" element={<Tools />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
