import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Message = () => {
  useGSAP(() => {
    const firstMsgSplite = SplitText.create(".frist-message", {
      type: "words",
    });
    const secondMsgSplite = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplite = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplite.words, {
      color: "#faeade",
      stagger: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(secondMsgSplite.words, {
      color: "#faeade",
      stagger: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
        // markers: true,
      },
    });

    revealTl.to(".msg-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
        end: "bottom 40%",
        scrub: true,
        // markers: true,
      },
    });

    paragraphTl.from(paragraphSplite.words, {
      yPercent: 300,
      rotate: 3,
      duration: 1,
      stagger: 0.01,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="h-full w-full">
          <div className="msg-wrapper">
            <h1 className="frist-message">Stir up your fearless past and</h1>

            <div
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className="msg-text-scroll opacity-0"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">FUEL UP</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="flex-center max-w-md px-10 overflow-hidden">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you're one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
