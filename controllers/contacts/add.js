const Contact = require('../../models/contact')

const add = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).json({"message": "missing fields"})
    }
    else {
        const result = await Contact.create(req.body)
        res.status(201).json(result)
    }
}

module.exports = add