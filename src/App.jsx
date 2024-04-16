import Chip from "./components/Chip";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlight from "./components/Highlights";
import Model from "./components/Model";
import NavBar from "./components/NavBar";
import * as Sentry from "@sentry/react";

function App() {
 

  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <Chip />
      <Footer/>
    </main>
  );
}

export default Sentry.withProfiler(App);
