const CAROUSEL_TEMPLATE = document.querySelector(".carousel__item");
const CAROUSEL_CONTAINER = document.querySelector(".carousel");
populate(CAROUSEL_CONTAINER, CAROUSEL_TEMPLATE, HOTEL_DATA.slice(0, 4));

let REM_HOTEL = HOTEL_DATA.splice(4);
REM_HOTEL.sort(() => 0.5 - Math.random());
const LISTING_TEMPLATE = document.querySelector(".recommendation__list li");
const LISTING_CONTAINER = document.querySelector(".recommendation__list");
populate(LISTING_CONTAINER, LISTING_TEMPLATE, REM_HOTEL);

REM_HOTEL.sort(() => 0.5 - Math.random());
REM_HOTEL = REM_HOTEL.slice(0, 4);
const RESULT_TEMPLATE = document.querySelector(".summary");
const RESULT_CONTAINER = document.querySelector(".search__results");
populate(RESULT_CONTAINER, RESULT_TEMPLATE, REM_HOTEL);

const CAROUSEL_ITEM = document.querySelectorAll(".carousel__item");
const CAROUSEL_CONTROL = document.querySelectorAll(
  ".carousel__control__selector"
);

let tracker = 0;

function carouselSetActive(i) {
  tracker = i;
  CAROUSEL_CONTROL.forEach((element) => element.classList.remove("active"));
  CAROUSEL_ITEM.forEach((element) => element.classList.remove("active"));
  CAROUSEL_CONTROL[i].classList.add("active");
  CAROUSEL_ITEM[i].classList.add("active");
}

carouselSetActive(0);
CAROUSEL_CONTROL.forEach(function (element, index) {
  element.addEventListener("click", function () {
    carouselSetActive(index);
  });
});

CAROUSEL_CONTAINER.addEventListener("wheel", function (event) {
  event.preventDefault();
  const CHANGE = event.wheelDelta < 0 ? +1 : -1;
  carouselSetActive((tracker + 4 + CHANGE) % 4);
});

setInterval(function () {
  carouselSetActive((tracker + 1) % 4);
}, 5000);
