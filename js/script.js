// Dark & Light mode switcher

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

// Smooth scroll to section
document.querySelectorAll("a.smooth-scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Get the target section's ID
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offset = targetSection.getBoundingClientRect().top + window.scrollY;

      window.scroll({
        top: offset,
        behavior: "smooth", // This creates the smooth scrolling effect
      });
    }
  });
});
