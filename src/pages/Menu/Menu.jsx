import React, { useEffect, useState } from 'react'
import "./menu.scss"
import SkyBg from '../../components/SkayBg/SkyBg'
import BottomBar from '../../components/BottomBar/BottomBar'
import { useNavigate } from "react-router-dom";
import textSound from "../../assets/shutter.mp3"
import MenuBgSound from "../../assets/hkmidnight.mp3"
import menuClickSound from "../../assets/gamestart.mp3"

const Menu = () => {
  const [backgroundSound] = useState(new Audio(MenuBgSound));
  useEffect(() => {
    backgroundSound.loop = true;
    backgroundSound.volume = 0.4; // Set background sound volume to 50%
    if (backgroundSound.paused) {
      backgroundSound.play().catch(error => {
        console.error("Error playing background sound:", error);
      });
    }

    return () => {
      backgroundSound.pause();
      backgroundSound.currentTime = 0;
    };
  }, [backgroundSound]);

  const playHoverSound = () => {
    const audio = new Audio(textSound);
    audio.volume = 0.4; // Set hover sound volume to 50%
    audio.play().catch(error => {
      console.error("Error playing hover sound:", error);
    });
  };

  const playClickSound = () => {
    const audio = new Audio(menuClickSound);
    audio.volume = 0.4; // Set click sound volume to 50%
    audio.play().catch(error => {
      console.error("Error playing click sound:", error);
    });
  };

  const navigate = useNavigate();
  const handleContinueToNfts = () => {
    playClickSound();

    // Navigate to the media page when the button is clicked
    navigate("/nfts");
  };
  const handleContinueToMint = () => {
    playClickSound();

    // Navigate to the locations page when the button is clicked
    navigate("/minting");
  };
  const handleContinueToEvents = () => {
    playClickSound();

    // Navigate to the events page when the button is clicked
    navigate("/events");
  };
  const handleContinueToShop = () => {
    playClickSound();

    // Navigate to the Shop page when the button is clicked
    navigate("/series");
  };
  const handleContinueToContact = () => {
    playClickSound();

    // Navigate to the contact page when the button is clicked
    navigate("/contact");
  };

  const handleContinueToMerch = () => {
    playClickSound();

    // Navigate to the contact page when the button is clicked
    navigate("/collections");
  };


  return (
   <section className='menu'>
      <div className="wrapper">
        <SkyBg />
        <div className="menu-content animate-turnOff">
          <div className="menus">
            <span onClick={handleContinueToNfts} onMouseEnter={playHoverSound}>NFTS</span>
            <span onClick={handleContinueToMint} onMouseEnter={playHoverSound}>Start</span>
            <span onClick={handleContinueToEvents} onMouseEnter={playHoverSound}>Discord</span>
            <span onClick={handleContinueToShop} onMouseEnter={playHoverSound}>Shop</span>
            <span onClick={handleContinueToMerch} onMouseEnter={playHoverSound}>Merch</span>
            <span onMouseEnter={playHoverSound}>Rewards</span>
            <span onClick={handleContinueToContact} onMouseEnter={playHoverSound}>Contact</span>
          </div>
        </div>
        <BottomBar />
      </div>
   </section>
  )
}

export default Menu
