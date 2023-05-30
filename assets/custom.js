$(window).on("load", function () {
  $(".slide-block-grid").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(window).on("load", function () {
  $(".main-row").slick({
    arrows: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(window).on("load", function () {
  $(".shop-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});


$(window).on("load", function () {
  $(".corori-banner-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(window).on("load", function () {
  $(".corosi-review-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});


$(window).on("load", function () {
  $(".posibility-slider").slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

$(window).on("load",  function(){
  $('.main_images').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  asNavFor: '.thumb_images'
});
$('.thumb_images').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.main_images',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  vertical:true
});
});


  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const svg = item.querySelector('.acc-svg');
  header.addEventListener('click', () => {
    content.classList.toggle('active');
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
    svg.style.rotate = svg.style.rotate === '0deg' ? '180deg' : '0deg';
  });
});

  