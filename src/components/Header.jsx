import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore,
  Call,
  Diamond,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";
import Logo from "/src/assets/images/logo.svg";
import MinLogo from "/src/assets/images/min-logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white w-full fixed left-0 top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Switch: Full Logo on Desktop, Min Logo on Mobile */}
        <div className="text-2xl font-bold">
          {/* Desktop Logo */}
          <img src={Logo} alt="Logo" className="h-10 hidden md:block" />
          {/* Mobile Logo */}
          <img src={MinLogo} alt="Min Logo" className="h-8 block md:hidden" />
        </div>

        {/* Menu Items - Hidden on Mobile */}
        <nav className="hidden md:flex space-x-6">
          {/* First three links with dropdown icon */}
          {["Study-abroad", "Bootcamps", "Products"].map((item, index) => (
            <motion.a
              key={index}
              href="#"
              className="flex items-center text-gray-700 hover:text-black"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              {item}{" "}
              <ExpandMore fontSize="small" className="ml-1 text-[#B1060F]" />
            </motion.a>
          ))}
          <motion.a
            href="#"
            className="flex items-center text-gray-700 hover:text-black"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Diamond fontSize="small" className="mr-1 text-[#B1060F]" /> Ambitio
            Pro
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center text-gray-700 hover:text-black"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          >
            <Icon icon="mdi:crown" className="mr-1 text-lg text-[#B1060F]" />
            Ambitio Elite
          </motion.a>
        </nav>

        <div className="flex items-center space-x-4">
          <motion.button
            className="custom hidden md:block text-[#B1060F] rounded-lg hover:bg-red-500 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            <Call fontSize="small" className="mr-1" /> Speak with our Experts
          </motion.button>

          {/* Mobile Call Us Button */}
          <motion.button
            className="custom md:hidden text-xs text-[#B1060F] px-4 py-2 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          >
            Speak with our Experts
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <Icon icon="lets-icons:close-round" fontSize="large" />
            ) : (
              <Icon icon="heroicons-outline:menu-alt-3" fontSize="large" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-md p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <nav className="flex flex-col space-y-4 text-base">
            {["Study-abroad", "Bootcamps", "Products"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="flex items-center text-gray-700 hover:text-blue-500"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              >
                {item} <ExpandMore fontSize="small" className="ml-1" />
              </motion.a>
            ))}
            <motion.a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <Icon icon="mdi:crown" className="mr-1 text-yellow-500 text-lg" />
              Ambitio Elite
            </motion.a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
