function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  document.querySelector(".color").textContent = randomColor;
  document.querySelector("body").style.backgroundColor = randomColor;
});
