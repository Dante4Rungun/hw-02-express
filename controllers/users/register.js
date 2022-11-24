const User = require('../../models/user')

const register = async (req, res) => {
    const {email} = req.body
    const user = await User.findOne({ email: email })
    if (!user) {
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user)           
    }        
    else res.status(409).json({"message":"Email in use"})
}

module.exports = register