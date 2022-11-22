const Contact = require('../../models/contact')

const patch = async (req, res) => {
    const { contactId } = req.params
    await Contact.findByIdAndUpdate({ _id: contactId }, req.body, { new: true })
        .then(obj => {
            res.status(201).json(obj)
        })
        .catch(err => {
            res.status(404).json({"message": "Not found"})
        })
}

module.exports = patch