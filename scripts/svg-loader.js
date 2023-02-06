/** insert SVG into dom */
function loadSVG() {
  const SVG_ELEMENTS = document.querySelectorAll("svg-element");
  SVG_ELEMENTS.forEach(function (element) {
    const XHR_REQUEST = new XMLHttpRequest();

    XHR_REQUEST.open("GET", element.dataset.src);
    XHR_REQUEST.onreadystatechange = function () {
      if (
        XHR_REQUEST.readyState !== XMLHttpRequest.DONE ||
        XHR_REQUEST.status !== 200
      )
        return;

      const CONTAINER = document.createElement("div");
      CONTAINER.innerHTML = XHR_REQUEST.responseText;
      const CLASSNAMES = element.className;
      CONTAINER.setAttribute("class", CLASSNAMES);

      const PARENT_ELEMENT = element.parentNode;
      PARENT_ELEMENT.replaceChild(CONTAINER, element);
    };
    XHR_REQUEST.send();
  });
}
