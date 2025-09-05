// menu toggle
const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });


//   <!-- Typed.js -->
 
  
    var typed = new Typed("#typed", {
      strings: ["Web Developer", "Frontend Developer", "Full Stack Developer"],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

// card animation on scroll
    const cards = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 0.8s ease-out";
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));