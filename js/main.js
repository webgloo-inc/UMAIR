// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar utk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Animasi
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(
    ".hero .paragraph, .about .container img, .about .container .paragraph, .about .content, .best-seller, .best-seller .btn, .gallery .title, .gallery .gallery-content, .sliders  "
  );

  function animateElements() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var elementPosition = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (elementPosition < windowHeight) {
        element.classList.add("animate-in");
      }
    }
  }

  animateElements();

  window.addEventListener("scroll", animateElements);
});

// Navbar scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").classList.remove("navbar-hidden");
  } else {
    document.getElementById("navbar").classList.add("navbar-hidden");
  }
  prevScrollpos = currentScrollPos;
};

let start = 0;
otomatis();

function otomatis() {
  const sliders = document.querySelectorAll(".slider");

  for (let i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }

  if (start >= sliders.length) {
    start = 0;
  }

  sliders[start].style.display = "block";
  start++;

  setTimeout(otomatis, 5000);
}
