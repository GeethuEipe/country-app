import '../../custom.css'

import CountryList from './CountryList'
import Footer from '../ui/Footer'
import React from 'react'

const Home = () => {
  return (
    <div className="wrapper">
      <CountryList />
      <Footer />
    </div>
  )
}
export default Home
