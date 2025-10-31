document.addEventListener("DOMContentLoaded", () => {
  const carouselItems = document.getElementById("carousel-items");

  // Check if the required elements exist
  if (!carouselItems) {
    console.error("Carousel items container not found.");
    return; // Stop script execution if the main container is missing
  }

  const items = carouselItems.children;
  const totalItems = items.length;
  let currentIndex = 0;

  // Configuration for the auto-slide
  const intervalTime = 4000; // 4 seconds
  let slideInterval;

  /**
   * Updates the carousel position using CSS transform.
   */
  function updateCarousel() {
    // Calculates the percentage to shift the flex container
    const offset = -currentIndex * 100;
    carouselItems.style.transform = `translateX(${offset}%)`;
  }

  /**
   * Moves to the next slide, wrapping to the start.
   */
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  /**
   * Starts the automatic sliding.
   */
  function startAutoSlide() {
    // Clear any existing interval to ensure only one is running
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  // --- Initialization ---

  // 1. Start the automatic slide show
  startAutoSlide();
});

// best sellers
// best sellers slideshow
const carousel = document.getElementById("carousel");
const slides = carousel.children;
const slideWidth = slides[0].offsetWidth + 32; // card width + gap
const totalSlides = slides.length;
let currentIndex = 0;

setInterval(() => {
  currentIndex++;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  carousel.scrollTo({
    left: currentIndex * slideWidth,
    behavior: "smooth",
  });
}, 3000); // 3 seconds per slide
