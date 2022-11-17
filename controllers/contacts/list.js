const Contact = require('../../models/contact')

const list = async (req, res) => {
    const result = await Contact.find()
    res.status(201).json(result)
}

module.exports = list