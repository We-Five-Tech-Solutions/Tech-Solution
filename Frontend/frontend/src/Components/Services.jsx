// src/pages/Services.jsx
import ServiceCard from "../Components/ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "We build responsive websites that look great on all devices.",
      emoji: "💻",
    },
    {
      title: "Mobile Apps",
      description: "Developing intuitive mobile applications for Android and iOS.",
      emoji: "📱",
    },
    {
      title: "SEO Optimization",
      description: "Improve your website ranking and visibility on search engines.",
      emoji: "🔍",
    },
    {
      title: "Graphic Design",
      description: "Creative designs for branding, marketing, and social media.",
      emoji: "🎨",
    },
    {
      title: "Digital Marketing",
      description: "Promote your business online through targeted campaigns.",
      emoji: "📈",
    },
    {
      title: "Consulting",
      description: "Expert advice to optimize your business operations and strategy.",
      emoji: "🧑‍💼",
    },
  ];

  return (
    <section className="w-full py-20 px-6 text-center text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium text-center mb-6">Our Services</h2>
        <p className="text-gray-600 text-center mb-12">
          We offer a variety of services to help your business succeed. Explore our offerings below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              emoji={service.emoji}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
