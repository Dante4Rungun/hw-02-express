const { Unauthorized } = require("http-errors")
const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const authMiddleware =  async (req, res, next) => {
    const [tokenType, token] = req.headers['authorization'].split(' ')
    if (tokenType === "Bearer" && token) {
        try {
            const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)
            const user = await User.findById(verifiedToken.id)
            if (!user)
                res.status(401).json({ "message": "Not authorized" })
            if (!user.token)
                res.status(401).json({ "message": "Not authorized" })
            if (token !== user.token) 
                res.status(401).json({ "message": "Not authorized" })
            req.user = user
            req.token = token
            next()
        }
        catch(err) {
            if (err.name === "TokenExpiredError") {
                next(new Unauthorized(err.name))
            }
            if (err.name === "JsonWebTokenError") {
                next(new Unauthorized(err.name))
            }
            res.status(401).json({"message": "Not authorized"})
        }
    } 
    else res.status(401).json({"message": "Not authorized"})
}
    



module.exports = authMiddleware