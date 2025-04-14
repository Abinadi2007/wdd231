 document.addEventListener('DOMContentLoaded', () => {
    const weatherText = document.getElementById('weather-text');
    const API_KEY = '9d6429782aaa195fd8ff50f6c3dac0d1';
  
    function fetchWeatherByLocation(lat, lon) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`;
  
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const condition = data.weather[0].description;
          const temp = Math.round(data.main.temp);
          const city = data.name;
          const emoji = mapConditionToEmoji(condition);
  
          weatherText.textContent = `${emoji} ${condition} en ${city}, ${temp}°C`;
        })
        .catch(error => {
          console.error('Error al obtener el clima:', error);
          weatherText.textContent = '🌐 Clima no disponible';
        });
    }
  
    function mapConditionToEmoji(condition) {
      const conditionLower = condition.toLowerCase();
      if (conditionLower.includes('lluvia')) return '🌧️';
      if (conditionLower.includes('nieve')) return '❄️';
      if (conditionLower.includes('nublado')) return '☁️';
      if (conditionLower.includes('tormenta')) return '⛈️';
      if (conditionLower.includes('despejado')) return '☀️';
      return '🌡️';
    }
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByLocation(latitude, longitude);
        },
        error => {
          console.error('Error al obtener la ubicación:', error);
          weatherText.textContent = '🌐 Ubicación no disponible';
        }
      );
    } else {
      weatherText.textContent = '🌐 Geolocalización no soportada';
    }
  });
  