const menu = document.querySelector(".menu");
const list = document.querySelector("ul");
const nav = document.querySelector("nav");

list.style.top = "-280px";

menu.addEventListener("click", () => {
  if (list.style.top == "-250px") {
    list.style.top = "80px";
  } else {
    list.style.top = "-250px";
  }
});
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 121) {
    nav.classList.add("navbar");
  } else {
    nav.classList.remove("navbar");
  }
});
