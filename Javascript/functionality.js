$(function() {
  window.sr = ScrollReveal();
  sr.reveal(".navbar", {
    duration: 2000,
    origin: "top",
    distance: "200px"
  });
  sr.reveal(".about", {
    duration: 2000
  });

  sr.reveal("#start", {
    duration: 1500,
    delay: 1500,
    origin: "top",
    distance: "100px"
  });

  sr.reveal("#pf-description", {
    duration: 2000,
    viewFactor: 0.8
  });

  sr.reveal(".portfolio-container", {
    duration: 2000,
    viewFactor: 0.3
  });

  sr.reveal("#about-heading", {
    origin: "top",
    distance: "80  px",
    duration: 2000,
    viewFactor: 0.4
  });

  sr.reveal(".profile_picture", {
    duration: 1500,
    origin: "left",
    distance: "500px",
    viewFactor: 0.8
  });

  sr.reveal(".about-body-p", {
    duration: 1500,
    origin: "right",
    distance: "500px",
    viewFactor: 0.8
  });

  sr.reveal("#about-heading", {
    duration: 2000,
    origin: "top"
  });

  sr.reveal(".skills-heading", {
    duration: 2000,
    origin: "bottom",
    distance: "80px",
    viewFactor: 0.4
  });
  sr.reveal(".skill-head", {
    duration: 2500,
    viewFactor: 0.3
  });

  sr.reveal(".resume", {
    duration: 2000,
    viewFactor: 0.3
  });
  sr.reveal(".contact-head", {
    origin: "top",
    distance: "190px",
    duration: 1500,
    viewFactor: 0.3
  });

  sr.reveal(".email-desc", {
    duration: 1500,
    delay: 500,
    viewFactor: 0.1
  });

  sr.reveal(".main-email", {
    origin: "bottom",
    distance: "190px",
    delay: 1000,
    duration: 1000,
    viewFactor: 0.1
  });

  sr.reveal(".icons", {
    delay: 500,
    duration: 1500,
    viewFactor: 0.1
  });

  feather.replace();
  $("#start").hover(
    function() {
      $(this).animate(
        {
          backgroundColor: "white",
          color: "#E31B6D"
        },
        "fast",
        "linear"
      );
    },
    function() {
      $(this).animate(
        {
          backgroundColor: "#2f3640",
          color: "#E31B6D"
        },
        "fast",
        "linear"
      );
    }
  );
});
