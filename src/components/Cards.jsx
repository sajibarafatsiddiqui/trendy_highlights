import React from 'react'
import Card from './Card'

const Cards = ({ currency, rate }) => {
    
  return (
    <div>
         { Object.keys(rate).forEach((key)=> <Card key = {key} rate={rate[key]}/>)}
    </div>
  )
}

export default Cards