$(window).scroll(function() {  
    if ($(window).width() > 992) {  
        var scroll = $(window).scrollTop();
        var banner = $('.banner').height();
        if (scroll > banner) {
            $("header").addClass("sticky_header");
        } else {
            $("header").removeClass("sticky_header");
        }
    }
});
jQuery(document).ready(function() {

    if ($(window).width() < 992) {
        $('header').addClass('sticky_header');
    }
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
