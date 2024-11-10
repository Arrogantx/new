import React, { useEffect, useState } from 'react'
import "./media.scss"
import BottomBar from '../../components/BottomBar/BottomBar'
import SkyBg from '../../components/SkayBg/SkyBg'
import BackTomenu from '../../components/BackToMenu/BackTomenu'
import { useNavigate } from 'react-router-dom'
import textSound from "../../assets/shutter.mp3"
import MenuBgSound from "../../assets/hkmidnight.mp3"
import menuClickSound from "../../assets/crash.mp3"



const Media = () => {
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
  const handleContinueToTutorials = () => {
    playClickSound();
    // Navigate to the tutorial page when the button is clicked
    navigate("/tutorial");
  };

  const handleContinueToVideoSec = () => {
    playClickSound();
    // Navigate to the video page when the button is clicked
    navigate("/media-video");
  };

  const handleContinueToPicture = () => {
    playClickSound();
    // Navigate to the picture page when the button is clicked
    navigate("/media-picture");
  };
  const handleContinueToHentai = () => {
    playClickSound();
    // Navigate to the picture page when the button is clicked
    navigate("/hentai");
  };
  return (
    <section className='media '>
      <div className="wrapper">
        <SkyBg />
        <div className="menu-content animate-turnOff">
          <div className="menus">
            <span onClick={handleContinueToTutorials} onMouseEnter={playHoverSound}>Tutorials</span>
            <span onClick={handleContinueToVideoSec} onMouseEnter={playHoverSound}>Videos</span>
            <span onClick={handleContinueToPicture} onMouseEnter={playHoverSound}>Pictures</span>
            <span onClick={handleContinueToHentai} onMouseEnter={playHoverSound}>Hentai</span>
          </div>
        </div>
        <BackTomenu />
        <BottomBar />
      </div>
   </section>
  )
}

export default Media
