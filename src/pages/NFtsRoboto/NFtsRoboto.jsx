import React from 'react'
import "./nftsroboto.scss"
import DarkBg from '../../components/DarkBg/DarkBg'
import BottomBar from '../../components/BottomBar/BottomBar'
import {  useLocation } from 'react-router-dom';
import { NftInnerPageData1, NftInnerPageData2, NftInnerPageData3, NftInnerPageData4, NftInnerPageData5, NftInnerPageData6 } from '../../Data/NftsData'


const NFtsRoboto = () => {
    const location = useLocation();
    const innerPageData = location.state?.innerPageData || 'NftInnerPageData1'; // Default to NftInnerPageData1 if state is undefined
    const title = location.state?.title || '';

    // Rendering the appropriate inner page data based on the state
    const renderInnerPageData = () => {
        switch (innerPageData) {
            case 'NftInnerPageData1':
                return NftInnerPageData1;
            case 'NftInnerPageData2':
                return NftInnerPageData2;
            case 'NftInnerPageData3':
                return NftInnerPageData3;
            case 'NftInnerPageData4':
                return NftInnerPageData4;
            case 'NftInnerPageData5':
                return NftInnerPageData5;
            case 'NftInnerPageData6':
                return NftInnerPageData6;
            default:
                return [];
        }
    };
  return (
    <section className='Nfts-roboto'>
      <div className="wrapper">
        <DarkBg/>
        <div className="nfts-contaner-i animate-turnOff">
                <div className="header">
                <h2 className='roboto-id'> {title} </h2>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing</p>
                </div>
             
               <div className="content">
               {renderInnerPageData().map((nft) => (
        <div key={nft.id} className="card">
          <img src={nft.img} alt="" loading="lazy" />
          <div className="title">{nft.title}</div>
          <div className="text">{nft.text}</div>
        </div>
      ))}
               </div>
             </div>
        <BottomBar />
      </div>
    </section>
  )
}

export default NFtsRoboto
