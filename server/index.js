import express from 'express'
import { config } from 'dotenv'
import helmet from 'helmet'
import connectDB from './connection/connectDB.js'
import cors from 'cors'
import router from './routes/food-routes.js'
config()
const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors())

app.use('/', router)

const port = 3500
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Port is listining to  ${port}`)
    })
  } catch (error) {
    throw new Error(error)
  }
}

start()
