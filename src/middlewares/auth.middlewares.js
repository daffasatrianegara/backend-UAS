const { secretKey } = require('../config')
const { verify } = require('jsonwebtoken')

const authToken = (req, res, next) => {
    const authorization = String(req.headers.authorization);
    if (!authorization || !authorization.includes('Bearer')) {
        res.json({
            status: 'failed',
            message: 'Invalid Token'
        });
        return;
    }
    const token = authorization?.slice(7)
    let payload
    try {
        payload = verify(token, secretKey)
        req.user = payload
        next()
    } catch(error) {
        res.json({
            status : 'failed',
            message : 'invalid token when verify',
            error : error.message
        })
    }
}

module.exports = {
    authToken
}