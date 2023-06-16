import express from 'express'
import { getFood } from '../controllers/food-controller.js'

const router = express.Router()

router.route('/food').get(getFood)

export default router
