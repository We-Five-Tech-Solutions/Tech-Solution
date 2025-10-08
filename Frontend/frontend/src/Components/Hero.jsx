// src/components/Hero.jsx
import { Link } from "react-router-dom";
import HeroImage from "../assets/heroImage.png";
export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-16 lg:px-24 bg-gray-50"
    >
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Five Spark Software Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
          We bring sparks of creativity and technology together to transform
          your vision into impactful solutions.
        </p>
        <Link
          to="/about"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Know More
        </Link>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src={HeroImage}
          alt="Five Spark Solutions"
          className="w-full max-w-md md:max-w-lg object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
