function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleString("es-ES", { dateStyle: "full", timeStyle: "short" });
    document.getElementById("date-time").textContent = formattedDate;
}

async function fetchWeather() {
    try {
        const response = await fetch("https://api.weatherapi.com/v1/current.json?key=TU_API_KEY&q=auto:ip&lang=es");
        const data = await response.json();
        document.getElementById("weather").textContent = `Clima: ${data.current.temp_c}°C, ${data.current.condition.text}`;
    } catch (error) {
        document.getElementById("weather").textContent = "No se pudo obtener el clima.";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    updateDateTime();
    fetchWeather();
    setInterval(updateDateTime, 60000);
});