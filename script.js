document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close nav menu when clicking any link on mobile
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // 2. Intersection Observer for Smooth Scroll Fade-In Animation
  const observerOptions = {
    root: null,
    threshold: 0.1, // Element activates when 10% visible
  };

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
        observerInstance.unobserve(entry.target); // Unobserve to retain animation
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => observer.observe(el));

  // 3. Contact Form Submission Handling
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      // Simulated network request delay
      setTimeout(() => {
        formStatus.textContent = "Thank you! Your message has been sent successfully.";
        formStatus.style.color = "#16a34a"; // Green message feedback

        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Automatically hide success notification after 5 seconds
        setTimeout(() => {
          formStatus.textContent = "";
        }, 5000);
      }, 1200);
    });
  }
});
