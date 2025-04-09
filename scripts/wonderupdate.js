const clientId = '48313';
const clientSecret = '7693c123caa27dd1b8c53930383bc8dd';
const username = 'HonduranBug';

async function fetchDeviantArtStatus() {
  try {
    const tokenResponse = await fetch('https://www.deviantart.com/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const statusResponse = await fetch(`https://www.deviantart.com/api/v1/oauth2/user/statuses/HonduranBug?access_token=${accessToken}`);
    const statusData = await statusResponse.json();

    const post = statusData.results[0];

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