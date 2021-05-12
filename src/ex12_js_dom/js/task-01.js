let images = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg"];

function slider(images) {
  let slide = document.querySelector(".slide");
  let current = 0;
  slide.setAttribute("src", images[current]);

  document.addEventListener("click", (event) => {
    if (event.target.dataset.button === "previous") previousSlide();
    if (event.target.dataset.button === "next") nextSlide();
  });

  function nextSlide() {
    if (current === images.length - 1) {
      current = 0;
    } else {
      current++;
    }
    slide.setAttribute("src", images[current]);
    animation();
  }

  function previousSlide() {
    if (current === 0) {
      current = images.length - 1;
    } else {
      current--;
    }
    slide.setAttribute("src", images[current]);
    animation();
  }
  function animation() {
    slide.animate([{ opacity: "0" }, { opacity: "1" }], 500);
  }
}
slider(images);
