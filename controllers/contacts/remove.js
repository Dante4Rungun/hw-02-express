const Contact = require('../../models/contact')

const remove = async (req, res) => {
    const { contactId } = req.params
    await Contact.findOneAndRemove({ _id: contactId })
        .then(obj => {
            res.status(200).json({"message": "contact deleted"})       
        })
        .catch(err => {
            res.status(404).json({"message": "Not found"})
        })  
}

module.exports = remove