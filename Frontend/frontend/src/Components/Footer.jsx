import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Top Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Five Sparks Software Solutions
          </h2>
          <p className="text-gray-400">
            Building solutions that empower businesses worldwide. Delivering
            quality and innovation since 2025.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-400"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-400"
            >
              <FaFacebook />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-sky-400">
              <FaTwitter />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-300"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>

        {/* Map Embed */}
        <div>
          <h2 className="text-xl font-bold mb-4">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019999999!2d-122.41941508468176!3d37.77492927975968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjgiTiAxMjLCsDI1JzA2LjAiVw!5e0!3m2!1sen!2sus!4v1633028472719!5m2!1sen!2sus"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-40"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Five Spark Software Solutions. All rights reserved.
      </div>
    </footer>
  );
}
