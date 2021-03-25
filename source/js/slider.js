$(document).ready(function(){
  $('.wedding-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.graduation-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.mixed-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
    ]
  });

  $('.reviews__list').slick({
    dots: true,
    infinite: true,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
    ]
  });

  $('.order__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    centerMode: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
    ]
  });
});