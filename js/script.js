$(document).ready(function (params) {
  $('.slick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

  responsive: [

    {
      breakpoint: 991,
      settings: {
        autoplay: true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        autoplay: true,
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        autoplay: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

});





  
});

