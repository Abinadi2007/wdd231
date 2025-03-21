const apiKey = "9d6429782aaa195fd8ff50f6c3dac0d1";
const city = "Trier,DE";

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        document.getElementById("current-temp").textContent = `${data.main.temp}°C`;

        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById("weather-icon").src = iconUrl;
        document.getElementById("weather-icon").alt = data.weather[0].description;

        document.querySelector("figcaption").textContent = data.weather[0].description;
    } catch (error) {
        console.error("Fetch error:", error);
        document.getElementById("current-temp").textContent = "Failed to load";
        document.querySelector("figcaption").textContent = "Error fetching weather";
    }
}

window.onload = getWeather;