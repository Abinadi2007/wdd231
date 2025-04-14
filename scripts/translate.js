function translatePage(lang) {
    fetch(`lang/${lang}.json`)
      .then(res => res.json())
      .then(data => {
        document.querySelectorAll("[data-translate]").forEach(el => {
          const key = el.getAttribute("data-translate");
          if (data[key]) el.innerHTML = data[key];
        });
  
        document.querySelectorAll("[data-translate-alt]").forEach(el => {
          const key = el.getAttribute("data-translate-alt");
          if (data[key]) el.alt = data[key];
        });
      });
  }
  
  translatePage("en");
  