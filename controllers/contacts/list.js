const Contact = require('../../models/contact')

const list = async (req, res) => {
    const { id: userId } = req.user
    console.log(userId)
    const result = await Contact.find({owner: userId})
    res.status(201).json(result)
}

module.exports = list