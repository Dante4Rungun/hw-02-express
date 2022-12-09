const User = require('../../models/user')
const gravatar = require('gravatar')
const sendMail = require('../../nodemailer/index')
const { nanoid } = require('nanoid');

const register = async (req, res) => {
    const {email} = req.body
    const user = await User.findOne({ email: email })
    if (!user) {
        const user = new User(req.body)
        user.avarar = gravatar.url(user.email, { s: '100', r: 'x', d: 'retro' }, true)
        const verifyToken = nanoid()
        user.verificationToken = verifyToken
        await user.save()
        sendMail.verify(email, verifyToken)
        res.status(201).json(user)           
    }        
    else res.status(409).json({"message":"Email in use"})
}

module.exports = register