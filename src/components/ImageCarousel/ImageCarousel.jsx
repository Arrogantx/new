import React, { useState, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import './imggallery.scss';
import { images } from '../../Data/CarouselData';
import { TbZoomIn, TbZoomOut } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleDownload = () => {
    const currentImage = images[currentIndex];
    window.open(currentImage.original, '_blank');
  };

  const customRenderItem = (item) => {
    return (
      <div className="image-gallery-item">
        <img onClick={toggleZoom} src={item.original} alt={item.originalAlt} className={isZoomed ? 'zoomed-image' : ''} />
        <div className="image-gallery-description">
          <h3>{item.description}</h3>
        </div>
      </div>
    );
  };

  return (
    <div className="img-gallary-sec animate-turnOff">
      <div className="gallary-nav">
        <div className="left">
          <span className="slide-number">
            {currentIndex + 1}/{images.length}
          </span>
        </div>
        <div className="right">
          {isZoomed ? (
            
            <TbZoomOut className="zoom-icon" onClick={toggleZoom} />
          ) : (
            <TbZoomIn className="zoom-icon" onClick={toggleZoom} />
          )}
          <HiDownload className='download-icon' onClick={handleDownload} />
        </div>
      </div>
      <div className="image-gallery-wrapper">
        <ImageGallery
          ref={galleryRef}
          items={images}
          renderItem={customRenderItem}
          onSlide={index => setCurrentIndex(index)}
          showThumbnails={true} // Optionally, you can disable thumbnails
          autoPlay={false} // Disable default autoplay
          slideInterval={2000}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
