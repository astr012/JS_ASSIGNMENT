// Change page background color
document.getElementById("colorBtn").addEventListener("click", function () {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = color;
});

// Double click image to zoom
const img = document.getElementById("zoomImg");
img.addEventListener("dblclick", function () {
  img.classList.toggle("zoomed");
});

// Key logger
const input = document.getElementById("keyInput");
const out = document.getElementById("outputText");
input.addEventListener("keydown", function (e) {
  out.textContent = "You pressed: " + e.key;
});
