import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import Carousel from "./Carousel";

function Highlight() {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, delay: 4, y: 6 });
    gsap.to(".link", { opacity: 1, delay: 4, y: 6, animationDelay:0.2 ,stagger: 0.60 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen h-full common-padding  overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              watch the film{" "}
              <img src={watchImg} alt={"watch"} className="ml-2" />
            </p>
            <p className="link">
              watch the event{" "}
              <img src={rightImg} alt={"watch"} className="ml-2" />
            </p>
          </div>
        </div>

        <Carousel/>
      </div>
    </section>
  );
}

export default Highlight;
