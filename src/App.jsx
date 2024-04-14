import Hero from "./components/Hero";
import Highlight from "./components/Highlights";
import Model from "./components/Model";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlight />
      <Model/>
    </main>
  );
}
