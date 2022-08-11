require("dotenv").config()

const nodemailer = {
    NODEMAILER_USER: process.env.NODEMAILER_USER,
    NODEMAILER_PASS: process.env.NODEMAILER_PASS,
}

module.exports = {
    nodemailer
}