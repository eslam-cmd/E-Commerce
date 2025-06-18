import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import slider1 from "../../images/slider1.png";
import slider4 from "../../images/slider4.png";

function SliderCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const slides = [
        {
            image: slider1,
            backgroundClass: 'slider-background',
            title: "Big Discounts Available",
            text: "Get up to 50% off on your purchase",
            alt: "Special Offer"
        },
        {
            image: slider4,
            backgroundClass: 'slider-background2',
            title: "New Collection Arrived",
            text: "Discover our latest products",
            alt: "New Collection"
        },
        {
            image: slider1,
            backgroundClass: 'slider-background',
            title: "Limited Time Offer",
            text: "Don't miss these exclusive deals",
            alt: "Limited Offer"
        },
        {
            image: slider4,
            backgroundClass: 'slider-background2',
            title: "Premium Quality",
            text: "Shop the best products in the market",
            alt: "Premium Products"
        }
    ];

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {slides.map((slide, idx) => (
                <Carousel.Item key={idx} className={slide.backgroundClass} interval={2000}>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <img 
                            style={{ height: "296px", width: "313px" }} 
                            src={slide.image} 
                            alt={slide.alt}
                        />
                        <div className='slider-content'>
                            <h3 className="slider-title">{slide.title}</h3>
                            <p className="slider-text">{slide.text}</p>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default SliderCarousel;