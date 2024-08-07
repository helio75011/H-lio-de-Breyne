import React from 'react'
import TwoShipping from '../../components/header/shipping/TwoShipping'
import TwoHeader from '../../components/header/TwoHeader'
import Ment from './ment/Ment'
import Listing from './listing/Listing'
import Footer from '../../components/footer/Footer'

const Urban = () => {
  return (
    <div>
        <TwoShipping />
        <TwoHeader />
        <Ment />
        <Listing />
        <Footer />
    </div>
  )
}

export default Urban