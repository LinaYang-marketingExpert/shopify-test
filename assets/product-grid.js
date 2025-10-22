document.addEventListener("DOMContentLoaded", () => {
    const showBtn = document.getElementById("show-more");
    const cards = document.querySelectorAll(".product-card");
    const cardsWrapper = document.getElementById("cards-wrapper");
  
    // Show first 4 on mobile
    const mobileLimit = 4;
    if (window.innerWidth < 768 && cards.length > mobileLimit) {
      cards.forEach((card, index) => {
        if (index >= mobileLimit) card.classList.add("hidden");
      });
  
      showBtn.addEventListener("click", () => {
        cards.forEach(card => card.classList.remove("hidden"));
        showBtn.classList.add("hidden");
      });
    }
  
    // Hover image swap
    cards.forEach(card => {
      const primary = card.querySelector(".primary");
      const secondary = card.querySelector(".secondary");
      card.addEventListener("mouseenter", () => secondary.style.opacity = "1");
      card.addEventListener("mouseleave", () => secondary.style.opacity = "0");
    });
  });
  