// let answer = confirm('Are you over 18?')
// let validation = prompt('Are you over 18?', '');
// let answer = confirm('Are you over 18?');
// if (answer) {
//   console.log('you are welcome')
// } else {
//   console.log('get out')
// };

// const { post } = require("jquery");

// for (let i = 1; i < 8; i++) {
//   console.log(i)
// };

// function logging(a, b) {
//   console.log(a + b)
// };
// logging(3, 5);

$(document).ready(function() {
  $('.carousel_inner').slick({
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // fade: true,
    // cssEase: 'linear'
    prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron-left-solid.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/chevron-right-solid.svg"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
  });

  // $('.catalog-item__link').each(function(i) {
  //   $(this).on('click', function(e) {
  //     e.preventDefault();
  //     $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
  //     $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
  //   })
  // })

  // $('.catalog-item__back').each(function(i) {
  //   $(this).on('click', function(e) {
  //     e.preventDefault();
  //     $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
  //     $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
  //   })
  // })

  function toggleSlide (item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item_content').eq(i).toggleClass('catalog-item_content_active');
        $('.catalog-item_list').eq(i).toggleClass('catalog-item_list_active');
      })
    })
  }

  toggleSlide('.catalog-item__back');
  toggleSlide('.catalog-item__link');

  //Modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn('fast');
  });

  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  });

  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    });
  });

  function validateForm(form) {
    $(form).validate({
      rules:{
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Державною мовою, будь ласка",
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com"
        }
      }
    });
  }
  
  validateForm('#consultation-form');
  validateForm('#order form');
  validateForm('#consultation form');

  $('input[name=phone]').mask("+38 (999) 999-9999");

  const form = document.getElementById('consultation');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const element = event.target;
    
    const name = element[0].value;
    const phone = element[1].value;
    const email = element[2].value;

    fetch('http://localhost:3000/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, phone, email })
    })
  })

  //smooth scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  $('a[href^=#up').on('click', function() {

    const href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
  });

  new WOW().init();
});