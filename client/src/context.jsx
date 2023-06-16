import { useContext, createContext, useEffect, useState } from 'react'
import axios from 'axios'
const Context = createContext()

export const ContextProvider = ({ children }) => {
  const baseUrl = `http://localhost:3500`

  const [foodData, setFoodData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const getData = async () => {
    setIsLoading(true)
    const data = await axios
      .get(`http://localhost:3500/food`)
      .then((res) => res)
      .catch((err) => console.log(err))
    setFoodData(data.data)
    console.log(data.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Context.Provider value={{ foodData, isLoading }}>
      {children}
    </Context.Provider>
  )
}

export const UseMainContext = () => {
  const context = useContext(Context)

  return context
}
