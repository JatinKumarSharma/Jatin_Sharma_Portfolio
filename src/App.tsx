import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Writing from "./components/sections/Writing";
import Contact from "./components/sections/Contact";

import CaseStudy from "./components/sections/CaseStudy";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Experience />
      <Writing />
      <Contact />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* Financial Analyst Agent Case Study */}
        <Route
          path="/case-study/financial-analyst-agent"
          element={<CaseStudy />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;