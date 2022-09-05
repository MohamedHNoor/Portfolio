const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("show-links");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("show-links");
  });
});
