const nodemailer = require('nodemailer')
require('dotenv').config();

const {MAILTRAP_USER, MAILTRAP_PASS} = process.env

const main = async (to, token) => {
    const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: MAILTRAP_USER,
        pass: MAILTRAP_PASS
    }
    });    

    const email = {
        from: "denischuprin9619@gmail.com",
        to: to,
        subject: "Email virification. Contacts project",
        html: "<h1>Hello from nodemailer</h1>",
        text: `Please verify your email! 
        here is your verifictation link: 
        auth/verify/${token}`
    }

    const response = await transport.sendMail(email)
    console.log("email sent: ", response)
}

module.exports = main