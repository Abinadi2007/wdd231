async function fetchWeeklyUpdate() {
  try {
    const response = await fetch('data/weekly-updates.json');
    const data = await response.json();

    const today = new Date();

    const update = data.weeks.find(week => {
      const startDate = new Date(week.start);
      const endDate = new Date(week.end);
      return today >= startDate && today <= endDate;
    });

    const element = document.getElementById('weekly-update-text');
    if (update) {
      element.textContent = update.message;
    } else {
      element.textContent = "No hay actualizaciones esta semana. ¡Vuelve pronto!";
    }
  } catch (error) {
    console.error('Error cargando las actualizaciones:', error);
    document.getElementById('weekly-update-text').textContent = "Error al cargar la actualización.";
  }
}

document.addEventListener('DOMContentLoaded', fetchWeeklyUpdate);