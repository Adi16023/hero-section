import React from "react";
import { motion } from "framer-motion";
import Banner from "../assets/images/banner.svg";
import BannerIcon from "../assets/images/banner-icon.svg";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 mt-25"
    >
      <div className="relative w-screen overflow-hidden">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-40 h-80 bg-[radial-gradient(ellipse_at_left,rgba(255,255,255,0.9)_30%,rgba(255,255,255,0)_100%)]"></div>
        <motion.img
          src={Banner}
          alt="Background"
          className="w-full h-[250px] md:h-auto object-cover object-center rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={BannerIcon}
          alt="Foreground"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 md:w-1/6 z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-40 h-80 bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.9)_30%,rgba(255,255,255,0)_100%)]"></div>
      </div>

      {/* Text Section */}
      <motion.div
        className="text-center mt-6 md:mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Give the best shot
          <br /> at your{" "}
          <span className="text-[#B1060F]">Dream University</span>
        </h1>
        <p className="text-gray-600 mt-4 md:text-lg max-w-2xl mx-auto">
          Get expert help, personalised guidance, and all the support you need
          <br />
          <span className="text-black">
            to increase your chances of success with Ambitio Elite.
          </span>
        </p>
        <motion.button
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          10x your chances with Ambitio
        </motion.button>
      </motion.div>

      {/* Gradient Section */}
      <motion.div
        className="w-full mt-12 bg-gradient-to-r from-[rgba(177,6,15,0.3)] to-white rounded-2xl p-6 md:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="text-center mb-6">
          <h2 className="text-black text-2xl md:text-4xl font-bold">
            We let <span className="text-[#B1060F]">our numbers</span> do the
            talking
          </h2>
          <p className="text-gray-500 text-xl md:text-2xl">
            Our users love us and we know you will too! Explore our products.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {["85%", "4.96", "5000+"].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 + index * 0.2 }}
            >
              <p className="text-[#B1060F] text-4xl md:text-6xl font-bold">
                {stat}
              </p>
              <p className="text-gray-500 text-lg md:text-2xl text-center">
                {index === 0
                  ? "Got into their Target Program"
                  : index === 1
                  ? "Google Rating"
                  : "Students Assisted"}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
