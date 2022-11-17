const express = require('express')
const methods = require('../../models/contacts')
const validation = require('../../validation/validation')
const {
  validate
} = require('../../validation/validationMiddleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
  const response =  await methods.listContacts()
  res.status(response.status).json(response.data)
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params
  const response = await methods.getContactById(contactId)
  res.status(response.status).json(response.data)
})

router.post('/', validate(validation.contact), async (req, res, next) => {
  const { name, email, phone } = req.body
  console.log(name)
  const response = await methods.addContact(name, email, phone)
  res.status(response.status).json(response.data)
})

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params
  const response = await methods.removeContact(contactId)
  res.status(response.status).json(response.data)
})

router.put('/:contactId', validate(validation.contact), async (req, res, next) => {
  const { contactId } = req.params
  const { name, email, phone } = req.body
  const response = await methods.updateContact(contactId, name, email, phone)
  res.status(response.status).json(response.data)
})

module.exports = router