/**
    * @description      :
    * @author           :
    * @group            :
    * @created          : 16/06/2021 - 19:45:17
    *
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/06/2021
    * - Author          :
    * - Modification    :
**/
// Generate a config at https://vincentgarreau.com/particles.js/

export default {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: '#000000',
      value: '#121212',
      value: '#212121',

    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      }
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: .03,
        opacity_min: 0.6,
        sync: false
      }
    },
    size: {
      value: 8,
      random: true,
      anim: {
        enable: false,
        speed: .03,
        size_min: 1,
        size_max: 20,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'left',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'push'
      },
      onclick: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
