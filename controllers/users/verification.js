const { json } = require('express')
const User = require('../../models/user')

const verification = async (req, res) => {
    const { verifyToken } = req.params
    const user = await User.findOneAndUpdate({ verificationToken: verifyToken }, {"verify": true, verificationToken: null}, {new:true})
    if (!user)
        return res.status(404).json({"message": "User not found"})    
    res.status(200).json({ "message": 'Verification successful' })
}

module.exports = verification