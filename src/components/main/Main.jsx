import React from 'react'
import BestSellers from './BestSellers/BestSellers'
import Reviews from './Reviews/Reviews'
import Licensed from './Licensed/Licensed'
import Social from './Social/Social'

const Main = () => {
  return (
    <div>
        <BestSellers />
        <Reviews />
        <Licensed />
        <Social />
    </div>
  )
}

export default Main