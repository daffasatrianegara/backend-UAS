const authMiddleware = require('./auth.middlewares')
const photoStorage = require('./photo-storage.middlewares')


module.exports = {
    authMiddleware,
    photoStorage
}