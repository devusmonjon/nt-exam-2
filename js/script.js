const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

const dateEl = document.querySelector("#date");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

const date = new Date();
dateEl.innerHTML = date.getFullYear();
