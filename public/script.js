document.addEventListener("DOMContentLoaded", function () {
  const scrolldiv = document.querySelector(".scrolldiv");
  const previousBtn = document.querySelector(".previous");
  const nextBtn = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");

  const scrollAmount = 350; 
  let currentSlide = 0;

  nextBtn.addEventListener("click", function () {
    currentSlide++;
    if (currentSlide >= dots.length) {
      currentSlide = 0;
    }
    scrollToSlide(currentSlide);
  });

  previousBtn.addEventListener("click", function () {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = dots.length - 1;
    }
    scrollToSlide(currentSlide);
  });

  function scrollToSlide(slideIndex) {
    const scrollPosition = scrollAmount * slideIndex;
    scrolldiv.scroll({
      left: scrollPosition,
      behavior: "smooth",
    });
    setActiveDot(slideIndex);
  }

  function setActiveDot(slideIndex) {
    dots.forEach((dot, index) => {
      if (index === slideIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }
});
