const swiper = new Swiper(".swiper", {
  effect: "fade",
  speed: 3000,
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
