// Toggle navigation menu
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  // Smooth scrolling
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Lightbox effect
  document.querySelectorAll("#projects img").forEach(img => {
    img.addEventListener("click", () => {
      const modal = document.createElement("div");
