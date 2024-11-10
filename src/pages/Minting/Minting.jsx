import React, { useState } from 'react'
import "./minting.scss"
import DarkBg from '../../components/DarkBg/DarkBg'
import BottomBar from '../../components/BottomBar/BottomBar'
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MintScheduleData } from '../../Data/MintScheduleData';
import textSound from "../../assets/shutter.mp3"



const Minting = () => {

    const [quantity, setQuantity] = useState(1);
  
    const percentage = 38.53; // Example percentage value

    const playClickSound = () => {
        const audio = new Audio(textSound);
        audio.volume = 0.4; // Set hover sound volume to 50%
        audio.play().catch(error => {
          console.error("Error playing hover sound:", error);
        });
      };
    
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    playClickSound();
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      playClickSound();
    }
   
  };
  return (
    <section className='minting'>
      <div className="wrapper">
        <DarkBg />
        <div className="minting-container animate-turnOff">
            <div className="left">
                <div className="head">
                    <h1>DQN</h1>
                    <div className="btns">
                        <div className='supply-count'>Suppply: <span>3,444</span></div>
                        <a href="/"><FaTwitter className='icon' /></a>
                        <a href="/"><FaDiscord className='icon' /></a>

                    </div>
                </div>
                <div className="about">
                    <h2>About this collection</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit recusandae doloribus totam fuga ab ut delectus, quas rem libero aut voluptates culpa. Sint repellendus dicta et officiis, est sit!</p>
                </div>
           
                <div className="left-middle">
                <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnVpYmtvMGV4eGkzb2xxNjFkdGRuNDAxaWpmMDEzaGhsZDA4b3gydiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/970Sr8vpwEbXG/giphy.gif" alt="" />
                <div className="mint-sec">
                <div className="mint-top-area">
                    <div className="percent-s">
                         <span>Percent</span>
                         <h3>{percentage}%</h3>
                    </div>
                    <div className="supply">
                        <span>Minted/Supply</span>
                        <h3>1337/<span>3470</span></h3>
                    </div>
                </div>
                <div className='percent-bar-content'>
                    <div className="percent-bar" style={{ width: `${percentage}%` }}></div>
                </div>
                
                <div className="mint-btns">
                <div className='quantity'>
                    <span onClick={handleDecrement}>-</span>
                    <p>{quantity}</p>
                    <span onClick={handleIncrement}>+</span>
                  </div>
                    <button>Mint</button>
                </div>
                </div>
                </div>
             
                
            </div>
            <div className="right">
                <h2>Mint schedule</h2>
                <div className="schedule-content">
                {MintScheduleData.map((item) => (
                <div key={item.id} className="schedule-card">
                  <div className="text">
                    <h3 className='title'>{item.title} <span className='status'>{item.status}</span></h3>
                    <p className='date'>{item.date}</p>
                    <h3 className='machine'>{item.machine} <span className='limit'>{item.limit}</span></h3>
                  </div>
                  <button>{item.button}</button>
                </div>
              ))}
                </div>
            
            </div>
        </div>
        <BottomBar />
      </div>
    </section>
  )
}

export default Minting
