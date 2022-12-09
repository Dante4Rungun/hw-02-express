const User = require('../../models/user')
const sendMail = require('../../nodemailer/index')

const verify = async (req, res) => {
    const { email } = req.body
    
    if (!email)
        return res.status(400).json({ "message": "missing required field email" })
    
    const user = await User.findOne({ email: email })

    if (!user)
        return res.status(401).json({"message":"No user with such email"})   

    if (user.verify === true)
        return res.status(400).json({ "message": "Verification has already been passed" })
    
    sendMail.verify(email, user.verificationToken)
    res.status(200).json({"message": "Verification email sent"})
}

module.exports = verify