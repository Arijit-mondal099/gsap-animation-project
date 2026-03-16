import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

// compoents
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Message from "./sections/Message";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Message />
      <div className="min-h-dvh"></div>
    </main>
  );
};

export default App;
