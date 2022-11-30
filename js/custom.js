jQuery(document).ready(function ($) {
  new WOW().init();


  $.each($(".menu-item-has-children"), function (i, d) {
    $(d).append(`
          <button class="dropdown-toggle">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </button>
      `)
  });


  $(window).scroll(function () {

    if ($(document).scrollTop() > 50) {
      $("#header").addClass("fixed slideInDown");
      $(".head-image-wrap ").css("display", "none");
      $(".site-header .bottom-header .site-branding #logo .custom-logo-link ").css("width", "30%");
      
      

    } else {
      $("#header").removeClass("fixed slideInDown");
      $(".head-image-wrap ").css("display", "inline-block");
      $(".site-header .bottom-header .site-branding #logo .custom-logo-link ").css("width", "60%");
    }
  });
  
  $(window).scroll(function () {

    if ($(document).scrollTop() > 150) {
      $(".inner-page-menu").addClass("fixed slideInDown");
      $(".inner-page-menu").css("top","17%");
      $(".inner-page-menu").css("z-index","10");
      

    } else {
      $(".inner-page-menu").removeClass("fixed slideInDown");
      $(".inner-page-menu").css("top","0%");
      $(".inner-page-menu").css("z-index","10");
    }
  });
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': 'mobile-menu',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    // $('#mobile-nav').find('.menu-item-has-children').prepend('<i class="fa fa-angle-down"></i>');

    $(document).on('click', '.menu-item-has-children i', function (e) {
      $('.sub-menu').toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      // $(this).toggleClass("fa-angle-up fa-angle-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-nav-toggle').toggleClass('cross');
      $('#mobile-body-overly').toggle();
    });

    $(document).on('click', function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

	$('#innernav li ').on('click', function (e) {
		e.preventDefault();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var id = $(this).find('a').attr('href');
		var offset = $(id).offset() && $(id).offset().top;
		if (offset) {
			$('html,body').animate({
				scrollTop: offset - 20
			}, 500);
		}

	});
  // $(".navigation-wrapper").click(function (e) {
  //   e.preventDefault();

  //   $(".menu-wrapper").toggleClass("active");
  // });
  // $("button.close-button").click(function (e) {
  //   e.preventDefault();

  //   $(".menu-wrapper").removeClass("active");
  // });
  // $(".main-navigation ul li a ").click(function (e) {
  //   e.preventDefault();
  //    $(this).addClass('active');
  //    $(this).first().find('.sub-menu').addClass('active');

  // });
  $(" .dropdown-toggle").click(function (e) {
    e.preventDefault();

  });



  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.news-single',
    layoutMode: 'fitRows',
    filter: ''
  });
  // var $grid = $('.grid').isotope({
  //   itemSelector: '.news-single',
  //   layoutMode: 'fitRows',
  //   filter: ''
  // });
  // filter functions
  var filterFns = {
    // show if number is greater than 50

    // show if name ends with -ium

  };
  // bind filter button click
  $('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  var $downloadwrapper = $('.download-wrapper').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    filter: ''
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50

    // show if name ends with -ium

  };
  // bind filter button click
  $('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $downloadwrapper.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });
  $(".banner-slider").slick({
    autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,

        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: false


        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: false,
          vertical: false,
          centerMode: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.gallery-slider').slick({

    autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // $(".team-slider").slick({
  //   autoplay: false,
  //   dots: true,
  //   arrows: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         dots: true,
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         infinite: true,

  //       }
  //     },
  //     {
  //       breakpoint: 991,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         vertical: false


  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         autoplay: false,
  //         vertical: false,
  //         centerMode: true,
  //         arrows: false,
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // });
});