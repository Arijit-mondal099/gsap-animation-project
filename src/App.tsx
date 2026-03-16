import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

// compoents
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Message from "./sections/Message";
import Flavor from "./sections/Flavor";
import Nutrition from "./sections/Nutrition";

// gsap plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavor />
          <Nutrition />
          <div className="min-h-dvh"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
