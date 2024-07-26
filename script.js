const burger = document.getElementById("burger");
const menuContent = document.getElementById("menu-content");
burger.addEventListener("click", () => {
  menuContent.classList.toggle("active");
  if (menuContent.classList.contains("active")) {
    burger.innerHTML = "&times;";
  } else {
    burger.innerHTML = "&#9776;";
  }
});
