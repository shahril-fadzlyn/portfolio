document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-y-full");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");

  sidebar.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-y-full");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const skills = document.querySelectorAll(".progress");

  window.addEventListener("scroll", () => {
    skills.forEach((skill) => {
      if (isInViewport(skill)) {
        skill.style.width = skill.getAttribute("data-progress");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Existing code...

  // Smooth Scrolling
  const navLinks = document.querySelectorAll(".nav-link");
  const hireLinks = document.querySelectorAll(".hire-link");

  navLinks,
    hireLinks.forEach((link) => {
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

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".table-row");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let delay = 0;
          rows.forEach((row) => {
            if (row === entry.target) {
              row.style.transitionDelay = `${delay}s`;
              row.classList.add("visible");
              delay += 0.2; // Delay increment for each row
            }
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.7 }
  );

  rows.forEach((row) => {
    observer.observe(row);
  });
});
