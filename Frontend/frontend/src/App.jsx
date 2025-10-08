import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import ServiceDetailInfo from "./pages/ServiceDetailInfo";
function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServiceDetailInfo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;
