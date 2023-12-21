const { Router } = require('express');
const AdminRoute = require('./admin.routes')
const ProfileRoute = require('./profile-user.routes')
const TodoRoute = require('./todo.routes')
const AuthRoute = require('./auth.routes')
const PhotoRoute = require('./photo.routes')

const router = Router()

router.use('/admin', AdminRoute)
router.use('/profile', ProfileRoute)
router.use('/todo', TodoRoute)
router.use('/auth', AuthRoute)
router.use('/photo', PhotoRoute)

module.exports = router