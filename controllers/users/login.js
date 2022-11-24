const User = require('../../models/user')
const bctypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })
    
    if (!user)
        return res.status(401).json({"message":"Email or password is wrong"})   
        
    if (!await bctypt.compare(password, user.password)) 
        return res.status(401).json({"message":"Email or password is wrong"})
        
    const payload = {
        id: user.id,
        email: user.email,
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" })
    user.token = token
    await User.findByIdAndUpdate({_id:user.id},{token:user.token})

    res.status(200).json({
        "token": token,
        "user": {
            "email": user.email,
            "subscription": user.subscription   
        }
    })
}

module.exports = login