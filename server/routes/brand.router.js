const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brand.controller')
const checkRole = require('../middleware/checkingRoleMiddleware');

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router