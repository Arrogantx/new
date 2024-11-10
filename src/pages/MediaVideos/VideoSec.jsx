import React from 'react'
import "./video.scss"
import DarkBg from '../../components/DarkBg/DarkBg'
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel'
import BottomBar from '../../components/BottomBar/BottomBar'

const VideoSec = () => {
  return (
    <section className='video-sec'>
      <div className="wrapper">
        <DarkBg />
         <ImageCarousel />
        <BottomBar />
      </div>
    </section>
  )
}

export default VideoSec
