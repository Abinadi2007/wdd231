async function fetchWonderNews() {
    try {
      const response = await fetch('data/wonder-news.json');
      const data = await response.json();
  
      const today = new Date().toISOString().split('T')[0];
      const todayNews = data.news.find(entry => entry.date === today);
  
      const container = document.getElementById('wonder-news-text');
  
      if (todayNews && todayNews.items.length > 0) {
        const list = document.createElement('ul');
        todayNews.items.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          list.appendChild(li);
        });
        container.innerHTML = '';
        container.appendChild(list);
      } else {
        container.textContent = "Sin noticias por el momento. ¡Vuelve más tarde!";
      }
  
    } catch (error) {
      console.error('Error cargando Wonder News:', error);
      document.getElementById('wonder-news-text').textContent = "No se pudieron cargar las noticias.";
    }
  }
  
  document.addEventListener('DOMContentLoaded', fetchWonderNews);  