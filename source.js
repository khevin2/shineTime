let el = document.getElementById("menu");
el.addEventListener("click", showMenu, false);

let el3 = document.getElementById("close-menu");
el3.addEventListener("click", hideMenu, false);

function showMenu() {
  document.getElementsByClassName("navbar")[0].style.display = "block";
}
function hideMenu() {
  document.getElementsByClassName("navbar")[0].style.display = "none";
}
