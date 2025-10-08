// src/pages/About.jsx
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* About Content */}
      <section className="flex-1 bg-gray-100 w-full text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          We are a team of passionate professionals committed to delivering
          top-notch services. Our mission is to empower businesses through
          innovative solutions, modern design, and customer-focused strategies.
        </p>

        {/* Extra Random Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted partner in delivering impactful digital
              solutions that help businesses succeed globally.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Customer Success</li>
              <li>Excellence</li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Journey</h3>
            <p className="text-gray-600">
              Started as a small startup in 2025, we’ve grown into a global team
              serving clients across industries with passion and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
