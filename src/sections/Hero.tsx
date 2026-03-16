import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", { type: "chars" });

    // A GSAP timeline is a container for animations that lets you sequence, overlap,
    // and control multiple tweens as one unit.
    const tl = gsap.timeline({ delay: 1 });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
          ease: "circ.out",
        },
        "-=0.5",
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          opacity: 0,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5",
      );

    const heroScrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        scrub: true,
        /**
         * start/end: "triggerPosition  viewportPosition"
         * triggerPosition - a point on the element
         * viewportPosition - a line on the screen
         * animation starts/end - when they touch
         */
        start: "1% top",
        end: "bottom top",
        // markers: true,
      },
    });

    heroScrollTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="hero" className="bg-main-bg">
      <div className="hero-container">
        <img
          src="/images/static-img.png"
          alt="hero-image"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto md:scale-150 scale-100"
        />

        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>

          <div
            style={{
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffeine</h1>
            </div>
          </div>

          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <div className="hero-button">
            <p>Chug a Spylt</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
