/* ===== SET CURRENT YEAR IN FOOTER ===== */
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* ===== MOBILE MENU TOGGLE ===== */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navLinks_items = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.style.color = navLinks.classList.contains("active") ? "#facc15" : "#fff";
});

// Close menu when clicking on a link
navLinks_items.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.style.color = "#fff";
  });
});

/* ===== THEME TOGGLE (Dark/Light Mode) ===== */
const themeToggle = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem("theme") || "dark";
htmlElement.setAttribute("data-theme", currentTheme);
if (currentTheme === "light") {
  document.body.classList.add("light-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener("click", () => {
  const theme = document.body.classList.contains("light-mode") ? "dark" : "light";
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", theme);
  themeToggle.innerHTML = theme === "light" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

/* ===== TYPED.JS INITIALIZATION ===== */
const typed = new Typed("#typed", {
  strings: [
    "Web Developer 💻",
    "Frontend Expert 🎨",
    "Full Stack Developer 🚀",
    "Problem Solver 🧠",
    "Creative Developer ✨"
  ],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  showCursor: false
});

/* ===== SCROLL ANIMATIONS WITH INTERSECTION OBSERVER ===== */
const cards = document.querySelectorAll("[data-animate]");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));

/* ===== NAVBAR PROGRESS BAR ===== */
const progressBar = document.querySelector(".navbar-progress-bar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  progressBar.style.width = scrollPercent + "%";
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks_items.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

/* ===== SMOOTH SCROLL BEHAVIOR ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  });
});

/* ===== PARALLAX EFFECT FOR HERO SECTION ===== */
const heroSection = document.querySelector(".hero");
const heroBgAnimation = document.querySelector(".hero-bg-animation");

window.addEventListener("scroll", () => {
  if (window.scrollY < window.innerHeight) {
    const scrollPosition = window.scrollY;
    if (heroBgAnimation) {
      heroBgAnimation.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  }
});

/* ===== SCROLL TO TOP BUTTON ===== */
const createScrollToTopButton = () => {
  const button = document.createElement("button");
  button.innerHTML = '<i class="fas fa-arrow-up"></i>';
  button.className = "scroll-to-top";
  button.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #38bdf8, #a78bfa);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(56, 189, 248, 0.4);
    transition: all 0.3s ease;
  `;

  document.body.appendChild(button);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      button.style.display = "flex";
    } else {
      button.style.display = "none";
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.1)";
    button.style.boxShadow = "0 8px 25px rgba(56, 189, 248, 0.6)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
    button.style.boxShadow = "0 4px 15px rgba(56, 189, 248, 0.4)";
  });
};

createScrollToTopButton();

/* ===== SKILL CARDS HOVER ANIMATION ===== */
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.animation = "none";
  });

  card.addEventListener("mouseleave", () => {
    card.style.animation = "bounce 2s ease-in-out infinite";
  });
});

/* ===== FORM VALIDATION & SUBMISSION ===== */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = contactForm.querySelector("input[name='name']").value.trim();
    const email = contactForm.querySelector("input[name='email']").value.trim();
    const phone = contactForm.querySelector("input[name='phone']").value.trim();
    const message = contactForm.querySelector("textarea[name='message']").value.trim();

    if (!name || !email || !phone || !message) {
      showNotification("Please fill in all fields", "error");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showNotification("Please enter a valid email", "error");
      return false;
    }

    showNotification("Thanks! Your message has been sent successfully. 😊", "success");
    contactForm.reset();

    setTimeout(() => {
      contactForm.submit();
    }, 1800);
  });
}

/* ===== NOTIFICATION SYSTEM ===== */
const showNotification = (message, type = "info") => {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    padding: 15px 20px;
    background: ${type === "success" ? "#4ade80" : type === "error" ? "#ff4757" : "#38bdf8"};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    animation: slideInRight 0.4s ease-out;
    font-weight: 600;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideInRight 0.4s ease-out reverse";
    setTimeout(() => notification.remove(), 400);
  }, 3000);
};

/* ===== PAGE LOAD ANIMATION ===== */
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.5s ease-out";
});

/* ===== PERFORMANCE: LAZY LOADING IMAGES ===== */
if ("IntersectionObserver" in window) {
  const images = document.querySelectorAll("img[data-src]");
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener("keydown", (e) => {
  // Ctrl/Cmd + K to focus on search or menu
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    menuToggle.click();
  }

  // Escape to close mobile menu
  if (e.key === "Escape") {
    navLinks.classList.remove("active");
  }
});

/* ===== RANDOM BACKGROUND ANIMATION ===== */
const animateBackground = () => {
  const colors = ["rgba(56, 189, 248, 0.1)", "rgba(167, 139, 250, 0.1)", "rgba(250, 204, 21, 0.05)"];
  let colorIndex = 0;

  setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    // Optional: add background color transitions
  }, 5000);
};

animateBackground();

/* ===== CERTIFICATE GRID ===== */
// Certificate grid uses CSS Grid for layout - no JavaScript needed
// All certificates display responsively with CSS animations

/* ===== CONSOLE MESSAGE ===== */
console.log("%c🚀 Welcome to Karunendra's Portfolio!", "color: #38bdf8; font-size: 20px; font-weight: bold;");
console.log("%cMade with ❤️ using HTML, CSS & JavaScript", "color: #facc15; font-size: 14px;");
console.log("%cLet's build something amazing together! 💪", "color: #a78bfa; font-size: 14px;");

/* ===== FOOTER FUNCTIONALITY ===== */
// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll to top from footer button
const scrollToTopFooter = document.getElementById('scrollToTopFooter');
if (scrollToTopFooter) {
  scrollToTopFooter.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Show/hide scroll to top button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight) {
      scrollToTopFooter.classList.add('show');
    } else {
      scrollToTopFooter.classList.remove('show');
    }
  });
}

// Social links hover animation
const socialLinks = document.querySelectorAll('.social-link-item');
socialLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    this.style.animation = 'none';
    setTimeout(() => {
      this.style.animation = 'slideInRight 0.3s ease';
    }, 10);
  });
});