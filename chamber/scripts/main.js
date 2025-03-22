document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel-images img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        document.querySelector(".carousel-images").style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    const directory = document.getElementById("directory");
    const featuredMembers = document.getElementById("featured-members");
    const gridViewBtn = document.getElementById("grid-view");
    const listViewBtn = document.getElementById("list-view");
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("lastModified");
    const eventsBox = document.getElementById("events");
    const currentWeatherBox = document.getElementById("current-weather");
    const forecastBox = document.getElementById("weather-forecast");

    async function loadMembers() {
        try {
            const response = await fetch("scripts/members.json");
            if (!response.ok) throw new Error("Failed to load members.json");

            const data = await response.json();
            console.log("Loaded Members:", data);

            displayMembers(data.members);
            displayFeaturedMembers(data.members);
        } catch (error) {
            console.error("Error loading members:", error);
            directory.innerHTML = "<p>Sorry, we couldn't load the member data at the moment.</p>";
        }
    }

    function displayMembers(members) {
        directory.innerHTML = "";
        members.forEach(member => {
            const div = document.createElement("div");
            div.classList.add("member");
            div.innerHTML = `
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            `;
            directory.appendChild(div);
        });
    }

    function displayFeaturedMembers(members) {
        const featured = members.slice(0, 2);
        featuredMembers.innerHTML = "";
        featured.forEach(member => {
            const div = document.createElement("div");
            div.classList.add("member", "featured");
            div.innerHTML = `
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            `;
            featuredMembers.appendChild(div);
        });
    }

    eventsBox.innerHTML = `
        <h2>Upcoming Events</h2>
        <p>Business Expo - March 25</p>
        <p>Networking Night - April 10</p>
    `;

    function generateRandomWeather() {
        const temperatures = ["28°C", "30°C", "35°C", "32°C", "29°C", "27°C"];
        const conditions = ["Sunny with warm breezes", "Tropical rainstorm", "Extremely hot and humid", "Partly cloudy", "Thunderstorms", "Breezy and warm"];

        const temp = temperatures[Math.floor(Math.random() * temperatures.length)];
        const condition = conditions[Math.floor(Math.random() * conditions.length)];

        currentWeatherBox.innerHTML = `<h2>Current Weather in Santa Monika</h2><p>${temp} - ${condition}</p>`;
        forecastBox.innerHTML = `<h2>Weather Forecast</h2><p>Tomorrow: ${temperatures[Math.floor(Math.random() * temperatures.length)]} - ${conditions[Math.floor(Math.random() * conditions.length)]}</p>`;
    }
    generateRandomWeather();

    gridViewBtn.addEventListener("click", () => directory.classList.add("grid-container"));
    listViewBtn.addEventListener("click", () => directory.classList.remove("grid-container"));

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    loadMembers();
});