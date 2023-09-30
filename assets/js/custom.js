$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var banner = $('.banner').height();
    if (scroll > banner) {
        $("header").addClass("sticky_header");
        $('#btn-back-to-top').fadeIn();
    } else {
        $("header").removeClass("sticky_header");
        $('#btn-back-to-top').fadeOut();
    }
});
jQuery(document).ready(function() {
    $(".navbar-toggler").click(function(){
        $("body").addClass("overflow");
    });
    $(".menu_close, .nav-link").click(function(){
        $("body").removeClass("overflow");
    });
    $(".menu_close, .nav-link").click(function(){
        $("#collapsibleNavbar").removeClass("show");
        $("#collapsibleNavbar").slideUp();
    });


    // Team Slider
    // Initialize Slick Slider for both content and images
    $(".slider-single").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow"></button>',
        fade: true,
        useTransform: true,
        asNavFor: ".slider-nav"
      });
      $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-single",
        dots: false,
        arrows: false,
        focusOnSelect: true
      });
      
});
// $('#btn-back-to-top').click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 400);
//     return false;
// });