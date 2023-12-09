const textEl = document.getElementById("seville");
const text = ".SEVILLE";
let idx = 0;
const speed = 10;
const fadeInSpeed = 100; // Velocidad de la aparición

writeText();

function writeText() {
  if (idx <= text.length) {
    textEl.innerText = text.slice(0, idx);
    textEl.style.opacity = (idx / text.length).toFixed(2); // Establece la opacidad gradualmente
    idx++;

    setTimeout(() => {
      requestAnimationFrame(writeText);
    }, fadeInSpeed);
  }
}
