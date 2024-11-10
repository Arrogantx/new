import React from 'react'
import "./locations.scss"
import BottomBar from '../../components/BottomBar/BottomBar'
import SkyBg from '../../components/SkayBg/SkyBg'
import BackTomenu from '../../components/BackToMenu/BackTomenu'

const Locations = () => {
  return (
    <section className='locations'>
      <div className="wrapper">
        <SkyBg />
        <div className="menu-content animate-turnOff">
          <div className="menus">
            <p>united states</p>
            <span>⚡️california</span>
            <span>⚡️florida</span>
            <span>⚡️michigan</span>
          </div>
          <div className="menus">
            <p>international </p>
            <span>🔒Canada</span>
            <span>🔒euroverse</span>
          </div>
        </div>
        <BackTomenu />
        <BottomBar />
      </div>
   </section>
  )
}

export default Locations
