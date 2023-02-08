function buildNode(blueprint, data) {
  const CLONE = blueprint.cloneNode(true);
  const TEMP = document.createElement("div");
  TEMP.appendChild(CLONE);

  const IMAGES = TEMP.querySelectorAll(".image");
  IMAGES.forEach((image) => {
    image.setAttribute("alt", "A image of " + data.title);
    image.setAttribute("src", data.img);
  });

  const LINKS = TEMP.querySelectorAll(".link");
  LINKS.forEach((link) => {
    const URI = encodeURI("details.html?title=" + data.title);
    link.setAttribute("href", URI);
  });

  const ADDRESSES = TEMP.querySelectorAll(".address");
  ADDRESSES.forEach((address) => {
    address.innerText = data.address;
  });

  const TITLES = TEMP.querySelectorAll(".title");
  TITLES.forEach((title) => {
    title.innerText = data.title;
  });

  return CLONE;
}

function populate(parentNode, blueprint, data) {
  const NODES = data.map((value) => buildNode(blueprint, value));
  parentNode.removeChild(blueprint);
  NODES.forEach((node) => {
    parentNode.appendChild(node);
  });
}
