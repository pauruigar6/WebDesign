const initSlider = () => {
  const rows = document.querySelectorAll(".attractions .row");

  rows.forEach((row) => {
    const title = row.querySelector(".row-title").textContent;
    console.log(`Title for this row: ${title}`);

    const imageList = row.querySelector(".slider-wrapper .image-list");
    const scrollbarThumb = row.querySelector(
      ".slider-wrapper .scrollbar-thumb"
    );
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition =
        row
          .querySelector(".slider-wrapper .slider-scrollbar")
          .getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;

        const boundedPosition = Math.max(
          0,
          Math.min(maxThumbPosition, newThumbPosition)
        );
        const scrollPosition =
          (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumb.style.left = `${boundedPosition}px`;
        imageList.scrollLeft = scrollPosition;
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition =
        (scrollPosition / maxScrollLeft) *
        (row.querySelector(".slider-wrapper .slider-scrollbar").clientWidth -
          scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
    };

    imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
    });
  });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
