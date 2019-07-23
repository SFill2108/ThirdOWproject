$('.mainOffer').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
    fade: true,
    asNavFor: '.mainOfferNav'
  });
  $('.mainOfferNav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.mainOffer',
    dots: false,
    focusOnSelect: true,
    arrows: false,
    vertical: true
  });