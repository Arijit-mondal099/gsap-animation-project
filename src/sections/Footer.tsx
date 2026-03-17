import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <footer className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt="footer dip"
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative pd:mt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        {isMobile ? (
          <img
            src="/images/footer-drink.png"
            alt="footer-drink"
            className="absolute top-0 object-center mix-blend-lighten"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            muted
            playsInline
            className="absolute top-0 object-center mix-blend-lighten"
          />
        )}

        <div className="relative z-10 flex-center gap-5 mt-5 md:mt-20">
          <div className="social-btn">
            <img src="/images/yt.svg" alt="yt" />
          </div>
          <div className="social-btn">
            <img src="/images/tiktok.svg" alt="tiktok" />
          </div>
          <div className="social-btn">
            <img src="/images/insta.svg" alt="insta" />
          </div>
        </div>

        <div className="copyright-box">
          <p>
            Copyright © {new Date().getFullYear()} Arijit Mondal - All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
