// src/components/ServiceCard.jsx
import React from "react";

function ServiceCard({ title, description, emoji }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6 hover:shadow-lg transition-shadow">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default ServiceCard;
