import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import LOGO from "../assets/logo.png";

const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Services", path: "/services" },
  { id: 3, title: "About Us", path: "/about" },
  { id: 4, title: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-2" : "bg-white py-3"
      }`}
    >
      <div className="w-full container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 ">
        {/* Logo */}
        <Link to="/">
          <img
            src={LOGO}
            alt="Logo"
            className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-gray-800 p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NavbarMenu.map((menu) => (
            <a
              key={menu.id}
              href={menu.path}
              className="text-gray-700 text-base xl:text-lg font-medium hover:text-navHover transition-colors duration-300"
            >
              {menu.title}
            </a>
          ))}
        </div>
      </div>

      {/* ✅ Mobile Menu  */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4 space-y-2">
            {NavbarMenu.map((menu) => (
              <a
                key={menu.id}
                href={menu.path}
                className="block text-sm font-medium py-2"
              >
                {menu.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
