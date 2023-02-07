loadSVG();

const FORM = document.querySelector("form");
FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  const PASSWORD = document.getElementById("password");
  const HASH = b64_md5(PASSWORD.value);
  PASSWORD.value = HASH;
  FORM.submit();
});
