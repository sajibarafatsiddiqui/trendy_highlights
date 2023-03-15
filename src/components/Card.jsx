import React from 'react'

const Card = ( { key, rate }) => {
    
  return (
    <div>
      <h2>{ key }</h2>
      <p>{ rate }</p>
    </div>
  )
}

export default Card