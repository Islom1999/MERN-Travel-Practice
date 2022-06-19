const {Router} = require('express')
const { getAllTravels,
    getTravelById,
    addTravelBook } = require('../controllers/travelController')

const router = Router()

router.get('/', getAllTravels())
router.post('/add', addTravelBook())
router.get('/:id', getTravelById())


module.exports = router