// src/components/Hero.jsx
import { Link } from "react-router-dom";
// import HeroImage from "../assets/heroImage.png";
import HeroImage2 from "../assets/global.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen bg-white container gap-10"
    >
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-home-heading-large text-[var(--color-dark)] font-semibold">
          Transforming Ideas into{" "}
          <span className="text-glow">Powerful Digital Solutions</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--color-dark2)] max-w-xl mx-auto md:mx-0 leading-relaxed">
          We combine creativity and technology to transform your vision into
          impactful digital solutions — from business analysis to full-scale
          implementation.
        </p>

        <Link to="/about" className="inline-block px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium shadow-lg hover:bg-[var(--color-dark)] hover:shadow-xl transition-all duration-300" > Know More </Link>

      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImage2}
          alt="Software Development Team"
          className="w-full max-w-md md:max-w-lg object-cover rounded-3xl shadow-lg"
        />
      </div>
    </section>
  );
}
