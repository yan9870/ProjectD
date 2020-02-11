$(document).ready(function() {
  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></button>',
    slidesToShow: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false
      }
    }]
  });
  $('.pick-pizza-slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></button>',
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true
  });
  $('.salads-slider').slick({
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i></button>',
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true
  });
});

// $(".btn1").click(function() {
//   $(".btn1").css("display", "none");
// });
// $(".btn2").click(function() {
//   $(".btn2").css("display", "none");
// });
// $(".btn3").click(function() {
//   $(".btn3").css("display", "none");
// });
// $(".btn4").click(function() {
//   $(".btn4").css("display", "none");
// });
// $(".btn5").click(function() {
//   $(".btn5").css("display", "none");
// });
// $(".btn6").click(function() {
//   $(".btn6").css("display", "none");
// });
