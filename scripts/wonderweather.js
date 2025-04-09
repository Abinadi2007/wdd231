const apiKey = '9d6429782aaa195fd8ff50f6c3dac0d1';
const city = 'Tokyo';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const weatherText = `Temperature: ${data.main.temp}°C, ${data.weather[0].description}`;
    document.getElementById('weather-text').textContent = weatherText;
  })
  .catch(error => {
    document.getElementById('weather-text').textContent = 'Weather data unavailable.';
    console.error(error);
  });