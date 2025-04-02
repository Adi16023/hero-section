import { useState } from "react";
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
    <header className="bg-white w-full fixed left-0 top-0 z-50">
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
            <a
              key={index}
              href="#"
              className="flex items-center text-gray-700 hover:text-black"
            >
              {item}{" "}
              <ExpandMore fontSize="small" className="ml-1 text-[#B1060F]" />
            </a>
          ))}
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-black"
          >
            <Diamond fontSize="small" className="mr-1 text-[#B1060F]" /> Ambitio
            Pro
          </a>
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-black"
          >
            <Icon icon="mdi:crown" className="mr-1 text-lg text-[#B1060F]" />
            Ambitio Elite
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="custom hidden md:block text-[#B1060F] rounded-lg hover:bg-red-500 transition">
            <Call fontSize="small" className="mr-1" /> Speak with our Experts
          </button>

          {/* Mobile Call Us Button */}
          <button className="custom md:hidden text-xs text-[#B1060F] px-4 py-2 rounded-lg">
            Speak with our Experts
          </button>

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
        <div className="md:hidden bg-white shadow-md p-4">
          <nav className="flex flex-col space-y-4 text-base">
            {/* First three links with dropdown icon */}
            {["Study-abroad", "Bootcamps", "Products"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center text-gray-700 hover:text-blue-500"
              >
                {item} <ExpandMore fontSize="small" className="ml-1" />
              </a>
            ))}
            {/* Ambitio Elite with Crown Iconify */}
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <Icon icon="mdi:crown" className="mr-1 text-yellow-500 text-lg" />{" "}
              Ambitio Elite
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
