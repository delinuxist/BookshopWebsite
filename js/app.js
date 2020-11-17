$(document).ready(function () {
  lightbox.option({
    wrapAround: true,
  });

  $(window).scroll(function () {
    let postion = $(this).scrollTop();
    if (postion >= 350) {
      $(".gallery").addClass("change");
    } else {
      $(".gallery").removeClass("change");
    }
  });
});
