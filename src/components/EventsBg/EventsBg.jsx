import React from 'react'
import "./eventsbg.scss"
import EVNT_BG1 from "../../assets/events.webm"
import EVNT_BG2 from "../../assets/events.mp4"

const EventsBg = () => {
  return (
    <div className="events-bg  animate-turnOff">
          
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
      <source src={EVNT_BG1} type="video/webm" />
      <source src={EVNT_BG2} type="video/mp4" />
    </video>
        </div>
        
        </div>
  )
}

export default EventsBg
