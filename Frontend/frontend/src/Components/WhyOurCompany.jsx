import ServiceCard from "../Components/ServiceCard";

function WhyOurCompany() {
  const services = [
    {
      title: "Trailblazing Innovation",
      description:
        "We turn bold ideas into groundbreaking solutions that redefine industry standards.",
      emoji: "💡",
    },
    {
      title: "Rapid Execution",
      description:
        "Fast delivery without compromising on quality,turning concepts into reality swiftly.",
      emoji: " ⚡",
    },
    {
      title: "Reliable & Agile",
      description:
        "Flexible and precise, ensuring your projects succed on time and perfectly.",
      emoji: "⚙️",
    },
    {
      title: "Global Reach",
      description:
        "Scable solution designed to thrive across markets worldwide",
      emoji: "🌏",
    },
    {
      title: "Client-First Excellence",
      description:
        "Yours goals drive our actions. We deliver solutions that empower your growth",
      emoji: "🤝",
    },
  ];

  return (
    <section className="w-full py-20 px-6 text-center text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium text-center mb-6">
          Why Choose Five Spark ?
        </h2>
        {/* <p className="text-gray-600 text-center mb-12">
          We offer a variety of services to help your business succeed. Explore
          our offerings below.
        </p>*/}

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

export default WhyOurCompany;
