document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // Scroll reveal
  // ---------------------------
  const elements = document.querySelectorAll("section, .project-card, .skill-card");
  elements.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else if (entry.intersectionRatio === 0) {
          entry.target.classList.remove("active");
        }
      });
    },
    {
      threshold: [0, 0.15],
      rootMargin: "0px 0px -10% 0px",
    }
  );

  elements.forEach((el) => revealObserver.observe(el));

  // ---------------------------
  // Navbar active link on scroll
  // ---------------------------
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sectionsForNav = Array.from(navLinks)
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((a) => a.classList.remove("active"));

        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      });
    },
    { threshold: 0.35 }
  );

  sectionsForNav.forEach((sec) => navObserver.observe(sec));

  // ---------------------------
  // Theme toggle (with saved preference)
  // ---------------------------
  const toggleBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (toggleBtn) {
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      toggleBtn.textContent = "☀️";
    } else {
      toggleBtn.textContent = "🌙";
    }

    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      const isDark = document.body.classList.contains("dark");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggleBtn.textContent = isDark ? "☀️" : "🌙";
    });
  }

  // ---------------------------
  // Font size controls (multi-step)
  // ---------------------------
  const increaseBtn = document.getElementById("increaseText");
  const decreaseBtn = document.getElementById("decreaseText");

  let currentSize = parseInt(getComputedStyle(document.documentElement).fontSize, 10) || 16;
  const minSize = 14;
  const maxSize = 22;

  if (increaseBtn && decreaseBtn) {
    increaseBtn.addEventListener("click", () => {
      if (currentSize < maxSize) {
        currentSize += 1;
        document.documentElement.style.fontSize = currentSize + "px";
      }
    });

    decreaseBtn.addEventListener("click", () => {
      if (currentSize > minSize) {
        currentSize -= 1;
        document.documentElement.style.fontSize = currentSize + "px";
      }
    });
  }


  // ---------------------------
  // Project filter
  // ---------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const noProjectsMessage = document.getElementById("noProjectsMessage");

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filterValue = button.dataset.filter;

        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        let visibleCount = 0;

        projectCards.forEach((card) => {
          const category = card.dataset.category;

          if (filterValue === "all" || category === filterValue) {
            card.style.display = "flex";
            visibleCount++;
          } else {
            card.style.display = "none";
          }
        });

        if (noProjectsMessage) {
          noProjectsMessage.style.display = visibleCount === 0 ? "block" : "none";
        }
      });
    });
  }

  // ---------------------------
  // Contact form validation
  // ---------------------------
  const contactForm = document.querySelector(".contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const formMessage = document.getElementById("formMessage");

  if (contactForm && nameInput && emailInput && messageInput && formMessage) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameValue = nameInput.value.trim();
      const emailValue = emailInput.value.trim();
      const messageValue = messageInput.value.trim();

      if (!nameValue || !emailValue || !messageValue) {
        formMessage.textContent = "Please fill in all fields before sending your message.";
        formMessage.className = "form-message error";
        return;
      }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailValue)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "form-message error";
        return;
      }

      formMessage.textContent = "Your message has been sent successfully!";
      formMessage.className = "form-message success";

      contactForm.reset();
    });
  }

// ---------------------------
// Dynamic greeting
// ---------------------------
const greeting = document.getElementById("greeting");

if (greeting) {
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good morning";
  } else if (hour < 18) {
    message = "Good afternoon";
  } else {
    message = "Good evening";
  }

  greeting.textContent = message;
}

// ---------------------------
// GitHub API Projects
// ---------------------------
async function loadGitHubRepos() {
  const container = document.getElementById("github-projects");

  try {
    const response = await fetch("https://api.github.com/users/Fatimah-Alshehab/repos");
    const repos = await response.json();

    repos.slice(3, 7).forEach(repo => {
      const card = document.createElement("div");
      card.className = "glass-box project-card";

      card.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || "No description available"}</p>

      <div class="project-tags">
        <span class="tag purple">${repo.language || "Code"}</span>
        <span class="tag purple">GitHub</span>
      </div>

      <a href="${repo.html_url}" target="_blank">View Project</a>
    `;

      container.appendChild(card);
    });

  } catch (error) {
    container.innerHTML = "<p>Failed to load GitHub projects.</p>";
  }
}
loadGitHubRepos();

// ---------------------------
// Visitor Timer
// ---------------------------
let seconds = 0;

setInterval(() => {
  seconds++;

  const timer = document.getElementById("timer");
  if (timer) {
    timer.textContent = `⏱ You’ve been here for ${seconds}s`;
  }
}, 1000);

});

