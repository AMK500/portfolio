const checkbox = document.getElementById("toggle");

console.log(checkbox);

// استعادة الحالة من localStorage عند تحميل الصفحة
window.addEventListener("load", () => {
  const isChecked = localStorage.getItem("toggle") === "true";
  checkbox.checked = isChecked;
});

// حفظ الحالة في localStorage عند تغييرها
checkbox.addEventListener("change", () => {
  localStorage.setItem("toggle", checkbox.checked);
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.15,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 200,
        height: 200,
      },
    },
    opacity: {
      value: 0.49,
      random: false,
      anim: {
        enable: true,
        speed: 0.25,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 1.333,
        size_min: 0.5,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 3,
    },
    move: {
      enable: true,
      speed: 1.1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 100,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 50,
      },
    },
  },
  retina_detect: true,
});
