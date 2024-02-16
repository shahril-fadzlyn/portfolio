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
      } else {
        skill.style.width = "0"; // Reset width when out of view
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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          table.classList.add("visible");
          let delay = 0.2; // Start after table animation
          rows.forEach((row) => {
            row.style.transitionDelay = `${delay}s`;
            row.classList.add("visible");
            delay += 0.05; // Delay increment for each row
          });
        } else {
          table.classList.remove("visible");
          rows.forEach((row) => {
            row.style.transitionDelay = "0s";
            row.classList.remove("visible");
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    },
    {
      threshold: 0.5, // Adjust as needed to trigger when half the card is in view
    }
  );

  document.querySelectorAll(".portfolio-card-mobile").forEach((card) => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
          entry.target.classList.remove("animate-fadeOutDown");
        } else {
          entry.target.classList.add("animate-fadeOutDown");
          entry.target.classList.remove("animate-fadeInUp");
        }
      });
    },
    {
      threshold: 0.5,
      rootMargin: "0px",
    }
  );

  document
    .querySelectorAll("#contact input, #contact textarea, #contact button")
    .forEach((element) => {
      observer.observe(element);
    });
});

////////////////////////////////////

// Function to open the modal
function openModal() {
  // Show the modal
  const modal = document.getElementById("projectModal");
  modal.style.display = "block";
  modal.style.height = "100%";

  const projectContent = document.querySelector(".project-container");
  projectContent.scrollTop = 0;

  // Smoothly change the background color to black
  document.querySelector(".modal-background").style.backgroundColor =
    "rgba(0, 0, 0, 0.5)";

  // Add a class to the body to prevent scrolling
  document.body.classList.add("modal-open");

  // Add event listener to close modal when clicking outside of modal content
  document.querySelector(".modal").addEventListener("click", closeModalOutside);
}

function closeModal() {
  // Hide the modal
  const modalContent = document.querySelector(".modal-content");
  modalContent.style.animation = "slideDownModal 0.3s forwards"; // Apply slide down animation
  modalContent.style.pointerEvents = "none"; // Disable pointer events during animation

  setTimeout(() => {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
    modalContent.style.animation = ""; // Reset animation
    modalContent.style.pointerEvents = ""; // Reset pointer events
    document.body.classList.remove("modal-open");
  }, 300);
}

// Function to close modal when clicking outside of modal content
function closeModalOutside(event) {
  if (event.target === document.querySelector(".modal-background")) {
    closeModal();
  }
}
