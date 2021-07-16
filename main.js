document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

ScrollReveal().reveal('.inicio');
ScrollReveal().reveal('.cartas', { delay: 500 });
