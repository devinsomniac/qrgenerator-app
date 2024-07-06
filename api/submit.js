import QRCode from 'qrcode';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const userInput = req.body['basic-url'];
        const options = { width: 300 };

        try {
            const url = await QRCode.toDataURL(userInput, options);
            res.status(200).send(`<img src="${url}" alt="QR Code" style="border-radius: 20px;">`);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error generating QR code');
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
