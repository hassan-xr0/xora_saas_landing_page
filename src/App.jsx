import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Testimonial from './sections/Testimonial'
import Downloads from './sections/Downloads'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='overflow-hidden'>
        <Header />
        <Hero/>
        <Features/>
        <Pricing/>
        <Faq/>
        <Testimonial/>
        <Downloads/>
        <Footer/>
    </main>
  )
}

export default App
