const Contact = require('../../models/contact')

const remove = async (req, res) => {
    const { contactId } = req.params
    const { id: userId } = req.user
    await Contact.findOneAndRemove({ _id: contactId, owner: userId})
        .then(obj => {
            obj === null ? res.status(404).json({"message": "Not found"}) : res.status(200).json({"message": "contact deleted"})       
        })
        .catch(err => {
            res.status(404).json({"message": "Not found"})
        })
}

module.exports = remove