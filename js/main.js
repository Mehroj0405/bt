const hamburgerMenu = document.querySelector(".hamburger-menu");
const smallNav = document.querySelector(".small-nav");
const smallNavItems = document.querySelectorAll(".small-nav ul li a");

hamburgerMenu.addEventListener("click", function () {
    smallNav.classList.toggle("small-nav--active");
    document.body.classList.toggle("overflow-h");
});
