import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollingCards.css';
import client5 from '../assets/client5.jpeg'
import client6 from '../assets/client6.jpeg'
import client7 from '../assets/client7.jpeg'
import client8 from '../assets/client8.jpeg'

const ScrollingCards = () => {
  const containerRef = useRef(null);
  
  const cards = [
    {
      id: 1,
      image123: client5,
      content: "Strategic Leader",
      color: "#00688b"
    },
    {
      id: 2,
      image123: client6,
      content: "Learning & Development",
      color: " #cd3700"
    },
    {
      id: 3,
      image123: client7,
      content: "Motivational Speaker",
      color: "#03a89e"
    },
    {
      id: 4,
      image123: client8,
      
      content: "Instructional Design",
      color: "#ff6103"
    }
  ];

  // Get scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] // Ensures full transition before next section
  });

  return (
    <div className="scrolling-cards-wrapper" id='scrolling-card'>
      <div className="scrolling-cards-container" ref={containerRef}>
        <div className="cards-viewport">
          {cards.map((card, index) => (
            <CardSection 
              key={card.id} 
              card={card} 
              index={index} 
              totalCards={cards.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Individual card section component
const CardSection = ({ card, index, totalCards, scrollYProgress }) => {
  const extendedFactor = 1.5; // Increase this value to make scrolling slower

  // Adjust the progress range calculation
  const start = (index * extendedFactor) / (totalCards * extendedFactor);
  const end = ((index + 1) * extendedFactor) / (totalCards * extendedFactor);

  // Map scrollYProgress to card-specific progress
  const cardProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

  // Define different transform configurations based on card position
  let scaleRange, opacityRange, zIndexRange;
  
  if (index === 0) {
    // First card starts visible and fades out
    scaleRange = [1, 0.8, 0.5];
    opacityRange = [1, 0.6, 0];
    zIndexRange = [10, 5, 1];
  } else if (index === totalCards - 1) {
    // Last card fades in and stays
    scaleRange = [0.5, 0.8, 1];
    opacityRange = [0, 0.6, 1];
    zIndexRange = [1, 5, 10];
  } else {
    // Intermediate cards fade in and out
    scaleRange = [0.5, 1, 1, 0.5];
    opacityRange = [0, 1, 1, 0];
    zIndexRange = [1, 5, 5, 1];
  }
  
  // Create transform values based on position
  const scale = useTransform(
    cardProgress,
    index === 0 || index === totalCards - 1 
      ? [0, 0.5, 1] 
      : [0, 0.25, 0.75, 1],  // Adjusted to give equal screen time
    scaleRange
  );

  const opacity = useTransform(
    cardProgress,
    index === 0 || index === totalCards - 1 
      ? [0, 0.5, 1] 
      : [0, 0.25, 0.75, 1],  // Adjusted to give equal screen time
    opacityRange
  );

  const zIndex = useTransform(
    cardProgress,
    index === 0 || index === totalCards - 1 
      ? [0, 0.5, 1] 
      : [0, 0.25, 0.75, 1],  // Adjusted to give equal screen time
    zIndexRange
  );

  return (
    <motion.div
      className="card"
      style={{
        backgroundColor: card.color,
        scale,
        opacity,
        zIndex
      }}
    >
      <div className="card-content">
        <div className="card-img">
          <img src={card.image123} alt="" />
        </div>
        <div className="card-cont">
          <p>{card.content}</p>
        </div>
        
        
      </div>
    </motion.div>
  );
};

export default ScrollingCards;
