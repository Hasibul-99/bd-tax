const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

console.log( "hello");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
})