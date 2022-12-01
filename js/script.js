$(function () {
    'use strict';
    $('.banner_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      prevArrow: '<i class="fas fa-chevron-up prv_arr"></i>',
      nextArrow: '<i class="fas fa-chevron-down nxt_arr"></i>',
  
      responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
  
  
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
          }
        }
      ]
    });
  
    // client ===
  
    $('.row_slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 3000,
      arrows: false,
  
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        }
      },

    
  
  
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
    });



// comment slider

    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
      speed: 3000,
      arrows: true,
      prevArrow: '<i class="fas fa-long-arrow-alt-left prv_arr"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right nxt_arr"></i>',
  
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },

    
  
  
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      }
    ]
    });


    var containerEl = document.querySelector('.last_row');

      var mixer = mixitup(containerEl);




  
  });