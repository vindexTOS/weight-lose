 import { config } from "dotenv"
import foodModul from "./moduls/food-modul.js"
import connectDB from "./connection/connectDB.js"
import dataJson from './dataJson.json' assert {type:"json"}
config ()


const populate = async()=>{
      try {
        await connectDB(process.env.MONGO_URL)
        await foodModul.create(dataJson)
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

populate()