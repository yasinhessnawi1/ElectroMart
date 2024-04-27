import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 400px; // Adjust height for better visual
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CarouselItem = styled.div`
    flex: 0 0 auto;
    width: 100%;
    transition: transform 0.5s;
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const CarouselImage = styled.img`
    width: 100%;
    max-width: 1290px;
    object-fit: contain; // Ensure images are fully visible
    height: 100%;
`;

const PrevButton = styled.button`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const NextButton = styled(PrevButton)`
    left: auto;
    right: 10px;
`;

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <CarouselContainer>
      <CarouselItem style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <CarouselImage src={process.env.PUBLIC_URL + "/banners/1.png"} alt="First slide" />
      </CarouselItem>
      <CarouselItem style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <CarouselImage src={process.env.PUBLIC_URL + "/banners/2.png"} alt="Second slide" />
      </CarouselItem>
      <CarouselItem style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <CarouselImage src={process.env.PUBLIC_URL + "/banners/3.png"} alt="Third slide" />
      </CarouselItem>
      <PrevButton onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)}>&lt;</PrevButton>
      <NextButton onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)}>&gt;</NextButton>
    </CarouselContainer>
  );
};

export default CarouselComponent;