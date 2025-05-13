const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

const TARGET_URL = 'https://laughing-spoon-5g5wxg5xwg5whvvr4-8006.app.github.dev/';
const FALLBACK_URL = '/index2.html';

app.use(express.static(__dirname)); // Serve index2.html

app.get('/', async (req, res) => {
  try {
    const response = await fetch(TARGET_URL, { timeout: 3000 });
    if (response.ok) {
      return res.redirect(302, TARGET_URL);
    } else {
      console.log(`[WARN] Target responded with ${response.status}`);
    }
  } catch (err) {
    console.log(`[ERROR] Failed to fetch target: ${err.message}`);
  }

  res.redirect(302, FALLBACK_URL);
});

app.listen(port, () => {
  console.log(`🚀 Redirect server running at http://localhost:${port}`);
});
