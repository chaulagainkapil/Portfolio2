$(document).ready(function () {
  //scroll to Top
  $(document).on("scroll", function (evt) {
    if ($(window).scrollTop() < 400) {
      $(".upKey").css("display", "none");
    } else {
      $(".upKey").css("display", "block");
    }
  });
  $(".upKey").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  //slow animation
  var $root = $("html, body");
  $('a[href^="#"]').click(function () {
    $root.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );

    return false;
  });

  //navbar opening
  $(".navbar__icons--open").click(function () {
    $(".navbar__menu ul").css("visibility", "visible");
    $(".navbar__menu ul").css("opacity", "1");
    $(".navbar__menu ul").css("transform", "translateY(0px)");
    $(".navbar__icons--open").css("display", "none");
    $(".navbar__icons--close").css("display", "block");
    $("body").css("overflowY", "hidden");

  });
  //navbar closing
  function closeNav() {
    $(".navbar__menu ul").css("visibility", "hidden");
    $(".navbar__menu ul").css("opacity", "0");
    $(".navbar__menu ul").css("transform", "translateY(-100px)");
    $(".navbar__icons--open").css("display", "block");
    $(".navbar__icons--close").css("display", "none");
    $("body").css("overflowY", "visible");

  }
  $(".navbar__icons--close").click(function () {
    closeNav();
  });
    $(".navbar__menu ul li a").click(function () {
        if (window.matchMedia('(max-width: 576px)').matches) {

        closeNav();
        }
      });

 

  //counter for skills
  $(".count").each(function () {
    var $this = $(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.attr("data-stop") },
      {
        duration: 1000,
        easing: "swing",
        step: function (now) {
          $this.text(Math.ceil(now) + "%");
        },
      }
    );
  });
  // Disable inspect element
// $(document).bind("contextmenu",function(e) {
//     e.preventDefault();
//   });
//   $(document).keydown(function(e){
//     if(e.which === 123){
//       return false;
//   }
//   });
});
