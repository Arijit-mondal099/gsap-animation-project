import { useMediaQuery } from "react-responsive";
import { nutrientLists } from "../constants";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Nutrition = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const lists = isMobile ? nutrientLists.slice(0, 3) : nutrientLists;

  useGSAP(() => {
    const nutritionTitleSplite = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplite = SplitText.create(".nutrition-section p", {
      type: "chars, lines",
      linesClass: "paragraph-line",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });

    tl.from(nutritionTitleSplite.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
    }).from(paragraphSplite.chars, {
      yPercent: 200,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      opacity: 1,
      duration: 1,
      ease: "circ.out",
    });
  });

  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt="slider-dip"
        className="w-full object-cover"
      />

      <img
        src="/images/big-img.png"
        alt="nutrition-image"
        className="big-img"
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-10">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>

            <div
              style={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                <h2 className="text-milk-yellow">body good</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p
              id="para"
              className="text-lg md:text-right text-balance font-paragraph"
            >
              Milk contains a wide array of nutritions, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((nl, idx) => (
              <div key={nl.label} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{nl.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl font-bold tracking-tight">
                    {nl.amount}
                  </p>

                  {idx !== lists.length - 1 && (
                    <div className="spacer-border" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
