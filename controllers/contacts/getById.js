const Contact = require('../../models/contact')

const getById = async (req, res) => {
    const { contactId } = req.params
    const { id: userId } = req.user
    await Contact.findOne({ _id: contactId, owner: userId })
    .then(obj => {
        obj === null ? res.status(404).json({"message": "Not found"}) : res.status(201).json(obj) 
    })
    .catch(err => {
        res.status(404).json({"message": "Not found"})  
    })
}

module.exports = getById