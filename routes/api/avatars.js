const express = require('express')
const router = express.Router()
const ctrlAvatars = require('../../controllers/avatars/index')
const upload = require('../../middlewares/upload')

router.post('/', upload, ctrlAvatars.rename, async (req, res, next) => {
   res.status(201).json("upload successed") 
})

module.exports = router