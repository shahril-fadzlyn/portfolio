document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-y-full");
    hamburger.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");

  sidebar.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-y-full");
    hamburger.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scrolling
  const navLinks = document.querySelectorAll(".nav-link");
  const hireLinks = document.querySelectorAll(".hire-link");
  const homeLink = document.querySelectorAll(".home-link");

  [...navLinks, ...hireLinks, ...homeLink].forEach((link) => {
    // Spread both NodeLists into a single array
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const sideBarLinks = document.querySelectorAll(".sidebar-link");

  sideBarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});