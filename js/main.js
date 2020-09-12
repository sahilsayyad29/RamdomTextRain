function createText() {
  let text = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const makeDive = document.createElement("div");
  makeDive.classList.add("makeDiv");

  makeDive.style.left = Math.random() * 100 + "vw";

  makeDive.style.animationDuration = Math.random() * 2 + 3 + "s";
  makeDive.innerText = text[Math.floor(Math.random() * text.length)];

  document.body.appendChild(makeDive);

  setTimeout(() => {
    makeDive.remove();
  }, 5000);
}

setInterval(createText, 300);
