import { useGSAP } from "@gsap/react";
import ClipPatchTitle from "../components/ClipPatchTitle";
import gsap from "gsap";
import VideoPin from "../components/VideoPin";

const Benefit = () => {
  useGSAP(() => {
    const titleTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: true,
      },
    });

    titleTl
      .to(".benefit-section .first-title", {
        opacity: 1,
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.inOut",
      })
      .to(".benefit-section .second-title", {
        opacity: 1,
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.inOut",
      })
      .to(".benefit-section .third-title", {
        opacity: 1,
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.inOut",
      })
      .to(".benefit-section .fourth-title", {
        opacity: 1,
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power1.inOut",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p>
            Unlock the Advantages:
            <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>

          <div className="mt-20 col-center">
            <ClipPatchTitle
              title="Shelf stable"
              color="#faeade"
              bg="#c88e64"
              borderColor="#222123"
              className="first-title"
            />

            <ClipPatchTitle
              title="Protein + Caffeine"
              color="#222123"
              bg="#e3d3bc"
              borderColor="#222123"
              className="second-title"
            />

            <ClipPatchTitle
              title="Infinitely recyclable"
              color="#faeade"
              bg="#a26833"
              borderColor="#222123"
              className="third-title"
            />

            <ClipPatchTitle
              title="Lactose free"
              color="#222123"
              bg="#fed775"
              borderColor="#222123"
              className="fourth-title"
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">
        <VideoPin />
      </div>
    </section>
  );
};

export default Benefit;
