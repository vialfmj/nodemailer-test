
const {setUpMail, sendEmail} = require("./sendMail")

const destinator = "vialfmj@gmail.com"
const html = `<h1 style="color: blue;">Mail de prueba</h1>`
const attachments = [
    {
        path: 'src/descarga.png'
    }
]

console.log("Creating mailToSend...")
sendEmail(destinator, html, attachments);
