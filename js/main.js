// $(function() {
//   alert('OK!');
// });

$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    centerPadding: "30px",
    dots: false,
    // fade: true,
    slidesToShow: 3,
    speed: 400,
  });
});