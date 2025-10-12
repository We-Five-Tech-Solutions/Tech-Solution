import { Link } from "react-router-dom";
import HeroImage from "../assets/heroImage.png"; // adjust path as needed
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-16 lg:px-24 py-10 bg-white">
      {/* LEFT TEXT SECTION */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-1 text-center md:text-left space-y-6 md:space-y-8 mt-10 md:mt-0"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-snug sm:leading-tight">
          Transforming Ideas into{" "}
          <span className="text-glow text-[var(--color-primary)]">
            Powerful Digital Solutions
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-md sm:max-w-lg md:max-w-xl mx-auto md:mx-0 leading-relaxed">
          We combine creativity and technology to transform your vision into
          impactful digital experiences — from business analysis to full-scale
          implementation.
        </p>

        <Link
          to="/about"
          className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold shadow-md hover:bg-[var(--color-dark)] hover:shadow-lg transition-all duration-300"
        >
          Know More
        </Link>
      </motion.div>

      {/* RIGHT IMAGE SECTION */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      >
        <img
          src={HeroImage}
          alt="Software Development Team"
          className="w-[80%] sm:w-[70%] md:w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl object-contain"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
