jQuery(document).ready(function ($) {



  $.each($(".menu-item-has-children"), function (i, d) {
    $(d).append(`
          <button class="dropdown-toggle">
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
          </button>
      `)
  });

  var headHeight = $(".header").height();
  console.log(headHeight);
  $(".sidebar").css("top",headHeight+20,"px")
});