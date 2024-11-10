import React from 'react'
import "./shop.scss"
import SkyBg from '../../components/SkayBg/SkyBg'
import BottomBar from '../../components/BottomBar/BottomBar'
import BackTomenu from '../../components/BackToMenu/BackTomenu'
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const handleContinueToHentai = () => {
    // Navigate to the hentai page when the button is clicked
    navigate("/super-hentai");
  };
  const handleContinueToMegaZ = () => {
    // Navigate to the hentai page when the button is clicked
    navigate("/mega-z");
  };
  return (
    <section className='shop'>
      <div className="wrapper">
        <SkyBg />
        <div className="shop-content animate-turnOff">
          <h2>select series</h2>
          <div className="series-sec">
                 <div className="series">
                  <div className="bg-circle"></div>
                  <img onClick={handleContinueToHentai} src="https://www.superdopebrand.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fh655d0ir%2Fproduction%2Fa50a509b6acc5fee48b2276afc50c26d047c3b03-200x200.gif&w=256&q=75" alt="" />
                  <p>Super Hentai</p>
                 </div>
                 <div className="series">
                 <div className="bg-circle"></div>
                  <img onClick={handleContinueToMegaZ} src="https://www.superdopebrand.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fh655d0ir%2Fproduction%2F0bd891fb43450a14aeb7200d24d9efc8beab5073-200x200.gif&w=256&q=75" alt="" />
                  <p>Mega Z</p>
                 </div>
          </div>
        </div>
        <BackTomenu />
        <BottomBar/>
      </div>
    </section>
  )
}

export default Shop
