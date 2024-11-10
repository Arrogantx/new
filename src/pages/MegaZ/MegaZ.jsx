import React from 'react'
import "./megaz.scss"
import { BackToSeries } from '../../components/BackToMenu/BackTomenu';
import BottomBar from '../../components/BottomBar/BottomBar';
import SkyBg from '../../components/SkayBg/SkyBg';

const MegaZ = () => {
    const boxes = [
        "https://cdn.sanity.io/images/h655d0ir/production/0bd891fb43450a14aeb7200d24d9efc8beab5073-200x200.gif",
        "https://cdn.sanity.io/images/h655d0ir/production/fe0fcc95a4f5a397ca702d42ae55f5d896b71638-250x296.png",
        "https://cdn.sanity.io/images/h655d0ir/production/a2840f9eb7c6e9b771219b0cac42101c6a718f1e-250x296.png",
        "https://cdn.sanity.io/images/h655d0ir/production/6d7cc81316662aa2779152c5fedc600453bc8f8b-250x296.png",
        "https://cdn.sanity.io/images/h655d0ir/production/41fb730664530717ba328bda7c9de309f28c4360-250x296.png"
      ];
      
  return (
    <section className='mega-z'>
      <div className="wrapper">
        <SkyBg />
        <div className="mega-container">
          <div className="megas">
            <img src={boxes[0]} alt="" />
            <h2>Character Select</h2>
          </div>
          <div className="grid">
            {boxes.slice(1).map((box, index) => (
              <div key={index} className="box">
                <img src={box} alt="" />
              </div>
            ))}
          </div>
        </div>
        <BackToSeries />
        <BottomBar />
      </div>
    </section>
  )
}

export default MegaZ
