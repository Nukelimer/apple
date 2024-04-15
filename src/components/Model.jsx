import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/all";
import React, { useEffect, useRef } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animation";

function Model() {
  const [model, setModel] = useState({
    title: "Iphone 15 Pro Max in Natural Titanium",
    color: ["#000055", "#fffba1", "#ddf7b6"],
    img: yellowImg,
  });
  const [size, setSize] = useState("small");

  const cameraControlSmall = useRef();
  const cameraControlBig = useRef();
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setlargeRotation] = useState(0);

  const timelineAnimitaion = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(
        timelineAnimitaion,
        small,
        smallRotation,
        "#view1",
        "#view2",
        { transform: "translateX(-100%)", duration: 2 }
      );
    }

      if (size === "small") {
        
        animateWithGsapTimeline(
            timelineAnimitaion,
            large,
            largeRotation,
            "#view2",
            "#view1",
            { transform: "translateX(0)", duration: 2 }
          );
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          {" "}
          Inspect this device.
        </h1>
        <div className="flex flex-col items-center mt-5 ">
          <div className="w-full h-[75vh] md:h[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />{" "}
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlBig}
              setRotationState={setlargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}>
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((modelValue, i) => {
                  return (
                    <li
                      key={i}
                      className={`h-6 w-6 rounded-full mx-3 cursor-pointer`}
                      style={{ background: `${modelValue.color[1]}` }}
                      onClick={() => {
                        setModel(modelValue);
                      }}></li>
                  );
                })}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ value, label }) => {
                  return (
                    <span
                      key={value}
                      className="size-btn  "
                      style={{
                        background: size === value ? "white" : "transparent",
                        color: size === value ? "black" : "white",
                      }}
                      onClick={() => {
                        setSize(value);
                      }}
                      id="size">
                      {label}
                    </span>
                  );
                })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
