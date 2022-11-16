const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 1000,
  centeredSlides: true,

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
  },
});

// const swiper1 = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,
//   allowSlideNext: true,
//   allowSlideNext: true,
//   speed: 1000,
//   autoplay: {
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true,
//     delay: 2000,
//   },

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     1000: {
//       slidesPerView: 3,
//       spaceBetween: 3,
//       allowSlideNext: false,
//       allowSlideNext: false,
//       autoplay: false,
//     },
//   },
// });
