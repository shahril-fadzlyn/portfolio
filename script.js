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
  // Smooth Scrolling
  const navLinks = document.querySelectorAll(".nav-link");
  const hireLinks = document.querySelectorAll(".hire-link");

  [...navLinks, ...hireLinks].forEach((link) => {
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

  // Repeat for sidebar links if necessary
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
  const section = document.getElementById("software-proficiency");
  const table = section.querySelector("table");
  const rows = section.querySelectorAll(".table-row");
  let isTableVisible = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isTableVisible) {
          table.classList.add("visible");
          isTableVisible = true;

          let delay = 0.5; // Start after table animation
          rows.forEach((row) => {
            row.style.transitionDelay = `${delay}s`;
            row.classList.add("visible");
            delay += 0.3; // Delay increment for each row
          });

          observer.disconnect(); // We don't need to observe anymore
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelector(".portfolio-image-mobile")
            .classList.add("in-view");
          entry.target
            .querySelector(".portfolio-info-mobile")
            .classList.add("visible");
        } else {
          entry.target
            .querySelector(".portfolio-image-mobile")
            .classList.remove("in-view");
          entry.target
            .querySelector(".portfolio-info-mobile")
            .classList.remove("visible");
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 0.5,
    }
  );

  // Observe all portfolio-card elements
  document.querySelectorAll(".portfolio-card-mobile").forEach((card) => {
    observer.observe(card);
  });
});
