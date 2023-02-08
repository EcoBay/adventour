/** insert SVG into dom */
function loadSVG(callback) {
  const SVG_ELEMENTS = document.querySelectorAll("svg-element");
  SVG_ELEMENTS.forEach(function (element) {
    const PARENT_ELEMENT = element.parentNode;
    const CLASSNAMES = element.className;

    const XHR_REQUEST = new XMLHttpRequest();

    XHR_REQUEST.open("GET", element.dataset.src);
    XHR_REQUEST.onreadystatechange = function () {
      if (
        XHR_REQUEST.readyState !== XMLHttpRequest.DONE ||
        XHR_REQUEST.status !== 200
      ) {
        if (XHR_REQUEST.status === 0) {
          const IMG = document.createElement("img");
          IMG.setAttribute("src", element.dataset.src);
          IMG.setAttribute("alt", element.dataset.title);
          IMG.setAttribute("class", CLASSNAMES);
          PARENT_ELEMENT.replaceChild(IMG, element);
        }

        return;
      }

      const TEMP_CONTAINER = document.createElement("div");
      TEMP_CONTAINER.innerHTML = XHR_REQUEST.responseText;
      const SVG = TEMP_CONTAINER.firstChild;

      const TITLE = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "title"
      );
      TITLE.innerHTML = element.dataset.title;
      SVG.appendChild(TITLE);

      SVG.setAttribute("class", CLASSNAMES);

      PARENT_ELEMENT.replaceChild(SVG, element);

      if (callback) callback(SVG);
    };
    XHR_REQUEST.send();
  });
}
