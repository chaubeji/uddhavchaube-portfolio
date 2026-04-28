import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Marquee from "./components/Marquee";
import Ventures from "./components/Ventures";
import Directorships from "./components/Directorships";
import Approach from "./components/Approach";
import VisionMission from "./components/VisionMission";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));

    // Global safety nets — swallow non-critical errors so UI doesn't break
    const onUnhandledRejection = (ev) => {
      if (typeof console !== "undefined") {
        console.warn("Unhandled promise:", ev.reason);
      }
      ev.preventDefault();
    };
    const onError = (ev) => {
      if (typeof console !== "undefined") {
        console.warn("Window error:", ev.message);
      }
    };
    window.addEventListener("unhandledrejection", onUnhandledRejection);
    window.addEventListener("error", onError);

    return () => {
      io.disconnect();
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      window.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Focus />
        <Marquee />
        <Ventures />
        <Directorships />
        <Approach />
        <VisionMission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </ErrorBoundary>
  );
}

export default App;
