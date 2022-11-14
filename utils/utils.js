const getMaxId = (data) => {
  const idList = data.map(contact => contact.id)
  return Math.max(...idList) + 1
}

const createResponse = (status, code, contacts) => {
  return response = {
    status: status,
    code: code,
    contacts: contacts
  }
}

module.exports = {
  getMaxId,
  createResponse,
}
