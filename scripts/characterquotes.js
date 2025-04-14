document.addEventListener('DOMContentLoaded', () => {
    const quoteCard = document.getElementById('character-quote-card');
  
    const quotes = [
      { text: '“El poder sin propósito es solo ruido.”', character: 'Khan Nikamura' },
      { text: '“No soy tu enemiga… hasta que me obligas a serlo.”', character: 'Mia Vanessa' },
      { text: '“Si la educación fuese una condena, que me den cadena perpetua.”', character: 'Kristell Yamasaki' },
      { text: '“El futuro se construye con errores… y con fuego.”', character: 'Mikita Kyoto' },
      { text: '“A veces lo correcto duele más que el crimen.”', character: 'Perla Petrovy' }
    ];
  
    function displayRandomQuote() {
      const random = Math.floor(Math.random() * quotes.length);
      const quote = quotes[random];
  
      quoteCard.innerHTML = `
        <blockquote class="quote-block">
          ${quote.text}
          <footer>— <strong>${quote.character}</strong></footer>
        </blockquote>
      `;
  
      quoteCard.classList.add('fade-in');
      setTimeout(() => quoteCard.classList.remove('fade-in'), 1000);
    }
  
    displayRandomQuote();
  
    setInterval(displayRandomQuote, 15000);
  });
  