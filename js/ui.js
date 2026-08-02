(function () {
  function setActiveCategoryChip() {
    const hash = window.location.hash ? window.location.hash.replace("#", "") : "";
    const chips = document.querySelectorAll(".chip");

    chips.forEach((chip) => {
      const target = chip.getAttribute("href") || "";
      const active = target && target.replace("#", "") === hash;
      chip.classList.toggle("is-active", active);
    });
  }

  function bindCategoryNav() {
    const chips = document.querySelectorAll(".chip");

    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        setTimeout(setActiveCategoryChip, 20);
      });
    });

    window.addEventListener("hashchange", setActiveCategoryChip);
    setActiveCategoryChip();
  }

  function bindComboCarousel() {
    const carousels = document.querySelectorAll("[data-carousel]");

    carousels.forEach((carousel) => {
      const track = carousel.querySelector("[data-track]");
      const prev = carousel.querySelector(".combo-prev");
      const next = carousel.querySelector(".combo-next");

      if (!track || !prev || !next) return;

      const scrollAmount = () => Math.max(track.clientWidth * 0.82, 300);

      prev.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
      });

      next.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      bindCategoryNav();
      bindComboCarousel();
    });
  } else {
    bindCategoryNav();
    bindComboCarousel();
  }
})();
