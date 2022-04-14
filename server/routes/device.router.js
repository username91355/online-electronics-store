const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/device.controller')

router.post('/',deviceController.create)
router.get('/', deviceController.getAll)
router.post('/:id',deviceController.getOne)

module.exports = router