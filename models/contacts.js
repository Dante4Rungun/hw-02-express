const fs = require('fs/promises')
const path = require('path')
const utils = require('../utils/utils')

const CONTACTS_PATH = path.join(__dirname, 'contacts.json')

//done
const listContacts = async () => {
  try {
    const contacts = await utils.getContacts(CONTACTS_PATH)
    return utils.createResponse("200", contacts) 
  }
  catch (err) {
    return utils.createResponse("500", err, true)
  }
}

//done
const getContactById = async (contactId) => {
  try {
    const contacts = await utils.getContacts(CONTACTS_PATH)
    if (contacts.find(contact => contact.id === contactId) !== undefined)
        return utils.createResponse("200", contacts.filter(contact => contact.id === contactId))
    else return utils.createResponse("404", "Not found", true)
  }
  catch (err) {
    return utils.createResponse("500", err, true)
  }
}

//done
const removeContact = async (contactId) => {
  try {
    const contacts = await utils.getContacts(CONTACTS_PATH)
    if (contacts.find(contact => contact.id === contactId) !== undefined) {
      const newContacts = contacts.filter(contact => contact.id !== contactId)
      await fs.writeFile(CONTACTS_PATH, JSON.stringify(newContacts))
      return utils.createResponse("200", "contact deleted", true)    
    }
    else return utils.createResponse("404", "Not found", true)    
  }
  catch (err) {
    return utils.createResponse("500", err, true)
  }
}

//done
const addContact = async (name, email, phone) => {
  try {
    const contacts = await utils.getContacts(CONTACTS_PATH)
    const id = utils.getMaxId(contacts).toString()
    contacts.push({id: id, name: name, email: email, phone: phone})
    await fs.writeFile(CONTACTS_PATH, JSON.stringify(contacts))
    return utils.createResponse("201", {id: id, name: name, email: email, phone: phone})     
  }
  catch (err){
    return utils.createResponse("500", err, true)
  }
}

//done
const updateContact = async (contactId, name, email, phone) => {
  try {
    const contacts = await utils.getContacts(CONTACTS_PATH)
    if (contacts.find(contact => contact.id === contactId) !== undefined)
    {
      contacts[contacts.findIndex(contact => contact.id === contactId)] = {id: contactId, name: name, email: email, phone: phone}
      await fs.writeFile(CONTACTS_PATH, JSON.stringify(contacts))
      return utils.createResponse("200", {id: contactId, name: name, email: email, phone: phone})
    }
    else return utils.createResponse("404","Not found", true)
  }
  catch (err) {
    return utils.createResponse("500", err, true)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}