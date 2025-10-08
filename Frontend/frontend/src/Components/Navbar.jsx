// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import LOGO from "/favicon.png";
const NavbarMenu = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Services", path: "/services" },
  { id: 4, title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto py-3 flex justify-between items-center px-4">
        {/* Logo */}
        <Link
          to="/"
          className="font-normal text-lg tracking-tight"
          onClick={() => setOpen(false)}
        >
          <div className="flex justify-center items-center gap-2">
            <img src={LOGO} alt="logo" width={50} height={50} /> Five Spark
            Software Solutions
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6">
          {NavbarMenu.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.path}
                className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden relative z-50 text-3xl text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-white gap-8 transform transition-all duration-500 ease-in-out ${
          open
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        {NavbarMenu.map((menu) => (
          <Link
            key={menu.id}
            to={menu.path}
            className="text-2xl font-medium text-gray-800 hover:bg-blue-600 transition-colors duration-300"
            onClick={() => setOpen(false)}
          >
            {menu.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
