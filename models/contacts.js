const fs = require('fs/promises')
const path = require('path')
const utils = require('../utils/utils')

const CONTACTS_PATH = path.join(__dirname, 'contacts.json')

const listContacts = async () => {
  try {
    return await utils.getContacts(CONTACTS_PATH)
  }
  catch (err) {
    return utils.createResponse("500", "failure", err)
  }
}

const getContactById = async (contactId) => {
  try {
    const contacts = await utils.getContacts(CONTACTS_PATH)
    if (contacts.find(contact => contact.id === contactId) !== undefined)
        return utils.createResponse("success", "200", contacts.filter(contact => contact.id === contactId))
    else return utils.createResponse("No content", "204", "No contact was found with such id")
  }
  catch (err) {
    return utils.createResponse("500", "failure", err)
  }
}

const removeContact = async (contactId) => {
  try {
    const contacts = await utils.getContacts(CONTACTS_PATH)
    if (contacts.find(contact => contact.id === contactId) !== undefined) {
      const newContacts = contacts.filter(contact => contact.id !== contactId)
      await fs.writeFile(CONTACTS_PATH, JSON.stringify(newContacts))
      return utils.createResponse("200", "success", newContacts)    
    }
    else return utils.createResponse("211", "not found", contacts)    
  }
  catch (err) {
    return utils.createResponse("500", "failure", err)
  }
}

const addContact = async (name, email, phone) => {
  try {
    const contacts = await utils.getContacts(CONTACTS_PATH)
    const id = utils.getMaxId(contacts).toString()
    contacts.push({id: id, name: name, email: email, phone: phone})
    await fs.writeFile(CONTACTS_PATH, JSON.stringify(contacts))
    return utils.createResponse("200","success", contacts)     
  }
  catch (err){
    return utils.createResponse("500","failure",err)
  }
}

const updateContact = async (contactId, name, email, phone) => {
  try {
    const contacts = await utils.getContacts(CONTACTS_PATH)
    if (contacts.find(contact => contact.id === contactId) !== undefined)
    {
      contacts[contacts.findIndex(contact => contact.id === contactId)] = {id: contactId, name: name, email: email, phone: phone}
      await fs.writeFile(CONTACTS_PATH, JSON.stringify(contacts))
      return utils.createResponse("200","success", contacts)
    }
    else return utils.createResponse("211", "not found", contacts)
  }
  catch (err) {
    return utils.createResponse("500", "failure", err)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
