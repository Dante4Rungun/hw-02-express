const Contact = require('../../models/contact')

const update = async (req, res) => {
    const { contactId } = req.params
    if (Object.keys(req.body).length === 0) {
        res.status(400).json({"message": "missing fields"})
    }
    else {
        try {
            const result = await Contact.updateOne({ _id: contactId }, req.body, { upsert: true })
            res.status(200).json(result)
        }
        catch (err) {
            res.status(404).json({ "message": "Not found" })
        }
    }
}

module.exports = update