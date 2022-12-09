const express = require('express')
const authMiddleware = require('../../middlewares/auth')
const router = express.Router()

const ctrlUser = require('../../controllers/users/index')
const ctrlAvatars = require('../../controllers/avatars/index')
const upload = require('../../middlewares/upload')
const validation = require('../../validation/users/index')
const {validate} = require('../../middlewares/validation')

router.post('/register', validate(validation.register), ctrlUser.register)

router.post('/login', validate(validation.login), ctrlUser.login)

router.post('/logout', authMiddleware, ctrlUser.logout)

router.get('/current', authMiddleware, ctrlUser.current)

router.patch('/subscription', authMiddleware, validate(validation.subscription), ctrlUser.subscription)

router.patch('/avatars', authMiddleware, upload, ctrlAvatars.resize, ctrlAvatars.rename, ctrlUser.avatars)

router.get('/verify/:verifyToken', ctrlUser.verification)

router.post('/verify', ctrlUser.verify)

module.exports = router