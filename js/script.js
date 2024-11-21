(function ($) {
  "use strict";
  $(document).ready(function () {
    // masonoary //
    initIsotope();
    ssPreloader();
    // lightbox
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      fitImagesInViewport: true,
    });

    /* swiper */
    var testimonialSwiper = new Swiper(".book-swiper", {
      slidesPerView: "auto",
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
    });
  });
  // init Isotope
  var initIsotope = function () {
    $(".grid").each(function () {
      // $('.grid').imagesLoaded( function() {
      // images have loaded
      var $buttonGroup = $(".button-group");
      var $checked = $buttonGroup.find(".is-checked");
      var filterValue = $checked.attr("data-filter");

      var $grid = $(".grid").isotope({
        itemSelector: ".portfolio-item",
        // layoutMode: 'fitRows',
        filter: filterValue,
      });

      // bind filter button click
      $(".button-group").on("click", "a", function (e) {
        e.preventDefault();
        filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $(".button-group").each(function (i, buttonGroup) {
        $buttonGroup.on("click", "a", function () {
          $buttonGroup.find(".is-checked").removeClass("is-checked");
          $(this).addClass("is-checked");
        });
      });
      // });
    });
  };

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $("#header").addClass("scrolled");
    } else {
      $("#header").removeClass("scrolled");
    }
  });
  const ssPreloader = function () {
    $("html").addClass('ss-preload');
    $(window).on('load', function () {
      $("#loader").fadeOut("slow", function () {
        $("#preloader").delay(300).fadeOut("slow");
      });
      $("html").removeClass('ss-preload');
      $("html").addClass('ss-loaded');

    });
  };
  
})(jQuery);
