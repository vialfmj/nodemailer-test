const transporter = require("./nodemailer")
const setUpMail = (destinationMail, html, attachments) => {

    console.log("Setting mail options...")
    if (attachments) {
        const mailOptions = {
            from: 'ServidorNodeJs',
            to: destinationMail,
            subject: `Mail de prueba para ${destinationMail}`,
            html: html,
            attachments: attachments
        }
        return mailOptions
    }
    if (!attachments) {
        const mailOptions = {
            from: 'ServidorNodeJs',
            to: destinationMail,
            subject: `Mail de prueba para ${destinationMail}`,
            html: html
        }
        return mailOptions
    }
}
const sendEmail = async (destinator, html, attachments) => {
    console.log("Trying to send the email...")
    try {
        let mailOptions = setUpMail(destinator, html, attachments)
        console.log(mailOptions)
        await transporter.sendMail(mailOptions)
        console.log("Email sent")
        console.log("END")
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    setUpMail,
    sendEmail
}