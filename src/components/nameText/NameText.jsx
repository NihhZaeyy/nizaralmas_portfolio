import React, { useEffect, useRef } from "react";
import "./nameText.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NameText = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    let animationFrameId; // Declare animation frame ID

    const animation = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }

      if (xPercent > 0) {
        xPercent = -100;
      }

      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      xPercent += 0.07 * direction;

      animationFrameId = requestAnimationFrame(animation); // Assign the animationFrameId
    };

    if (slider.current && firstText.current && secondText.current) {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          end: window.innerHeight,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-300px",
      });

      animationFrameId = requestAnimationFrame(animation);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={slider}
      className="slider text-white text-[120px] md:text-[180px]"
    >
      <h1 ref={firstText} className="text1">
        Muchammad Nizar Almas Sukirno -
      </h1>
      <h1 ref={secondText} className="text2">
        &nbsp;Muchammad Nizar Almas Sukirno -
      </h1>
    </div>
  );
};

export default NameText;
