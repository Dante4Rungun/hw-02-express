const express = require('express')
const authMiddleware = require('../../auth/authMiddleware')
const router = express.Router()

const ctrlUser = require('../../controllers/users/index')
const validation = require('../../validation/users/index')
const {validate} = require('../../validation/validationMiddleware')

router.post('/register', validate(validation.register), ctrlUser.register)

router.post('/login', validate(validation.login), ctrlUser.login)

router.post('/logout', authMiddleware, ctrlUser.logout)

router.get('/current', authMiddleware, ctrlUser.current)

router.patch('/subscription', authMiddleware, validate(validation.subscription), ctrlUser.subscription)

module.exports = router