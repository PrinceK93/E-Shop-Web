document.addEventListener("DOMContentLoaded", () => {
  console.log("E-Shop frontend is active");
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all slider containers
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((sliderContainer) => {
    const track = sliderContainer.querySelector(".slider-track");
    const prevBtn = sliderContainer.querySelector(".prev");
    const nextBtn = sliderContainer.querySelector(".next");

    // Width of one product card (including margin if any)
    const card = track.querySelector(".card");
    const cardWidth = card.offsetWidth + 16; // Adjust 16px if you have margins

    // How many cards to move per click
    const cardsPerScroll = 4;

    // Scroll amount
    const scrollAmount = cardWidth * cardsPerScroll;

    // Button listeners
    prevBtn.addEventListener("click", () => {
      track.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    });

    nextBtn.addEventListener("click", () => {
      track.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  });
});