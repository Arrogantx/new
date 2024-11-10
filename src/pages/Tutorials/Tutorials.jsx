import React from 'react'
import "./tutorials.scss"
import BottomBar from '../../components/BottomBar/BottomBar'
import DarkBg from '../../components/DarkBg/DarkBg'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'

const Tutorials = () => {
  return (
    <section className='tutorials'>
      <div className="wrapper">
        <DarkBg />
         <ImageCarousel />
        <BottomBar />
      </div>
    </section>
  )
}

export default Tutorials
