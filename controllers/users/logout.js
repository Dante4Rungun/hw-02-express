const User = require('../../models/user')

const logout = async (req, res) => {
    const user = req.user
    user.token = null
    await User.findByIdAndUpdate({ _id: user._id }, { token: user.token },{new: true})
    res.status(204).json()
}

module.exports = logout