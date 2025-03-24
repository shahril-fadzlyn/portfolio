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

  document.querySelectorAll("#contact input, #contact textarea, #contact button")
    .forEach((element) => {
      observer.observe(element);
    });
});

////////////////////////////////////

// Function to open the modal
function openModal(projectModal) {
  const modal = document.getElementById("projectModal" + projectModal);

  console.log("Opening modal: " + projectModal); // Debugging statement
  if (!modal) {
    console.error("Modal not found: " + projectModal); // Debugging statement
    return;
  }

  modal.style.display = "block";
  document.body.classList.add("modal-open");

  const projectContent = document.querySelector(
    "#projectModal" + projectModal + ".project-container"
  );
  if (projectContent) {
    projectContent.scrollTop = 0;
  }

  const modalBackground = modal.querySelector(".modal-background");
  modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
      closeModal(projectModal);
    }
  });

  const closeButton = modal.querySelector(".close");
  closeButton.addEventListener("click", function () {
    closeModal(projectModal);
  });
}

function closeModal(projectModal) {
  const modal = document.getElementById("projectModal" + projectModal);
  const modalContent = modal.querySelector(".modal-content");
  const modalBackground = modal.querySelector(".modal-background");

  modalBackground.style.animation = "fadeOut 0.3s forwards";
  modalContent.style.animation = "slideDownModal 0.3s forwards"; // Apply slide down animation

  setTimeout(() => {
    modal.style.display = "none";
    modalContent.style.animation = ""; // Reset animation
    modalBackground.style.animation = "";
    document.body.classList.remove("modal-open");
  }, 200);
}

/////////////////////////////////////////

// Select all project containers
// const projects = document.querySelectorAll(".project-description");

// // Loop through each project
// projects.forEach((project) => {
//   // Get the description paragraph of the project
//   const description = project.querySelector(".description");

//   // Remove punctuation marks and split the description into words
//   const words = description.textContent.replace(/[^\w#]/g, " ").split(/\s+/);

//   // Array to store unique tags
//   const tags = [];

//   // Loop through each word in the description
//   words.forEach((word) => {
//     // Check if the word starts with '#'
//     if (word.startsWith("#")) {
//       // Remove '#' from the word and add it to the tags array if it's not already present
//       const tag = word.slice(1);
//       if (!tags.includes(tag)) {
//         tags.push(tag);
//       }
//     }
//   });

//   // Create and append tag elements to the project
//   const tagsContainer = document.createElement("div");
//   tagsContainer.classList.add("tags");
//   tags.forEach((tag) => {
//     const tagElement = document.createElement("div");
//     tagElement.classList.add("tag");
//     tagElement.textContent = tag;
//     tagsContainer.appendChild(tagElement);
//   });
//   project.appendChild(tagsContainer);
// });

/////////////////////////////////

document.getElementById("my-form").addEventListener("submit", function (event) {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Check if name is empty
  if (!nameInput.value || !/\S+/.test(nameInput.value)) {
    alert("Please enter your name.");
    event.preventDefault();
    return;
  }

  // Check if email is valid format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return;
  }

  // Check if message is empty
  if (messageInput.value === "") {
    alert("Please enter a message.");
    event.preventDefault();
    return;
  }

  // Open a new tab or window to display the response
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://formspree.io/f/xyyrzvpq", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Form submitted successfully:", xhr.responseText);

      // Open a new tab or window to display the response
      const responseText = JSON.parse(xhr.responseText).message;
      alert(responseText);
    } else {
      console.error("Error submitting form:", xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error("There was an error sending the form.");
  };

  // Send the form data as a JSON object
  const formData = new FormData(this);
  xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
});

////////////////////////////
function openImage(imagePath) {
  window.open(imagePath, "_blank");
}

////////////////////////////

const seeMoreButtons = document.querySelectorAll(".see-more");

seeMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contentWrapper = button.parentElement; // Get the parent wrapper
    contentWrapper.classList.toggle("expanded"); // Toggle expanded class

    // Update button text and data attribute
    const isCurrentlyExpanded = contentWrapper.classList.contains("expanded");
    button.textContent = isCurrentlyExpanded ? "See less" : "See more";
    button.dataset.seeMore = !isCurrentlyExpanded; // Update data attribute
  });
});

////////////////////////////////////////////////

