const express = require('express')
const methods = require('../../models/contacts')
const validation = require('../../validation/validation')
const {
  validate
} = require('../../validation/validationMiddleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
  const response =  await methods.listContacts()
  res.json(response)
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params
  const response = await methods.getContactById(contactId)
  res.json(response)
})

router.post('/', validate(validation.contact), async (req, res, next) => {
  const {name, email, phone } = req.body
  const response = await methods.addContact(name, email, phone)
  res.json(response)
})

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params
  const response = await methods.removeContact(contactId)
  res.json(response)
})

router.put('/:contactId', validate(validation.contact), async (req, res, next) => {
  const { contactId } = req.params
  const { name, email, phone } = req.body
  const resonse = await methods.updateContact(contactId, name, email, phone)
  res.json(resonse)
})

module.exports = router
