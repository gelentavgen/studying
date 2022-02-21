// alert(1);
// let answer = confirm('Are you over 18?')
// console.log(answer)
// let validation = prompt('Are you over 18?', '');
// console.log(validation);
// let answer = confirm('Are you over 18?');
// if (answer) {
//   console.log('you are welcome')
// } else {
//   console.log('get out')
// };

// for (let i = 1; i < 8; i++) {
//   console.log(i)
// };

// function logging(a, b) {
//   console.log(a + b)
// };
// logging(3, 5);
$(document).ready(function(){
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
});