const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 1000,
  spaceBetween: 1000,
  centeredSlides: true,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    1000: {
      slidesPerView: 3,

      autoplay: false,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
  },
});
