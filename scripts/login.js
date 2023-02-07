loadSVG();

const URL_PARAMS = new URLSearchParams(window.location.search);
const PASSED_NAME = URL_PARAMS.get("name");
const PASSED_EMAIL = URL_PARAMS.get("email");
const PASSED_HASH = URL_PARAMS.get("password");

const FORM = document.querySelector("form");
const EMAIL = document.getElementById("email");
const PASSWORD = document.getElementById("password");
const NAME = PASSED_NAME || "Anonymous";

function submit() {
  NAME_ELEMENT = document.createElement("input");
  NAME_ELEMENT.setAttribute("name", "name");
  NAME_ELEMENT.setAttribute("value", NAME);
  FORM.appendChild(NAME_ELEMENT);
  FORM.removeChild(PASSWORD);
  FORM.removeChild(EMAIL);

  FORM.submit();
}

FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log({ URL_PARAMS, PASSED_HASH, PASSED_EMAIL });
  if (EMAIL.value === "" || PASSWORD.value === "") return;
  if (PASSED_HASH === null || PASSED_EMAIL === null) submit();

  const HASH = b64_md5(PASSWORD.value);
  if (PASSED_EMAIL === EMAIL.value && PASSED_HASH == HASH) submit();
  else FORM.classList.add("invalid");
});
