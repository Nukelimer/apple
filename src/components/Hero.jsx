import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const resizeHandler = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      removeEventListener("resize", resizeHandler);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".hero-title", {
      delay: 3,
      opacity: 1,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 3,
      y: -10,
    });

    gsap.fromTo(
      ".stagger-cta",
      { y: 0, delay: 4 },
      {
        delay: 4,
        stagger: 0.8,
        y: -15,
      }
    );
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title ">Iphone 15 Pro Max</p>

        <div className="md:w-10/12 w-9/12">
          <video
            className=" pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}>
            <source src={videoSrc} />
          </video>
        </div>
      </div>

      <div
        className="flex flex-col items-center opacity-0 translate-y-60 "
        id="cta">
        <a href="#highlights" className="btn  stagger-cta">
          Buy{" "}
        </a>
        <p className="font-normal stagger-cta">From $249.99/ Month or $1799.</p>
      </div>
    </section>
  );
}

export default Hero;
