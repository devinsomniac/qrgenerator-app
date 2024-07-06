import bodyParser from "body-parser"
import express from "express"
import {dirname} from "path"
import { fileURLToPath } from "url"
import QRCode from "qrcode"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const port = process.env.PORT || 3000
const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.get("/" , (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})


app.post("/submit", async (req,res) => {
    const userInput = req.body["basic-url"]
    const option = {width : 300}
    const url = await QRCode.toDataURL(userInput,option)
    res.send(`<img src="${url}" alt="QR Code" style="border-radius: 20px;">`)
})


app.listen(port, () => {
    console.log(`The app is listening to ${port}`)
})
