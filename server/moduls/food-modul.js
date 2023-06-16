import mongoose from 'mongoose'

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  nutritionalFact: {
    caloriesPer100G: {
      type: Number,
    },
    protein: {
      type: Number,
    },
    fat: {
      type: Number,
    },
    carb: {
      type: Number,
    },
  },
  category: {
    Type: String,
  },
})

export default mongoose.model('food-facts', FoodSchema)
