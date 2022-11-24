const Contact = require('../../models/contact')

const update = async (req, res) => {
    const { contactId } = req.params
    const { id: userId } = req.user
    await Contact.findOneAndUpdate({ _id: contactId, owner: userId }, req.body, { new: true })
        .then(obj => {
            obj === null ? res.status(404).json({ "message":"Not found" }) : res.status(200).json(obj)
        }) 
        .catch(err => {
            res.status(404).json({ "message":"Not found" })
        })
}

module.exports = update