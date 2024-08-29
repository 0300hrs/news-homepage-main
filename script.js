const menuButton = document.querySelector("#menu");
const menuOverlay = document.querySelector("#menuOverlay");
const menuClose = document.querySelector("#close");

menuButton.addEventListener("click", () => {
  menuOverlay.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});
