import React from "react";
import "./home.scss";
import LOGO from "../../assets/logo.avif";
import BottomBar from "../../components/BottomBar/BottomBar";
import SkyBg from "../../components/SkayBg/SkyBg";
import { Link } from "react-router-dom";
import clickAudio from '../../assets/coin.mp3';

const Home = () => {

  const playClickAudio = () => {
    const audio = new Audio(clickAudio);
    audio.play();
  };

  return (
    <section className="home-page home-bg">
      <div className="wrapper">
        <SkyBg />
        <div className="home-content animate-turnOn">
          <img className="logo" src={LOGO} alt="" />
          <div className="start-btn">
            <span className="text-stroke-2xs animate-blink">&gt;</span>
            <Link to={"menu"} onClick={playClickAudio}>
              <strong className="text-stroke-2xs text"> PRESS START</strong>
            </Link>
          </div>
          <strong className="text-stroke-2xs text-yellow">スタートを押す</strong>
        </div>
        <BottomBar />
      </div>
    </section>
  );
};

export default Home;
