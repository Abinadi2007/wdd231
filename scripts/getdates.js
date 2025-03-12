const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = lastModified;

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-toggle");
    const menu = document.querySelector(".navbar");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuBtn.classList.toggle("open");
    });
});
