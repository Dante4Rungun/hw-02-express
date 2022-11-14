const getMaxId = (data) => {
  const idList = data.map(contact => contact.id)
  return Math.max(...idList) + 1
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
}
