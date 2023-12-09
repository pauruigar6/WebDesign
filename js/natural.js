document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const localImagesPath = "../assets/natural-images/";
  const rows = 5;
  let images = [
    "natural1-img.jpeg",
    "natural2-img.jpeg",
    "natural3-img.jpeg",
    "natural4-img.jpeg",
    "natural5-img.jpeg",
    "natural6-img.jpeg",
    "natural7-img.jpeg",
    "natural8-img.jpeg",
    "natural9-img.jpeg",
    "natural10-img.jpeg",
    "natural11-img.jpeg",
    "natural12-img.jpeg",
    "natural13-img.jpeg",
    "natural14-img.jpeg",
    "natural15-img.jpeg",
  ];

  let currentIndex = 0;
  let rowCount = 0;

  while (rowCount < rows && currentIndex < images.length) {
    const row = document.createElement("div");
    row.className = "row";

    for (let i = 0; i < 3; i++) {
      const img = document.createElement("img");
      img.src = `${localImagesPath}${images[currentIndex]}`;
      img.className = "appear";
      row.appendChild(img);
      currentIndex = (currentIndex + 1) % images.length;
    }

    container.appendChild(row);
    rowCount++;
  }

  function resetImages() {
    currentIndex = 0;
    rowCount = 0;
  }

  window.addEventListener("scroll", checkImages);

  checkImages();

  function checkImages() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    const images = document.querySelectorAll(".appear");

    images.forEach((image) => {
      const imageTop = image.getBoundingClientRect().top;

      if (imageTop < triggerBottom) {
        image.classList.add("visible");
      } else {
        image.classList.remove("visible");
      }
    });
  }
});
