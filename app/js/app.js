const swiper = new Swiper('.slider-done-slider', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    direction: 'horizontal',
  loop: false,
    
   // Responsive breakpoints
   breakpoints: {
    // when window width is >= 320px
    400: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    700: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 750px
    1090: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  
      
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
    
  // breakpoints: {
  //   // when window width is <= 320px
    
  //   // when window width is <= 480px
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   // when window width is <= 640px
  //   903: {
  //     slidesPerView: 2,
  //     spaceBetween: 30
  //   },

  //   1000: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }

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



if ($(window).width() < 767) {
  
}