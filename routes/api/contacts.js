const express = require('express')
const router = express.Router()

const ctrlContact = require('../../controllers/contacts/index')
const validation = require('../../validation/index')
const { validate } = require('../../validation/validationMiddleware')

router.get('/', ctrlContact.list)

router.get('/:contactId', ctrlContact.getById)

router.post('/', validate(validation.add), ctrlContact.add)

router.delete('/:contactId', ctrlContact.remove)

router.put('/:contactId', validate(validation.update), ctrlContact.update)

router.patch('/:contactId/favorite', validate(validation.favorite), ctrlContact.patch)

module.exports = router