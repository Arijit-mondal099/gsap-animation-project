import { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Testimonial = () => {
  const vediosRef = useRef<HTMLVideoElement[]>([]);

  const handlePlayVideo = (idx: number) => {
    vediosRef.current[idx].play();
  };

  const handlePauseVideo = (idx: number) => {
    vediosRef.current[idx].pause();
  };

  useGSAP(() => {
    gsap.set(".testimonials-section", { marginTop: "-120vh" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: 1.5,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
      ease: "power1.inOut",
    })
      .to(
        ".testimonials-section .second-title",
        {
          xPercent: 25,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
          ease: "power1.inOut",
        },
        "<",
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      opacity: 0,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, idx) => (
          <div
            key={card.name}
            className={`vd-card ${card.rotation} ${card.translation}`}
            onMouseEnter={() => handlePlayVideo(idx)}
            onMouseLeave={() => handlePauseVideo(idx)}
          >
            <video
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
              ref={(ele) => {
                if (ele) vediosRef.current.push(ele);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
