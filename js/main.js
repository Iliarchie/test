let animationPlayed = false;

function playAnimation() {
  const pln = document.querySelector(".pln");
  pln.style.animation = "none";
  setTimeout(() => {
    pln.style.animation = "plnAnimate 4s ease";
  }, 100);
}

setInterval(playAnimation, 10000);

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const menuHeader = document.querySelector(".header");
    const fly = document.querySelector(".fly");
    const scrollY = window.scrollY;

    const windowHeight = window.innerHeight;

    const design = document.querySelector(".design");
    const designHeight = design.getBoundingClientRect().top;

    if (designHeight + 400 < windowHeight && !animationPlayed) {
      animationPlayed = true;

      const tm = gsap.timeline();

      tm.fromTo(
        ".design__title",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4, ease: "bounce.out" }
      )
        .fromTo(
          ".text__btn",
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "bounce.out" }
        )
        .fromTo(
          ".text__mute",
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "bounce.out" }
        );
    }
  });

  anime({
    targets: ".pln",
    translateY: 15,
    direction: "alternate",
    loop: true,
    easing: "easeInOutSine",
  });

  anime({
    targets: ".tanks",
    translateY: 5,
    direction: "alternate",
    loop: true,
    easing: "linear",
  });

  const tm = gsap.timeline();

  tm.fromTo(
    ".header",
    { y: -400, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, delay: 0.4 }
  )
    .fromTo(
      ".pln",
      { y: 800, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, delay: 1, ease: "bounce.out" }
    )
    .fromTo(
      ".text__title",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 }
    )
    .fromTo(
      ".line",
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4 }
    )
    .fromTo(
      ".text__subtitle",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 }
    );
});

function playAnimation() {
  const pln = document.querySelector(".pln");
  pln.style.animation = "none";
  setTimeout(() => {
    pln.style.animation = "plnAnimate 4s ease";
  }, 100);
}

setInterval(playAnimation, 10000);
