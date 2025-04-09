async function fetchDeviantArtStatus() {
  try {
    const response = await fetch('http://localhost:3000/get-status'); // Asegúrate que tu servidor esté corriendo
    const data = await response.json();
    const post = data.results?.[0];

    if (post) {
      document.getElementById('weekly-update-text').textContent = post.body;
    } else {
      document.getElementById('weekly-update-text').textContent = "No recent status updates.";
    }

  } catch (error) {
    console.error('Error fetching DeviantArt status:', error);
    document.getElementById('weekly-update-text').textContent = "Could not fetch updates.";
  }
}

document.addEventListener('DOMContentLoaded', fetchDeviantArtStatus);