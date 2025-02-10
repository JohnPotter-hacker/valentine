const container = document.querySelector(".fireworkDiv")
const fireworks = new Fireworks(container, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles:50,
    traceLength: 0,
    traceSpeed: 2050,
    explosion: 10,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
      min: 0,
      max: 360
    },
    delay: {
      min: 0,
      max: 20
    },
    rocketsPoint: {
      min: 0,
      max: 100
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 5
      },
      trace: {
        min: 1,
        max: 1
      }
    },
    brightness: {
      min: 50,
      max: 80
    },
    decay: {
      min: 0.015,
      max: 0.03
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    }
})
fireworks.start()
