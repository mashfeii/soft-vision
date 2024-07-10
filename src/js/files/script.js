// Page with map has no margin to footer
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#map")) {
    document.documentElement.classList.add("page-map");
  }
});

// Sliders initialization
$(".expectations__slider").slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  centerMode: false,
  variableWidth: true,
});
$(".clients--default .clients__slider").slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  appendArrows: ".clients__navigation",
});
$(".clients--images .clients__slider").slick({
  arrows: true,
  dots: false,
  infinite: true,
  variableWidth: true,
  speed: 800,
  appendArrows: ".clients__navigation",
});

// Input class for placeholder
$(".form .input").each(function() {
  $(this).on("change", function() {
    if ($(this).val().trim() !== "") {
      $(this).addClass("input--inserted");
    } else {
      $(this).removeClass("input--inserted");
    }
  });
});
// Image change on spoller item click
if ($(".fields").length) {
  const images = $(".fields__image img");

  $(".fields .spollers__title").each(function() {
    $(this).on("click", function() {
      const item = $(this).closest(".spollers__item");
      const index = [...item[0].parentElement.children].indexOf(item[0]);

      images.each(function() {
        $(this).removeClass("_active");
      });

      $(images[index]).addClass("_active");
    });
  });
}
