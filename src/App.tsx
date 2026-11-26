import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import RouteSeo from "./components/seo/RouteSeo";
import Container from "./components/ui/Container";

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
import ContentPage from "./pages/ContentPage";
import CollectionPage from "./pages/CollectionPage";
import TopicPage from "./pages/TopicPage";

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

function NotFound() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="py-40 text-center">
          <h1 className="font-display text-4xl text-foreground">
            Page not found
          </h1>
          <p className="mt-4 text-muted">
            The page you were looking for is not part of this portfolio.
          </p>
        </div>
      </Container>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteSeo />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/case-study/financial-analyst-agent"
          element={<CaseStudy />}
        />
        <Route
          path="/case-study/customer-voice-interviewer"
          element={<CustomerVoiceCaseStudy />}
        />
        <Route path="/evaluation-framework" element={<EvaluationFramework />} />

        <Route
          path="/writing"
          element={<CollectionPage path="/writing" kind="writing" />}
        />
        <Route
          path="/notes"
          element={<CollectionPage path="/notes" kind="notes" />}
        />
        <Route
          path="/methods"
          element={<CollectionPage path="/methods" kind="methods" />}
        />
        <Route
          path="/projects"
          element={<CollectionPage path="/projects" kind="projects" />}
        />
        <Route
          path="/artifacts"
          element={<CollectionPage path="/artifacts" kind="artifacts" />}
        />
        <Route
          path="/topics"
          element={<CollectionPage path="/topics" kind="topics" />}
        />

        <Route path="/notes/:slug" element={<ContentPage type="note" />} />
        <Route path="/methods/:slug" element={<ContentPage type="method" />} />
        <Route
          path="/projects/:slug"
          element={<ContentPage type="project" />}
        />
        <Route
          path="/artifacts/:slug"
          element={<ContentPage type="artifact" />}
        />
        <Route path="/topics/:cluster" element={<TopicPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
