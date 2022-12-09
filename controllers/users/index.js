const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const current = require('./current')
const subscription = require('./subscription')
const avatars = require('./avatars')
const verification = require('./verification')
const verify = require('./verify')

module.exports = {
    register,
    login,
    logout,
    current,
    subscription,
    avatars,
    verification,
    verify,
}