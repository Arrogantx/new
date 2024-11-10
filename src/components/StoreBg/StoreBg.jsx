import React from 'react'
import "./storebg.scss"
import BGVM1 from "../../assets/bg-glitch.webm"
import BGVM2 from "../../assets/bg-glitch.mp4"

const StoreBg = () => {
  return (
    <div className="store-bg animate-turnOff">
          <div className="scanlines"></div>
            <div className="flicker shadow-[0_7px_10px_0_#00000070_inset]">
          <div className="star-content">
            <div className="stars-fx"></div>
            <div className="translate-x-[-100px] translate-y-[-200px]">
              <div className="stars-fx"></div>
            </div>
          </div>
          <video
      autoPlay
      playsInline
      muted
      loop
    >
      <source src={BGVM1} type="video/webm" />
      <source src={BGVM2} type="video/mp4" />
    </video>
        </div>
        
        </div>
  )
}

export default StoreBg
