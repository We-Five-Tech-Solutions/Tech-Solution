import Footer from "../Components/Footer";

// src/pages/Contact.jsx
export default function Contact() {
  return (
    <>
      <section className="py-20 px-6 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h2 className="text-4xl font-extrabold mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-12 text-center">
            Have questions or want to work with us? Fill out the form below or
            reach us through any of the following methods.
          </p>

          <div className="">
            {/* Contact Form */}
            <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
              <div>
                <label className="block mb-2 font-semibold" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your message..."
                  className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
