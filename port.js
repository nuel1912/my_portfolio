let menu = document.querySelector(".menu");
let navlinks = document.querySelector("ul");

menu.addEventListener("click", function () {
    navlinks.classList.toggle("open");
})