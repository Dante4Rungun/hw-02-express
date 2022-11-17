const Contact = require('../../models/contact')

const remove = async (req, res) => {
    const { contactId } = req.params
    try {
        const result = await Contact.remove({_id: contactId})
        return res.status(200).json(result)        
    }
    catch (err) {
        return res.status(404).json("Not found")
    }
}

module.exports = remove