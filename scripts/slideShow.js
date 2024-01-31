document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      slides.forEach((slide, index) => {
        if (index === slideIndex) {
          slide.classList.add("current");
        } else {
          slide.classList.remove("current");
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 5000);
  });