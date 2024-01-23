$(window).scroll(function() {  
        var scroll = $(window).scrollTop();
        var banner = $('.banner').height();
        if (scroll > banner - 250 ) {
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


var form = document.getElementById("contact__form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form__status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    if (response.ok) {
        status.classList.add('success');
        status.innerHTML = "Thanks for contacting us! We will get in touch with you shortly.";
        form.reset()
    } else {
        response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
            status.classList.add('error');
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
            status.classList.add('error');
            status.innerHTML = "Oops! There was a problem submitting your form"
        }
        })
    }
    }).catch(error => {
      status.classList.add('error');
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)
