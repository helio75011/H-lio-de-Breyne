import React from 'react'
import Shipping from './shipping/Shipping'
import Hypnocrazy from './hypnocrazy/Hypnocrazy'
import Unconventional from './unconventional/Unconventional'
import Carousel from './carousel/Carousel'

const Header = () => {
  return (
    <div>
      <Shipping />
      <Hypnocrazy />
      <Unconventional />
      <Carousel />
    </div>
  )
}

export default Header