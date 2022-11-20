const Contact = require('../../models/contact')

const getById = async (req, res) => {
    const { contactId } = req.params
    try {
        const result = await Contact.findOne({_id: contactId})
        res.status(201).json(result)
    }
    catch (err) {
        res.status(404).json({"message": "Not found"})   
    }
}

module.exports = getById