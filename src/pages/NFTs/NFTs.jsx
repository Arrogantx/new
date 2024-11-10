import React from 'react'
import "./nfts.scss"
import BottomBar from '../../components/BottomBar/BottomBar'
import DarkBg from '../../components/DarkBg/DarkBg'
import { NftOuterPageData } from '../../Data/NftsData'
import menuClickSound from "../../assets/gamestart.mp3"
import "../../Data/NftsData"
import { useNavigate } from 'react-router-dom'



const NFTs = () => {
    const playClickSound = () => {
        const audio = new Audio(menuClickSound);
        audio.volume = 0.4; // Set click sound volume to 50%
        audio.play().catch(error => {
          console.error("Error playing click sound:", error);
        });
      };

      const navigate = useNavigate();


    const handleNavigateToNftsRoboto = (innerPageData, title) => {
        playClickSound();
        // Navigate to the NftsRoboto page with the specified inner page data
        navigate("/nfts-roboto", { state: { innerPageData, title } });
    };
    return (
      <section className='tutorials'>
        <div className="wrapper">
          <DarkBg />
             <div className="nfts-contaner animate-turnOff">
                <div className="header">
                <h2>YOUR STUFF</h2>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
                </div>
             
               <div className="content">
               {NftOuterPageData.map((nft, index) => (
                            <div key={nft.id} className="card" onClick={() => handleNavigateToNftsRoboto(`NftInnerPageData${index + 1}`, nft.title)}>
                                <img src={nft.img} alt="" loading="lazy" />
                                <div className="title">{nft.title}</div>
                            </div>
                        ))}
               </div>
             </div>
          <BottomBar />
        </div>
      </section>
    )
  }
  
  export default NFTs