const User = require('../../models/user')

const avatars = async (req, res) => {
    await User.findByIdAndUpdate({ _id: req.user._id }, { "avarar": "public/avatars/" + req.file.filename})
    res.status(200).json({"avatarURL": "/public/avatars/" + req.file.filename})
}

module.exports = avatars