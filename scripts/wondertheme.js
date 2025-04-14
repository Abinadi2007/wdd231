document.addEventListener('DOMContentLoaded', () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) document.body.classList.add('dark');
  
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '🌓';
    toggleButton.className = 'theme-toggle';
    document.querySelector('.nav-bar .container').appendChild(toggleButton);
  
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');
    });
  
    window.showGallery = () => {
      const gallerySection = document.querySelector('.gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
        gallerySection.classList.add('fade-in');
        setTimeout(() => {
          gallerySection.classList.remove('fade-in');
        }, 1500);
      }
    };
  
    const welcome = document.createElement('div');
    welcome.className = 'welcome-msg';
    welcome.textContent = 'Bienvenido a Wonder Studios';
    document.body.appendChild(welcome);
    setTimeout(() => welcome.remove(), 2500);
  });  