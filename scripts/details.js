const URL_PARAMS = new URLSearchParams(window.location.search);
const TITLE = URL_PARAMS.get("title") || HOTEL_DATA[0].title;
document.title = TITLE + " | Adventour";

const DATA = HOTEL_DATA.find(({ title }) => title === TITLE);
const DETAIL_TEMPLATE = document.querySelector(".details");
const DETAIL_NODE = buildNode(DETAIL_TEMPLATE, DATA);
DETAIL_TEMPLATE.parentNode.replaceChild(DETAIL_NODE, DETAIL_TEMPLATE);

const REM_HOTEL = HOTEL_DATA.filter((v) => v.title !== TITLE);
const LISTING_TEMPLATE = document.querySelector(".recommendation__list li");
const LISTING_CONTAINER = document.querySelector(".recommendation__list");
populate(LISTING_CONTAINER, LISTING_TEMPLATE, REM_HOTEL);

REM_HOTEL.sort(() => 0.5 - Math.random());
const RESULT_TEMPLATE = document.querySelector(".summary");
const RESULT_CONTAINER = document.querySelector(".search__results");
populate(RESULT_CONTAINER, RESULT_TEMPLATE, REM_HOTEL);

loadSVG();

const BUTTON = document.querySelector(".details__booking__book");
BUTTON.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Reservation placeed succesfully");
});
