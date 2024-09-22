import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { IonIcon } from "@ionic/react";
import { arrowBack, arrowForward } from "ionicons/icons";

interface CarouselProps {
  images: string[];
  showButtons: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ images, showButtons }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    if (images.length > 1) {
      const getRandomInterval = () => Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;
      let interval = setInterval(nextImage, getRandomInterval());

      const resetInterval = () => {
        clearInterval(interval);
        interval = setInterval(nextImage, getRandomInterval());
      };

      const intervalId = setInterval(resetInterval, getRandomInterval());

      return () => {
        clearInterval(interval);
        clearInterval(intervalId);
      };
    }
  }, [images.length]);

  return (
    <div className="carousel">
      {showButtons && (
        <button onClick={prevImage} className="carousel-button">
          <IonIcon icon={arrowBack} />
        </button>
      )}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="carousel-image"
        loading="lazy"
      />
      {showButtons && (
        <button onClick={nextImage} className="carousel-button">
          <IonIcon icon={arrowForward} />
        </button>
      )}
    </div>
  );
};

export default Carousel;