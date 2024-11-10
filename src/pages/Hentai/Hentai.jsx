import React from 'react'
import "./hentai.scss"
import DarkBg from '../../components/DarkBg/DarkBg'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import BottomBar from '../../components/BottomBar/BottomBar'
import "./hentai.scss"

const Hentai = () => {
  return (
    <section className='hentai'>
      <div className="wrapper">
        <DarkBg />
         <ImageCarousel />
        <BottomBar />
      </div>
    </section>
  )
}

export default Hentai
