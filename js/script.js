const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const directors = document.querySelectorAll(".directors__wrapper");

const dateEl = document.querySelector("#date");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    if (mobileMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "20px";
    } else {
        document.body.style.overflow = "auto";
        document.body.style.marginRight = 0;
    }
});

directors.forEach((director) => {
    const toggleBtn = director.querySelector(".btn");

    toggleBtn.addEventListener("click", () => {
        if (!director.classList.contains("active")) {
            directors.forEach((d) => d.classList.remove("active"));
            director.classList.add("active");
        } else {
            director.classList.remove("active");
        }
    });
});

const date = new Date();
dateEl.innerHTML = date.getFullYear();
