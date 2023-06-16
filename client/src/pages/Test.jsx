import React from 'react'
import { UseMainContext } from '../context'

export default function Test() {
  const { foodData, isLoading } = UseMainContext()

  if (isLoading) {
    return <div>Loading </div>
  } else if (foodData) {
    return (
      <div>
        {foodData?.map((val) => {
          return (
            <div key={val._id}>
              <h1>{val.name}</h1>

              <img style={{ widows: '400px', height: '300px' }} src={val.img} />
            </div>
          )
        })}
      </div>
    )
  }
}
