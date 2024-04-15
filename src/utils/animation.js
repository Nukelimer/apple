export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotataionState,
  firstTarget,
  secondTarget,
  animitionProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotataionState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animitionProps,
      ease: "power2.inOut",
    },

    "<"
  );

    
  timeline.to(
    secondTarget,
    {
      ...animitionProps,
      ease: "power2.inOut",
    },
    "<"
    
  );
};
