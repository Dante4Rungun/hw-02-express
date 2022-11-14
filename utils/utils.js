const fs = require('fs/promises')

const getMaxId = (data) => {
  const idList = data.map(contact => contact.id)
  return Math.max(...idList) + 1
}

const getContacts = async (path) => {
  const contacts = await fs.readFile(path)
  return JSON.parse(contacts)
}

const createResponse = (status, code, data) => {
  return response = {
    status: status,
    code: code,
    data: data
  }
}

module.exports = {
  getMaxId,
  createResponse,
  getContacts,
}
