import foodModul from '../moduls/food-modul.js'

export const getFood = async (req, res) => {
  try {
    const foodData = await foodModul.find({})
    if (!foodData) {
      return res.status(400).json({ msg: 'no food ' })
    }

    return res.status(200).json(foodData)
  } catch (error) {
    return res.status(500).json({ msg: 'server error' })
  }
}
