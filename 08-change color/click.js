function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
const boxes = document.querySelectorAll("body > div");
boxes.forEach((box) => {
  box.addEventListener("click", function () {
    this.style.backgroundColor = getRandomColor();
  });
});
