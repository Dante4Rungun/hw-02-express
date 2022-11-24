const Contact = require('../../models/contact')

const patch = async (req, res) => {
    const { contactId } = req.params
    const { id: userId } = req.user

    await Contact.findOneAndUpdate({ _id: contactId, owner: userId }, {"favorite": req.body.favorite}, { new: true })
        .then(obj => {
            obj === null ? res.status(404).json({"message": "Not found"}) : res.status(201).json(obj)
        })
        .catch(err => {
            res.status(404).json({"message": "Not found"})
        })
}

module.exports = patch