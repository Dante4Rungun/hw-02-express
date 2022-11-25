const fs = require('fs/promises')
const path = require('path')
const jimp = require('jimp')

const rename = async (req, res, next) => {
    try {
        const file = req.file
        const newPath = path.join(__dirname, "../../public/avatars", file.filename)
        await fs.rename(file.path, newPath)
        next()
    } catch (err) {
       res.status(500).json({"error": err.name}) 
    }
}

module.exports = rename