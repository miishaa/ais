const swiper = new Swiper('.slider-done-slider', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: false,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});
  

new Swiper('.item__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});


$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});