const button = document.querySelector(".hamburger");
const links = document.querySelector(".header-links");

button.addEventListener("click", () => {
  links.classList.add("header-links-show");
  document.querySelector("body").style.overflow = "hidden";
});

links.addEventListener("click", () => {
  links.classList.remove("header-links-show");
  document.querySelector("body").style.overflow = "scroll";
});
