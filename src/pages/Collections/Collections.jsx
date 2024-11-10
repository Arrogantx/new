import React from 'react';
import "./collections.scss";
import StoreBg from '../../components/StoreBg/StoreBg';
import BottomBar from '../../components/BottomBar/BottomBar';
import StoreCarousel from '../../components/StoreCarousel/StoreCarousel';

const Collections = () => {
  return (
   <section className='collections'>
    <div className="wrapper">
        <StoreBg />
        <StoreCarousel />
        <BottomBar />
    </div>
   </section>
  );
};

export default Collections;