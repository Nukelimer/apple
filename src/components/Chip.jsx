import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animation";

function Chip() {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      x: "-80%",

      scrollTrigger: {
        trigger: "#chip",
        start: "20%  top, bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power1.out",
      rotateX: "200",
      skewY: "100",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.in",
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip " width={100} height={200} />
        </div>

        <div className="flex flex-col items-center ">
          <h2 className="hiw-title">
            A70 Pro chip.
            <br />A monster wim for mobile gaming.
          </h2>

          <p className="hiw-subtitle">
            It is here.The biggest redesign in the history of GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img src={frameImg} alt="frame" className="z-10 bg-transparent" />
            </div>
            <div className="hiw-video">
              <video
                autoPlay
                playsInline
                className="pointer-events-none vid"
                preload="none"
                muted
                ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail.
          </p>
        </div>
        <div className="hiw-text-container">
          <div className=" flex flex-1 flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              A7 Pro is an entirely new class of Iphone Chip that delivers{" "}
              <span className="text-white">
                the best graphic performance by far.
              </span>
            </p>
          <p className="hiw-text g_fadeIn">
            Mobile{" "}
            <span className="text-white">
              games will look and feel realistic.
            </span>
            With incredibly detailed environment and characters.
          </p>
          </div>
          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">With 6 cores.</p>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}

export default Chip;
