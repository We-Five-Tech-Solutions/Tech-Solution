import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const clients = [
  { name: "Acme Corp", logo: "🅰️" },
  { name: "Beta LLC", logo: "🅱️" },
  { name: "Gamma Inc", logo: "🌀" },
  { name: "Delta Co", logo: "🔺" },
  { name: "Epsilon Ltd", logo: "✉️" },
  { name: "Zeta Group", logo: "⚡" },
];

export default function Companies() {
  const [duration, setDuration] = useState(20); // default speed

  // Dynamically adjust scroll speed based on screen size
  useEffect(() => {
    const updateSpeed = () => {
      if (window.innerWidth < 640) setDuration(30); // slower scroll for mobile
      else if (window.innerWidth < 1024) setDuration(25); // medium
      else setDuration(20); // desktop
    };
    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <section className="w-screen py-20 bg-white overflow-hidden">
      <div className="text-center px-6 mb-12">
        <h2 className="text-3xl font-medium mb-4">Our Clients</h2>
        <p className="text-gray-600">
          We are proud to work with these amazing companies.
        </p>
      </div>

      <div className="relative w-screen overflow-hidden">
        <motion.div
          className="flex items-center gap-8 pt-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration, // responsive duration
          }}
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[180px] sm:min-w-[200px] bg-white"
            >
              <div className="text-6xl">{client.logo}</div>
              <p className="text-gray-700 font-semibold mt-3">{client.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
