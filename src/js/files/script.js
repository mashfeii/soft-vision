// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#map")) {
    document.documentElement.classList.add("page-map");
  }
});

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

$(".form .input").each(function(index) {
  $(this).on("change", function(e) {
    if ($(this).val().trim() !== "") {
      $(this).addClass("input--inserted");
    } else {
      $(this).removeClass("input--inserted");
    }
  });
});

if (document.querySelector("#map")) {
  initMap();
}
async function initMap() {
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  const content = document.createElement("div");
  const marker = new ymaps3.YMapMarker(
    {
      coordinates: [30.315, 59.928],
    },
    content,
  );
  content.innerHTML = `<div><img src="../img/icons/location.svg"></div>`;

  const map = new YMap(document.getElementById("map"), {
    location: {
      center: [30.323021, 59.920773],
      zoom: 13,
    },
  });

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());
  map.addChild(marker);
}
