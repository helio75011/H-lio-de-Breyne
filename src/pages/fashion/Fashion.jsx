import React from 'react'
import TwoShipping from '../../components/header/shipping/TwoShipping'
import TwoHeader from '../../components/header/TwoHeader'
import Detail from './detail/Detail'
import Reviews from './reviews/Reviews'
import Suggestions from './Suggestions/Suggestions'
import Footer from '../../components/footer/Footer'

const Fashion = () => {
  return (
    <div>
      <TwoShipping />
      <TwoHeader />
      <Detail />
      <Reviews />
      <Suggestions />
      <Footer />
    </div>
  )
}

export default Fashion