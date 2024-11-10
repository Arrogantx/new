import React from 'react'
import "./darkbg.scss"

const DarkBg = () => {
  return (
    <div className="dark-bg animate-turnOff">
      <div className="flicker shadow-[0_7px_10px_0_#00000070_inset]">
    <div className="star-content">
      <div className="stars-fx"></div>
      <div className="translate-x-[-100px] translate-y-[-200px]">
        <div className="stars-fx"></div>
      </div>
    </div>
  </div>
  
  </div>
  )
}

export default DarkBg
