import { useRef } from "react";
import { flavorlists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const isSmallDevice = useMediaQuery({ maxWidth: 1024 });

  useGSAP(() => {
    // do only on > 1024px devices
    if (!isSmallDevice) {
      const scrollAmount = sliderRef.current
        ? sliderRef.current.scrollWidth - window.innerWidth
        : 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-=${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <div className="slider-wrapper" ref={sliderRef}>
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 w-96 h-80 md:w-[90vw] md:h-[50vh] lg:w-[50vw] lg:h-[70vh] flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt={`${flavor.name} bg`}
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt={`${flavor.name} drink`}
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt={`${flavor.name} elements`}
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
