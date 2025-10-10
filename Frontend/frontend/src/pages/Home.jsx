import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import Companies from "../Components/Companies";
import WhyOurCompany from "../Components/WhyOurCompany";

function Home() {
  return (
    <div className="overflow-x-hidden bg-white text-dark">
      <Hero />
      <Companies />
      <WhyOurCompany />
      <Services />
      <Footer />
    </div>
  );
}

export default Home;
