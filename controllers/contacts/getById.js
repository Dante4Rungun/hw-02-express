const Contact = require('../../models/contact')

const getById = async (req, res) => {
    const { contactId } = req.params
    await Contact.findOne({ _id: contactId })
    .then(obj => {
        res.status(201).json(obj) 
    })
    .catch(err => {
        res.status(404).json({"message": "Not found"})  
    })
}

module.exports = getById