// src/components/Hero.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/heroImage.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[90vh] container mx-auto px-6 md:px-10 lg:px-16 gap-10 pt-24 md:pt-28"
    >
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center md:text-left md:w-1/2 space-y-6"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
          Transforming Ideas into{" "}
          <span className="text-glow">Powerful Digital Solutions</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
          We combine creativity and technology to transform your vision into
          impactful digital experiences — from business analysis to full-scale
          implementation.
        </p>

        <Link
          to="/about"
          className="inline-block px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow-lg hover:bg-[var(--color-dark)] hover:shadow-xl transition-all duration-300"
        >
          Know More
        </Link>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src={HeroImage}
          alt="Software Development Team"
          className="w-[80%] sm:w-[70%] md:w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
        />
      </motion.div>
    </section>
  );
}
