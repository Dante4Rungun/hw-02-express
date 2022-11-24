const Contact = require('../../models/contact')

const add = async (req, res) => {
    const { id: userId } = req.user
    const contact = req.body
    contact.owner = userId
    const result = await Contact.create(contact)
    res.status(201).json(result)
}

module.exports = add