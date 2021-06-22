/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 15/06/2021 - 20:35:54
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 15/06/2021
    * - Author          :
    * - Modification    :
**/
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import './LetUsGuess.css';
import cards from './data.js';
import { StaticImage } from "gatsby-plugin-image"

import Particles from '../../Backgrounds/Particles/Stars';
function Stars() {
  return (
<div className="rounded bg-gradient">
      <Particles>
        <Hero>
          <div className="px-20 py-20 starscontainer">
          <h1 className="text-4xl text-center text-white underline dincondensed text-bold">Let Us Guess...</h1>

            <div className="starsrow">
              {cards.map((card, i) => (
                <div className="starscolumn">
                  <Card>        <img
      src={card.image}
      alt={card.title}
      placeholder="blurred"
      layout="fullWidth"
      width={700}
      loading="lazy"
      className="object-cover running-1 animate-enter pb-28"
    />
                    <div className="starscard-title">{card.title}</div>
                    <div className="starscard-body">{card.description}</div>

                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
      </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="starscard"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 90; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}


function Hero({ children }) {
  return (
    <div className="starshero">
      <div className="starshero-body">{children}</div>
    </div>
  );
}



export default Stars;
