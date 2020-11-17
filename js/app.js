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

  $(".writers-accordion").click(function (event) {
    if (event.target.id.split("-")[0] === "button") {
      $("#book1").attr(
        "src",
        "/img/writers/" + event.target.id.split("-")[1] + "-book1.jpg"
      );
      $("#book2").attr(
        "src",
        "/img/writers/" + event.target.id.split("-")[1] + "-book2.jpg"
      );
    }
  });
});
