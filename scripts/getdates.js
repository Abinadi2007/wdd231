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
function filterCourses() {
    const filterValue = document.getElementById("course-filter").value;
    const courses = document.querySelectorAll(".course-item");

    courses.forEach(course => {
        if (filterValue === "all" || course.getAttribute("data-status") === filterValue) {
            course.style.display = "block";
        } else {
            course.style.display = "none";
        }
    });
    updateCredits();
}

function updateCredits() {
    const courses = document.querySelectorAll(".course-item");
    let totalCredits = 0;

    courses.forEach(course => {
        if (course.getAttribute("data-status") === "completed") {
            const credits = parseInt(course.querySelector("p").innerText.split(":")[1]);
            totalCredits += credits;
        }
    });

    document.getElementById("total-credits").innerText = "Total Credits: " + totalCredits;
}

window.onload = updateCredits;