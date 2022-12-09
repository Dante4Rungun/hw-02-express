const User = require('../../models/user')

const current = async (req, res) => {
    res.status(200).json({
        "email": req.user.email,
        "subscription": req.user.subscription
    })
}

module.exports = current