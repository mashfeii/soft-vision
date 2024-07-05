// Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// Подключение списка активных модулей
// import { flsModules } from "./modules.js";

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

