// Text Animation
let i = 0;
const txt = 'Welcome to our official site.';
const speed = 60;
function type() {
  if (i < txt.length) {
    document.querySelector("h4").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
window.onpopstate = function(event) {
  document.querySelectorAll(".links a")[document.location.hash.replace("#bg","")-1].style.backgroundColor = "white";
}