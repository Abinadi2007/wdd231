document.addEventListener("DOMContentLoaded", () => {
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

    function fetchWeather() {
        currentWeatherBox.innerHTML = `<h2>Current Weather</h2><p>Sunny, 75°F</p>`;
        forecastBox.innerHTML = `<h2>Weather Forecast</h2><p>Tomorrow: Cloudy, 72°F</p><p>Friday: Rainy, 68°F</p>`;
    }
    fetchWeather();

    gridViewBtn.addEventListener("click", () => directory.classList.add("grid-view"));
    listViewBtn.addEventListener("click", () => directory.classList.remove("grid-view"));

    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;

    loadMembers();
});