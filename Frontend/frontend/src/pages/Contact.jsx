import { useState } from "react";
import Footer from "../Components/Footer";

export default function Contact() {
  const [modalContent, setModalContent] = useState(""); // "privacy" or "terms" or ""

  const closeModal = () => setModalContent("");

  return (
    <>
      <section className="py-20 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl font-extrabold mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-12 text-center">
            Share your goals, and our team will reach out with tailored solutions.
          </p>

          {/* Contact Form */}
          <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
            {/* Name & Email - 2 Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block mb-2 font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              ></textarea>
            </div>

            {/* Privacy Policy Checkbox */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="privacy"
                required
                className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <label htmlFor="privacy" className="text-gray-700 text-sm">
                I have read and agree to{" "}
                <span
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() => setModalContent("privacy")}
                >
                  Five Spark's Privacy Policy
                </span>{" "}
                and{" "}
                <span
                  className="text-blue-600 underline cursor-pointer"
                  onClick={() => setModalContent("terms")}
                >
                  Terms & Conditions
                </span>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-2xl w-full mx-4 relative max-h-[80vh] overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>

            {modalContent === "privacy" && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Privacy Policy</h3>
                <p className="text-gray-700 mb-4">
                  At <strong>Five Spark</strong>, your privacy is our priority. We collect only the necessary information to provide our services and ensure your data is protected.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Information is securely stored and protected.</li>
                  <li>We do not share your data without consent.</li>
                  <li>Cookies and analytics improve your website experience.</li>
                </ul>
                <p className="text-gray-700">
                  By using our services, you agree to this policy.
                </p>
              </div>
            )}

            {modalContent === "terms" && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Terms & Conditions</h3>
                <p className="text-gray-700 mb-4">
                  By using <strong>Five Spark</strong> services, you agree to the following:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>Use our services responsibly and lawfully.</li>
                  <li>Timely payments for services are required.</li>
                  <li>Intellectual property rights remain with Five Spark unless transferred.</li>
                  <li>Terms may be updated; continued use means acceptance.</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
