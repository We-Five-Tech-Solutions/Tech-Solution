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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md py-2" : "bg-white py-3"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src={LOGO}
            alt="Logo"
            className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.path}
                className="text-gray-700 text-base xl:text-lg font-medium hover:text-navHover transition-colors duration-300"
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl text-gray-800 z-[60] focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* ✅ Mobile Menu  */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md cursor-pointer gap-8 transition-all duration-500 ease-in-out ${
          open
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        {NavbarMenu.map((menu) => (
          <Link
            key={menu.id}
            to={menu.path}
            className="text-2xl sm:text-3xl font-semibold text-gray-800 hover:text-navHover transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            {menu.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
