const fs = require('fs/promises')

const getMaxId = (data) => {
  const idList = data.map(contact => contact.id)
  return Math.max(...idList) + 1
}

const getContacts = async (path) => {
  const contacts = await fs.readFile(path)
  return JSON.parse(contacts)
}

const createResponse = (status, data, isMessage = false) => {
  const response = {
    status: status,
    data: {
      
    }
  }
  isMessage === true ? response.data = {message: data} : response.data = {contacts: data}
  return response
}

module.exports = {
  getMaxId,
  createResponse,
  getContacts,
}
