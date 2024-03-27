import React, { useState, useEffect, useRef } from 'react';

interface ImageSliderProps {
    images: string[]; 
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const skipTransitionRef = useRef(false);

    const loopedImages = [images[images.length - 1], ...images, images[0]];
    const [currentIndex, setCurrentIndex] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
        if (currentIndex === loopedImages.length - 2) {
            skipTransitionRef.current = true;
        }
        setCurrentIndex((prevIndex) => {
            return prevIndex + 1 === loopedImages.length ? 1 : prevIndex + 1;
        });
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    useEffect(() => {
        const slidesElement = document.querySelector('.slides') as HTMLElement;
        const handleTransitionEnd = () => {
        if (skipTransitionRef.current) {
            slidesElement.style.transition = 'none';
            slidesElement.style.transform = `translateX(-100%)`;
            slidesElement.offsetHeight;
            slidesElement.style.transition = 'transform 0.5s ease-in-out';
            skipTransitionRef.current = false;
        }
        };

        slidesElement.addEventListener('transitionend', handleTransitionEnd);

        return () => {
        slidesElement.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, []);

    const percentage = -(100 * currentIndex);

    return (
        <div className="slider">
            <div
                className="slides"
                style={{
                display: 'flex',
                transition: 'transform 0.5s ease-in-out',
                transform: `translateX(${percentage}%)`,
                }}
            >
                {loopedImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className="slide-image"
                />
                ))}
            </div>
        </div>
    );
};

export default function App() {
  const images = [
    '/images/municca_logo.png',
    '/images/rkenji_logo.png',
  ];

  return <ImageSlider images={images} />;
}
