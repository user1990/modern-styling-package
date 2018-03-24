const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const selectPlanButtons = document.querySelectorAll(".plan__select");
const modalNoButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
//const ctaButton = document.querySelector(".main-nav__item--cta");

// Display modal
selectPlanButtons.forEach(button =>
  button.addEventListener("click", () => {
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
    }, 10);
  })
);

// Close modal
closeModal = () => {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 500);
};

backdrop.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

// Togle navbar
toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(() => {
    backdrop.classList.add("open");
  }, 10);
});

// Animate cta button
/* ctaButton.addEventListener("animationstart", function(e) {
  console.log("Animatation started", e);
});

ctaButton.addEventListener("animationend", e => {
  console.log("Animatation started", e);
});

ctaButton.addEventListener("animationiteration", e => {
  console.log("Animatation started", e);
}); */
