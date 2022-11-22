const Contact = require('../../models/contact')

const update = async (req, res) => {
    const { contactId } = req.params
    await Contact.findOneAndUpdate({ _id: contactId }, req.body, { upsert: true })
        .then(obj => {
            res.status(200).json(obj)
        }) 
        .catch(err => {
            res.status(404).json({ "message": "Not found" })
        })
}

module.exports = update