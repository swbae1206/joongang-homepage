const menus = document.querySelectorAll(".menu");
const type = document.querySelector(".type");
const pro1 = document.querySelector(".pro1");
const pro2 = document.querySelector(".pro2");

type.addEventListener("click", function () {
  window.location.href = "productsEn.html";
});
pro1.addEventListener("click", function () {
  window.location.href = "products01En.html";
});
pro2.addEventListener("click", function () {
  window.location.href = "products02En.html";
});
