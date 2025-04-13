async function fetchCharacterQuote() {
    try {
      const response = await fetch('data/character-quotes.json');
      const data = await response.json();
  
      const today = new Date();
      const oneJan = new Date(today.getFullYear(), 0, 1);
      const weekNumber = Math.ceil((((today - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
      const isoWeek = `${today.getFullYear()}-W${String(weekNumber).padStart(2, '0')}`;
  
      const currentQuote = data.quotes.find(q => q.week === isoWeek);
  
      const container = document.getElementById('character-quote-card');
  
      if (currentQuote) {
        container.innerHTML = `
          <h2>Character Quotes</h2>
          <div class="quote-flex">
            <img src="${currentQuote.image}" alt="${currentQuote.character}" class="quote-img">
            <blockquote>
              <p>"${currentQuote.quote}"</p>
              <footer>— <strong>${currentQuote.character}</strong></footer>
            </blockquote>
          </div>
        `;
      } else {
        container.innerHTML = "<p>No hay frase destacada esta semana.</p>";
      }
  
    } catch (error) {
      console.error('Error cargando quote:', error);
      document.getElementById('character-quote-card').textContent = "No se pudo cargar la cita.";
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchCharacterQuote);  