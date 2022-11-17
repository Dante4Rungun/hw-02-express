const express = require('express')
const router = express.Router()

const ctrlContact = require('../../controllers/contacts/index')
const validation = require('../../validation/validation')
const {
  validate
} = require('../../validation/validationMiddleware')

router.get('/', ctrlContact.list)

router.get('/:contactId', ctrlContact.getById)

router.post('/', validate(validation.contact), ctrlContact.add) //validate(validation.contact),

router.delete('/:contactId', ctrlContact.remove)

router.put('/:contactId', validate(validation.contact), ctrlContact.update) //validate(validation.contact)

module.exports = router