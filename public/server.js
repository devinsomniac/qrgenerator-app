import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import QRCode from 'qrcode';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Handle GET request for the root path (/)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Assuming index.html is in the same directory
});

// Handle POST request to the "/submit" endpoint
app.post('/submit', async (req, res) => {
  const userInput = req.body['basic-url'];
  const options = { width: 300 };

  try {
    const url = await QRCode.toDataURL(userInput, options);
    res.send(`<img src="${url}" alt="QR Code">`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating QR code');
  }
});

export default app;
