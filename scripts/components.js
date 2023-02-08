loadSVG();

const SEARCH = document.querySelector(".navbar .search");
const SEARCH_BOX = document.querySelector(".navbar .search__box");
const SEARCH_ICON = document.querySelector(".navbar .search__icon");
SEARCH_BOX.value = "";
SEARCH_BOX.addEventListener("input", function () {
  if (SEARCH_BOX.value === "") SEARCH.classList.remove("active");
  else SEARCH.classList.add("active");
});
SEARCH_ICON.addEventListener("click", function () {
  SEARCH.classList.remove("active");
  SEARCH_BOX.value = "";
});

RESULTS_BUTTONS = document.querySelectorAll(".search__results__tabs__button");
RESULTS_BUTTONS.forEach(function (button) {
  button.addEventListener("click", function () {
    RESULTS_BUTTONS.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");
  });
});
