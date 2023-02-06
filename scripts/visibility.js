/** A function that adds a visible class to elements specified by selector */
function watchVisibility(selector) {
  const OBSERVER_OPTION = { threshold: 1.0 };
  const INTERSECTION_OBSERVER = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, OBSERVER_OPTION);

  const ELEMENTS = document.querySelectorAll(".is-visible");
  ELEMENTS.forEach((element) => {
    INTERSECTION_OBSERVER.observe(element);
  });
}
