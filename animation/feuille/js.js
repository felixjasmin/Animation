gsap.fromTo('.feuille_01', {

}, {
    scrollTrigger: { 

        trigger: ".animation",
        scrub: 1,
        markers: true,
        pin: true,
    },
    motionPath: {
        autoRotate: true,
        curviness: 1.25,
        path: [
          {x: 100, y: 0}, 
          {x: 700, y: 40},
          {x: 1000, y: 100},
          {x: 1200, y: -100},
          {x: 950, y: -50},
          {x: 1550, y: 100},
          {x: 2100, y: 0},
        ],
      },

    ease: Power1.easeInOut,
})

gsap.fromTo('.feuille_02', {
}, {
    scrollTrigger: { 

        trigger: ".animation",
        scrub: 1,
        markers: true,
        pin: true,
    },
    motionPath: {
        autoRotate: true,
        curviness: 1,
        path: [
          {x: 100, y: -20}, 
          {x: 700, y: -40},
          {x: 1000, y: 100},
          {x: 1200, y: -100},
          {x: 1800, y: 50}, 
          {x: 2100, y: -200},
        ],
      },

    ease: Power1.easeInOut,
})

gsap.fromTo('.feuille_03', {
}, {
    scrollTrigger: { 

        trigger: ".animation",
        scrub: 1,
        markers: true,
        pin: true,
    },
    motionPath: {
        autoRotate: true,
        curviness: 1,
        path: [
          {x: 00, y: -20}, 
          {x: 500, y: -60},
          {x: 1300, y: 120},
          {x: 900, y: -100},
          {x: 1500, y: 300}, 
          {x: 2100, y: -40},
        ],
      },

    ease: Power1.easeInOut,
})

gsap.fromTo('.feuille_04', {
}, {
    scrollTrigger: { 

        trigger: ".animation",
        scrub: 1,
        markers: true,
        pin: true,
    },
    motionPath: {
        autoRotate: true,
        curviness: 1,
        path: [
          {x: 00, y: 0}, 
          {x: 300, y: 300},
          {x: 1000, y: 30},
          {x: 1500, y: 0},     
          {x: 2100, y: -40},
        ],
      },

    ease: Power1.easeInOut,
})

gsap.fromTo('.feuille_05', {
}, {
    scrollTrigger: { 

        trigger: ".animation",
        scrub: 1,
        markers: true,
        pin: true,
    },
    motionPath: {
        autoRotate: true,
        curviness: 1,
        path: [
          {x: 00, y: 100},
          {x: 200, y: 400}, 
          {x: 500, y: 600},
          {x: 1000, y: 700},
          {x: 1500, y: 600},
          {x: 1800, y: 400},
          {x: 2000, y: 100},

                

        ],
      },

    ease: Power1.easeInOut,
})
