import React from 'react'
import "./mediapictures.scss"
import DarkBg from '../../components/DarkBg/DarkBg'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import BottomBar from '../../components/BottomBar/BottomBar'
import "./mediapictures.scss"

const MediaPictures = () => {
  return (
    <section className='picture-sec'>
    <div className="wrapper">
      <DarkBg />
       <ImageCarousel />
      <BottomBar />
    </div>
  </section>
  )
}

export default MediaPictures
