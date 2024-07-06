import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import QRCode from 'qrcode';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

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
