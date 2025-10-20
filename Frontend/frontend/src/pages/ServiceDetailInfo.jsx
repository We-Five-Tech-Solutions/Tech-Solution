import Footer from "../Components/Footer";

const detailedServices = [
  {
    title: "Web Development",
    description:
      "Our web development team creates high-performance, responsive websites tailored to your business goals. We ensure seamless user experience, fast loading times, and full mobile compatibility.",
    features: [
      "Custom front-end & back-end solutions",
      "Responsive and SEO-friendly design",
      "E-commerce & CMS integration",
    ],
    emoji: "💻",
  },
  {
    title: "Mobile App Development",
    description:
      "We design and build mobile apps that deliver smooth, intuitive experiences for iOS and Android. From concept to deployment, we ensure performance and usability.",
    features: [
      "Cross-platform (React Native, Flutter)",
      "App store optimization (ASO)",
      "Ongoing maintenance & updates",
    ],
    emoji: "📱",
  },
  {
    title: "SEO Optimization",
    description:
      "Our SEO experts help you rank higher and reach your audience faster. We use proven strategies to improve visibility, traffic, and conversions.",
    features: [
      "Keyword research & strategy",
      "On-page & technical SEO",
      "Monthly performance reporting",
    ],
    emoji: "🔍",
  },
  {
    title: "Graphic Design",
    description:
      "Our creative designers craft visuals that capture attention and tell your brand’s story. From logos to full-scale brand identity, we design with purpose.",
    features: [
      "Brand identity & logo design",
      "Social media graphics & marketing assets",
      "Print & digital materials",
    ],
    emoji: "🎨",
  },
  {
    title: "Digital Marketing",
    description:
      "Grow your brand and connect with your audience through data-driven marketing campaigns across multiple platforms.",
    features: [
      "Social media marketing (SMM)",
      "Email & content marketing",
      "Pay-per-click (PPC) advertising",
    ],
    emoji: "📈",
  },
  {
    title: "Business Consulting",
    description:
      "We provide strategic consulting services to help businesses streamline operations, boost efficiency, and grow sustainably.",
    features: [
      "Process optimization",
      "Market analysis & strategy planning",
      "Digital transformation guidance",
    ],
    emoji: "🧑‍💼",
  },
];

const ServiceDetailInfo = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section className="text-center py-35 px-6 bg-white pt-24 md:pt-28">
        <h1 className="text-4xl md:text-3xl font-semibold mb-10 text-gray-900">
          Discover Our Expertise
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
         At Five Spark Software Solutions, we deliver Smart. Secure. Scalable. digital solutions that empower businesses to grow and innovate. From software development to creative design, our expert team ensures every project aligns with your goals, drives results, and exceeds expectations.
         We combine innovation, reliability, and rapid delivery to provide services that help your business succeed in today’s digital world.
        </p>
      </section>

      {/* Services Detail Section */}
      <section className="flex-1 py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl p-8 flex flex-col text-center"
            >
              <div className="text-5xl mb-4 ">{service.emoji}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-start">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServiceDetailInfo;
