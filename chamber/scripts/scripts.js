document.addEventListener("DOMContentLoaded", function() {
    loadPlaces();
    trackLastVisit();
});

function loadPlaces() {
    fetch("data/places.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("places-container");
            container.innerHTML = "";
            data.forEach(place => {
                const card = document.createElement("div");
                card.classList.add("card");
                card.innerHTML = `
                    <h2>${place.name}</h2>
                    <figure>
                        <img src="${place.image}" alt="${place.name}">
                    </figure>
                    <address>${place.address}</address>
                    <p>${place.description}</p>
                    <button onclick="alert('More info coming soon!')">Learn More</button>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading places:", error));
}

// Track the last visit using localStorage
function trackLastVisit() {
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitDate = parseInt(lastVisit);
        const daysDifference = Math.floor((now - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysDifference} day${daysDifference > 1 ? "s" : ""} ago.`;
        }
    }

    localStorage.setItem("lastVisit", now);
}