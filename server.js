import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = process.env.PORT || 3000;

// __dirname replacement in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
app.use(express.static(__dirname));

// Define target URL
const targetUrl = 'https://cmxbcqguzbnu.eu-central-1.clawcloudrun.com/';

app.get('/', async (req, res) => {
  try {
    const response = await fetch(targetUrl, { method: 'HEAD' });
    if (response.ok) {
      res.redirect(targetUrl);
    } else {
      res.sendFile(path.join(__dirname, 'index2.html'));
    }
  } catch (err) {
    res.sendFile(path.join(__dirname, 'index2.html'));
  }
});

app.listen(port, () => {
  console.log(`Redirect server running at http://localhost:${port}`);
});
