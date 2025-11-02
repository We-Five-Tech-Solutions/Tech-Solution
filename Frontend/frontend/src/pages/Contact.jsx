import { useState } from "react";
import emailjs from '@emailjs/browser';
import Footer from "../Components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_zd57y0a", 
        "template_cbq57io",
        form,
        "GGGlgWsh1z6oNMACF" 
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully! We'll get back to you soon.");
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="py-20 px-6 bg-white text-gray-900 pt-24 md:pt-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-12 text-center">
            Share your goals, and our team will reach out with tailored solutions.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center mt-4 text-gray-700">{status}</p>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
