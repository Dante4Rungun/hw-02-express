const User = require('../../models/user')

const subscription = async (req, res) => {
    const result = await User.findByIdAndUpdate({ _id: req.user._id }, { "subscription": req.body.subscription }, {new:true})
    res.status(200).json(result)
}

module.exports = subscription