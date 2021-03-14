$(function() {
    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "15px",
        ratedFill: "#e50118",
        spacing: "5px",
        readOnly: true,
      });
      $(".rate-star-four").rateYo({
        rating: 4,
        starWidth: "15px",
        ratedFill: "#e50118",
        spacing: "5px",
        readOnly: true,
      });
      $(".reviews__slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      $(".training__inner").slick({
        nextArrow:
        '<button class="slick-arrow slick-next icon-chevron-right"></button>',
        prevArrow:
        '<button class="slick-arrow slick-prev icon-chevron-left"></button>',
        infinite:true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint:769,
            settings: {
              slidesToShow: 2,
              arrows:false              
            }
          },
          {
            breakpoint: 577,
            settings: {
              slidesToShow: 1,
              arrows:false 
            }
          },
        ]
      });

      $(".menu__list").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
          top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 1500);
      });
      $(".header__link").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
          top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 1500);
      });

      $(".menu__btn").click(function (event) {
        $(".menu__btn,.menu__list").toggleClass("active");
        $('ul li a').click(function() {
          if ( $('.menu__btn, .menu__list').hasClass('active')) {
           $('.menu__btn, .menu__list').removeClass('active');
          }
       });
        $("body").toggleClass("lock")
      });

      $('input[type="file"], select').styler();

      window.sr = ScrollReveal();
      sr.reveal(".animate-top", {
        origin: "top",
        duration: 1000,
        distance: "250px",
        delay: 600,
      });
    
      sr.reveal(".animate-bottom", {
        origin: "bottom",
        duration: 1000,
        distance: "250px",
        delay: 600,
      });

      TweenMax.from(".header__logo", 1, {
        delay: 0.4,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
      });
    
      TweenMax.from(".menu__list , .menu__btn", 1, {
        delay: 0.8,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
      });

      TweenMax.from(".header-lang", 1, {
        delay: 1.2,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
      });
    
      TweenMax.from(".header__title", 1, {
        delay: 1.6,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".header__text", 1, {
        delay: 2.0,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
      });
      TweenMax.from(".header__link", 1, {
        delay: 2.4,
        y: 20,
        opacity: 0,
        ease: Expo.easeInOut,
      });
});
  