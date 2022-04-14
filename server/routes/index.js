const Router = require('express')
const router = new Router()
const userRouter = require('./user.router')
const deviceRouter = require('./device.router')
const brandRouter = require('./brand.router')
const typeRouter = require('./type.router')

router.use('/user', userRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)

module.exports = router