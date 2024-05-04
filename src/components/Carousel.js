import { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: linear-gradient(
    145deg,
    #010101,
    #324a21
  ); // Gradient background from your palette
`;

const CarouselItem = styled.div`
  flex: 0 0 100%;
  transition: transform 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CarouselImage = styled.img`
  width: 100%;
  object-fit: contain;
  height: auto; // Changed to auto to maintain aspect ratio without cropping
`;

const CarouselNavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(
    0,
    0,
    0,
    0.5
  ); // Semi-transparent black for better visibility
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10; // Ensure the button is above the images
`;

const PrevButton = styled(CarouselNavButton)`
  left: 10px;
`;

const NextButton = styled(CarouselNavButton)`
  right: 10px;
`;

const DotContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Dot = styled.span`
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) =>
    props.isActive
      ? '#fafb63'
      : 'rgba(255, 255, 255, 0.5)'}; // Yellow for active dot, semi-transparent white for inactive
`;

const images = [
  { src: `${process.env.PUBLIC_URL}/banners/1.png`, alt: 'First slide' },
  { src: `${process.env.PUBLIC_URL}/banners/2.png`, alt: 'Second slide' },
  { src: `${process.env.PUBLIC_URL}/banners/3.png`, alt: 'Third slide' },
];

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselItem
          key={index}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <CarouselImage src={image.src} alt={image.alt} />
        </CarouselItem>
      ))}
      <PrevButton
        onClick={() =>
          setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides,
          )
        }
      >
        &lt;
      </PrevButton>
      <NextButton
        onClick={() =>
          setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)
        }
      >
        &gt;
      </NextButton>
      <DotContainer>
        {images.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </DotContainer>
    </CarouselContainer>
  );
};

export default CarouselComponent;
