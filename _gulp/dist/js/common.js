'use strict';

// Document ready
$(document).on('ready', function(){

  // E-mail Ajax Send
  // Documentation & Example: https://github.com/agragregra/uniMail
  $("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      alert("Thank you!");
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  // Magnific popup gallery
  $('.gallery').each(function() {
    $(this).magnificPopup({
      delegate: '.gallery-item',
      type: 'image',
      gallery: {
        enabled: true,
        tCounter: '%curr% из %total%'
      },
      zoom: {
        enabled: false, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  });

  // Magnific popup one image
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }
  });

  // Magnific popup video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  $('.content ol li').each(function () {
    $(this).prepend('<span class="span">' + ($(this).index() + 1) + '</span>');
  });

  mobileBtn();
  showText();

  $('.gallery__carousel-wrapper').slick({
    // infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '290px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="ion-android-arrow-back"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-android-arrow-forward"></i></button>',
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: '250px'
        }
      }, {
        breakpoint: 1500,
        settings: {
          centerPadding: '150px'
        }
      }, {
        breakpoint: 1300,
        settings: {
          centerPadding: '50px'
        }
      }, {
        breakpoint: 1200,
        settings: {
          centerPadding: '50px',
          slidesToShow: 2
        }
      }, {
        breakpoint: 992,
        settings: {
          centerPadding: '0px',
          slidesToShow: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          centerPadding: '100px',
          slidesToShow: 1
        }
      }, {
        breakpoint: 650,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }, {
        breakpoint: 580,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.main-slider__wrapper').slick({
    infinite: true,
    dots: false,
    arrows: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '359px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="ion-android-arrow-back"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-android-arrow-forward"></i></button>',
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerPadding: '250px'
        }
      }, {
        breakpoint: 1500,
        settings: {
          centerPadding: '150px'
        }
      }, {
        breakpoint: 1300,
        settings: {
          centerPadding: '50px'
        }
      }, {
        breakpoint: 1200,
        settings: {
          centerPadding: '0px'
        }
      }
    ]
  });

  var swiper = new Swiper('.gallery__product .swiper-container', {
    pagination: {
      el: '.gallery__product .swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        if (number > 0 && number < 10) {
          return '0' + number
        } else {
          return number
        }
      },
      formatFractionTotal: function (number) {
        if (number > 0 && number < 10) {
          return '0' + number
        } else {
          return number
        }
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
          '/' +
          '<span class="' + totalClass + '"></span>';
      }
    },
    navigation: {
      nextEl: '.gallery__product .swiper-button-next',
      prevEl: '.gallery__product .swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    loop: true
  });

  $('.last-projects__carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
          pauseOnFocus: false,
        }
      },{
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: false,
          pauseOnFocus: false
        }
      }
    ]
  });

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };

  // simpleForm version 2015-09-23 14:30 GMT +2
  simpleForm('form.form-callback');
});

$(window).on('load', function() {
  // $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});

$(window).on('scroll', function() { });
$(window).on('resize', function() {
  var width = $(window).width();
  var btn = $('.header__btn');
  var mobile = $('.mobile');
  var shadow = $('.body__shadow');
  var btnMenu = $('.mobile__btn');
  var body = $('body');

  if (width >= 768) {
    btn.removeClass('is-active');
    mobile.removeClass('is-active');
    shadow.removeClass('is-active');
    btnMenu.removeClass('is-active');
    body.removeAttr('style');
  }
});

/*
version 2015-09-23 14:30 GMT +2
*/
function simpleForm(form, callback) {
  $(document).on('submit', form, function(e){
    e.preventDefault();
    var formData = {};
    var hasFile = false;
    if ($(this).find('[type=file]').length < 1) {
      formData = $(this).serialize();
    }
    else {
      formData = new FormData();
      $(this).find('[name]').each(function(){

        switch($(this).prop('type')) {

          case 'file':
            if ($(this)[0]['files'].length > 0) {
              formData.append($(this).prop('name'), $(this)[0]['files'][0]);
              hasFile = true;
            }
            break;

          case 'radio':
          case 'checkbox':
            if (!$(this).prop('checked')) {
              break;
            }
            formData.append($(this).prop('name'), $(this).val().toString());
            break;

          default:
            formData.append($(this).prop('name'), $(this).val().toString());
            break;
        }
      });
    }

    $.ajax({
      url: $(this).prop('action'),
      data: formData,
      type: 'POST',
      contentType : hasFile ? 'multipart/form-data' : 'application/x-www-form-urlencoded',
      cache       : false,
      processData : false,
      success: function(response) {
        $(form).removeClass('ajax-waiting');
        $(form).html($(response).find(form).html());

        if (typeof callback === 'function') {
          callback(response);
        }
      }
    });

    $(form).addClass('ajax-waiting');

    return false;
  });
}

function mobileBtn() {
  var btn = $('.header__btn');
  var mobile = $('.mobile');
  var shadow = $('.body__shadow');
  var btnMenu = $('.mobile__btn');
  var body = $('body');

  btn.on('click', function(){
    if (btn.hasClass('is-active')) {
      btn.removeClass('is-active');
      mobile.removeClass('is-active');
      shadow.removeClass('is-active');
      btnMenu.removeClass('is-active');
      body.removeAttr('style');
    } else {
      btn.addClass('is-active');
      mobile.addClass('is-active');
      shadow.addClass('is-active');
      btnMenu.addClass('is-active');
      body.attr('style', 'overflow: hidden');
    }
  });

  btnMenu.on('click', function(){
    if (btn.hasClass('is-active')) {
      btn.removeClass('is-active');
      mobile.removeClass('is-active');
      shadow.removeClass('is-active');
      btnMenu.removeClass('is-active');
      body.removeAttr('style');
    } else {
      btn.addClass('is-active');
      mobile.addClass('is-active');
      shadow.addClass('is-active');
      btnMenu.addClass('is-active');
      body.attr('style', 'overflow: hidden');
    }
  });

  shadow.on('click', function(){
    if (shadow.hasClass('is-active')) {
      btn.removeClass('is-active');
      mobile.removeClass('is-active');
      shadow.removeClass('is-active');
      btnMenu.removeClass('is-active');
      body.removeAttr('style');
    }
  });
}

function showText() {
  var btn = $('.j-show');
  var text = btn.next();

  btn.on('click', function() {
    $(this).hide();
    if (text.hasClass('hidden')) {
      text.removeClass('hidden');
    }
  })
}