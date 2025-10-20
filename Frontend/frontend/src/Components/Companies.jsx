const clients = [
  { name: "Acme Corp", logo: "🅰️" },
  { name: "Beta LLC", logo: "🅱️" },
  { name: "Gamma Inc", logo: "🌀" },
  { name: "Delta Co", logo: "🔺" },
  { name: "Epsilon Ltd", logo: "✉️" },
  { name: "Zeta Group", logo: "⚡" },
];

export default function Companies() {
  return (
    <section className="w-screen py-20 bg-white overflow-hidden">
      {/* Section Header */}
      <div className="text-center px-6 mb-12">
        <h2 className="text-3xl font-medium mb-4">Our Clients</h2>
        <p className="text-gray-600">
          We are proud to work with these amazing companies.
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="relative w-screen overflow-hidden">
        <div
         className="flex animate-marquee whitespace-nowrap" 
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[180px] sm:min-w-[200px]"
            >
              <div className="text-6xl">{client.logo}</div>
              <p className="text-gray-700 font-semibold mt-3 text-sm sm:text-base">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
