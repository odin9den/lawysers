$(function () {
  $(".stuff__item-name, .immigration__item-title").on("click", function (
    event
  ) {
    event.preventDefault();
    $(".stuff__item-name.active, .immigration__item-title.active")
      .not(this)
      .removeClass("active");
    $(this).toggleClass("active");
  });

  $(".burger-menu").on("click", function () {
    $(".menu-aside").toggleClass("active");
  });

  $(
    ".intro, .contactform, .business-services, .canadian-immigration, .citizenship, .about-us, .immigration-services"
  ).on("click", function () {
    $(".menu-aside.active").removeClass("active");
    $(this).removeClass("shadow");
  });

  $(".burger-menu").on("click", function () {
    $(
      ".intro, .contactform, .business-services, .canadian-immigration, .citizenship, .about-us, .immigration-services"
    ).toggleClass("shadow");
  });
});
