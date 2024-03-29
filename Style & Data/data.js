var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay:{
    delay:1500
  },
  speed:4000,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
  },
  scrollbar:{
    el: ".swiper-scrollbar",
  },
  navigation:{
    next1:"swiper-button-next",
    prev1:"swiper-button"
  }
});


