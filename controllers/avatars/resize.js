const jimp = require('jimp')

const resize = async (req, res, next) => {
    try {
        const file = req.file
        const image = await jimp.read(file.path)
        image.resize(250, 250)
        image.write(file.path)
        next()
    }
    catch (err) {
        res.status(500).json({"err": err.message})
    }
}

module.exports = resize