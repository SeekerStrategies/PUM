$(window).scroll(function() {  
        var scroll = $(window).scrollTop();
        var banner = $('.banner').height();
        if (scroll > banner) {
            $("header").addClass("sticky_header");
        } else {
            $("header").removeClass("sticky_header");
        }
});
jQuery(document).ready(function() {

    // if ($(window).width() < 992) {
    //     $('header').addClass('sticky_header');
    // }
    // Team Slider
    // Initialize Slick Slider for both content and images
    $(".slider-single").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow"></button>',
        fade: true,
        asNavFor: ".slider-nav"
      });
      $(".slider-nav").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".slider-single",
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        
        infinite: true,
        responsive: [
            {
              breakpoint: 1441,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                adaptiveHeight: true
              }
            }

        ]
      });
      
});


jQuery('.read-more').each(function() {
    jQuery(this).on('click', function() {
        jQuery(this).parent('.slick-slide').find('.more__text').slideToggle();
        if (jQuery(this).find('span').text() == "Read more") {
            jQuery(this).find('span').text("Read less")
        } else {
            jQuery(this).find('span').text("Read more")
        }
    });
});