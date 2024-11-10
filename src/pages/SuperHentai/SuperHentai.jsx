import React from 'react';
import "./superhentai.scss";
import SkyBg from '../../components/SkayBg/SkyBg';
import BottomBar from '../../components/BottomBar/BottomBar';
import { BackToSeries } from '../../components/BackToMenu/BackTomenu';

const SuperHentai = () => {
  const boxes = [
    "https://cdn.sanity.io/images/h655d0ir/production/a50a509b6acc5fee48b2276afc50c26d047c3b03-200x200.gif",
    "https://cdn.sanity.io/images/h655d0ir/production/73dede68efb4b335e4d54d5cc6065326ef5382ae-250x296.png",
    "https://cdn.sanity.io/images/h655d0ir/production/e1e7740a2d927916ebda3ab9d5276191e3ce3c19-250x296.png",
    "https://cdn.sanity.io/images/h655d0ir/production/b6da91c2c5144b1f1a1b3fd6c16302ec7862ca4a-250x296.png",
    "https://cdn.sanity.io/images/h655d0ir/production/21b3818443085f4ae3d58e3c61242c10c722e3e3-250x296.png",
    "https://cdn.sanity.io/images/h655d0ir/production/01cd4a0520073829be1b8a7cd3d1e1a4d479c48f-250x296.png"
  ];

  return (
    <section className='s-hentai animate-turnOff'>
      <div className="wrapper">
        <SkyBg />
        <div className="hentai-container">
          <div className="hentais">
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
  );
};

export default SuperHentai;
