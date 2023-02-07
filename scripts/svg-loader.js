/** insert SVG into dom */
function loadSVG(callback) {
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

      const TEMP_CONTAINER = document.createElement("div");
      TEMP_CONTAINER.innerHTML = XHR_REQUEST.responseText;
      const SVG = TEMP_CONTAINER.firstChild;

      const TITLE = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "title"
      );
      TITLE.innerHTML = element.dataset.title;
      SVG.appendChild(TITLE);

      const CLASSNAMES = element.className;
      SVG.setAttribute("class", CLASSNAMES);

      const PARENT_ELEMENT = element.parentNode;
      PARENT_ELEMENT.replaceChild(SVG, element);

      if (callback) callback(SVG);
    };
    XHR_REQUEST.send();
  });
}
