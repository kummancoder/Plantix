import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Services from "../components/Services";
import Library from "../components/Library";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/header/Navbar";

const AppRoutes = () => {
  return (
    <>
        <nav className="w-full shadow-md">
        <Navbar></Navbar>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/library" element={<Library />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
