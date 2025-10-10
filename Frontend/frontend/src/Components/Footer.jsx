import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20 py-12 max-w-7xl mx-auto">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Five Spark Software Solutions
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Building solutions that empower businesses worldwide. Delivering
            quality and innovation since 2025.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://wa.me/"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089917116!2d77.46612635126417!3d12.953945614274408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1760079638833!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              className="border-0 w-full h-40"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()},{" "}
          <span className="text-white font-semibold">
            Five Spark Software Solutions
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
