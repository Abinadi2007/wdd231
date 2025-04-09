const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

const clientId = '48313';
const clientSecret = '7693c123caa27dd1b8c53930383bc8dd';
const username = 'HonduranBug';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/get-status', async (req, res) => {
  try {
    const tokenRes = await fetch('https://www.deviantart.com/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
    });

    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    const statusRes = await fetch(`https://www.deviantart.com/api/v1/oauth2/user/statuses/${username}?access_token=${accessToken}`);
    const statusData = await statusRes.json();

    res.json(statusData);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching status' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:127.0.0.1:5500`);
});