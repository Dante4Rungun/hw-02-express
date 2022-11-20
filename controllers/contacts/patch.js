const Contact = require('../../models/contact')

const patch = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        res.status(400).json({"message": "missing field favorite"})
    }
    const { contactId } = req.params
    try {
        const result = await Contact.findByIdAndUpdate({ _id: contactId }, req.body, { new: true })
        res.status(201).json(result)
    }
    catch (err) {
        res.status(404).json({"message": "Not found"})
    }
}

module.exports = patch