
particlesJS('background-animation', {
    particles: {
        number: {
            value: 100,  // Number of dots
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"  // Color of the dots
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.9,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,  // Movement speed of dots
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            attract: {
                enable: false,
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"  // Repel effect when mouse moves over particles
            },
                
            onclick: {
                enable: false,
                mode: "push"  // Adds more particles on click
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 100,
                line_linked: {
                    opacity: 1
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
                distance: 100,
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
});
