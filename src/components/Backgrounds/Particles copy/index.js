import React from "react"
import Particles from "react-particles-js"


import particle1 from "./branddoughnut.png"
import particle2 from "./darkknightcircle.png"
import particle3 from "./grimmacedoughnut.png"
import particle4 from "./grimmacecircle.png"
import particle5 from "./orangedoughnut.png"
import particle6 from "./orangecircle.png"
import particle7 from "./brandcircle.png"
import particle8 from "./branddoughnut.png"

const Particle = () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    <Particles
      className="particle shadow"
      params={{
        particles: {
          number: {
            value: 5,
            density: { enable: false, value_area: 800 },
          },

          shape: {
            type: ["images"],
            images: [
              {
                src: `${particle1}`,
                width: 250,
                height: 250,
                opacity: .4,
              },
              {
                src: `${particle2}`,
                width: 145,
                height: 145,
                opacity: .6,

              },
              {
                src: `${particle3}`,
                width: 232,
                height: 232,
                opacity: .7,

              },
              {
                src: `${particle4}`,
                width: 70,
                height: 70,
                opacity: 1,

              },
              {
                src: `${particle5}`,
                width: 60,
                height: 60,
                opacity: .5,
              },
              {
              src: `${particle6}`,
              width: 170,
              height: 170,
              opacity: .5,
            },{
            src: `${particle7}`,
            width: 170,
            height: 170,
            opacity: .5,
          },{
            src: `${particle8}`,
            width: 170,
            height: 170,
            opacity: .5,
          },
            ],
          },
          opacity: {
            value: 0.17626369048095938,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, opacity_max: 0.5, sync: false },
          },
          size: {
            value: 30,
            random: false,
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1.3,
            direction: "none",
            random: false,
            straight: false,
            bounce: true,
            attract: { enable: true, rotateY: 200 },
          },
        },
        retina_detect: true,
      }}
    />
  </div>
)

export default Particle
