import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/homeComponents/Hero'
import Features from '../components/homeComponents/Features'

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Features />
      </main>

    </div>
  )
}

export default HomePage