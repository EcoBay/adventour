const OBSERVER_OPTION = { threshold: 0.25 };
const INTERSECTION_OBSERVER = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, OBSERVER_OPTION);

function watchVisibilityElement(element) {
  console.log(element);
  INTERSECTION_OBSERVER.observe(element);
}

/** A function that adds a visible class to elements specified by selector */
function watchVisibility(selector) {
  const ELEMENTS = document.querySelectorAll(selector);
  ELEMENTS.forEach((element) => {
    watchVisibilityElement(element);
  });
}
