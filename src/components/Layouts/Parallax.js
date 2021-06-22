import React, { useEffect, useRef } from 'react';
/*const wallpaper = require("../../images/wallpaper.png");*/
import { animated, useSpring } from 'react-spring';
import { url } from 'vfile-message';

// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calc = o => `translateY(${o * 0.1}px)`;

const ParallaxContainer = ({children}/*}, {wallpaper}*/) => {
  const ref = useRef();
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top;
    const offset = window.pageYOffset - posY;
    set({ offset });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div ref={ref}>
      <div
        style={{
          background: "#eee",
          minHeight: "300vh"
        }}
      >
        <div
          style={{
            background: "ddd",
            height: "200px"
          }}
        />
        <div
          style={{
            background: "#123456",
            position: "relative",
            width: "100vw",
            height: "400px"
          }}
        >
          <animated.div
            style={{
              background: "#654321",
              position: "absolute",
              width: "100vw",
              height: "100px",
              top: 0,
              left: 0,
              transform: offset.interpolate(calc)
            }}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default ParallaxContainer;
