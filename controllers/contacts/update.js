const Contact = require('../../models/contact')

const update = async (req, res) => {
    const { contactId } = req.params
    try {
        const result = await Contact.updateOne({ _id: contactId }, req.body, { upsert: true })
        res.status(200).json(result)
    }
    catch (err) {
        res.status(404).json("Not found")
    }
}

module.exports = update