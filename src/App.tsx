import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// compoents
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="min-h-dvh"></div>
    </main>
  );
};

export default App;
