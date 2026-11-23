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
import CustomerVoiceCaseStudy from "./components/sections/CustomerVoiceCaseStudy";
import EvaluationFramework from "./components/sections/EvaluationFramework";

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

        {/* Adaptive Customer Voice Interviewer Case Study */}
        <Route
          path="/case-study/customer-voice-interviewer"
          element={<CustomerVoiceCaseStudy />}
        />

        {/* The 5-D Evaluation Framework */}
        <Route path="/evaluation-framework" element={<EvaluationFramework />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;