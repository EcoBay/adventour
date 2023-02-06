loadSVG();
watchVisibility(".is-visible");

document.querySelector(".hero .button").addEventListener("click", function () {
  document.querySelector(".feature").scrollIntoView({ behavior: "smooth" });
});
