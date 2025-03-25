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

