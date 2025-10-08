// src/components/Companies.jsx
import React from "react";

function Companies() {
  const clients = [
    { name: "Acme Corp", logo: "🅰️" },
    { name: "Beta LLC", logo: "🅱️" },
    { name: "Gamma Inc", logo: "🌀" },
    { name: "Delta Co", logo: "🔺" },
    { name: "Epsilon Ltd", logo: "✉️" },
    { name: "Zeta Group", logo: "⚡" },
  ];

  return (
    <section className="w-full py-20 px-6  text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-medium mb-6">Our Clients</h2>
        <p className="text-gray-600 mb-12">
          We are proud to work with these amazing companies.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
            >
              <div className="text-5xl">{client.logo}</div>
              <p className="text-gray-700 font-semibold">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
