import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const LandingPage = () => {
  const vantaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadVanta = () => {
      if (window.VANTA) {
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x6cfc8,
          backgroundColor: 0x1a181d,
        });
      }
    };

    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
      script2.onload = loadVanta;
      document.body.appendChild(script2);
    };
    document.body.appendChild(script1);

    return () => {
      if (window.VANTA && vantaRef.current) {
        window.VANTA.destroy();
      }
    };
  }, []);

  return (
    <LandingContainer ref={vantaRef}>
      <Title>Trade Vision</Title>
      <TypingSubtitle>Your Gateway to Stock Market Predictions</TypingSubtitle>
      <CheckOutBox onClick={() => navigate('/dashboard')}>
        <CheckOutText>Check Out</CheckOutText>
        <AnimatedIcon />
      </CheckOutBox>
    </LandingContainer>
  );
};

export default LandingPage;

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 97.5vh;
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-sizing: border-box; 
`;


const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;

  &:hover {
    color: #00000;  
    transform: scale(1.10); 
    transition: all 0.5s ease-in-out;  
  }
`;
const typing = keyframes`
  0% {
    width: 0;
  }
  70% {
    width: 100%;
  }
`;

const TypingSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: ${typing} 6s steps(100, end) infinite;
`;

const CheckOutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(255, 0, 110, 0.8); /* Futuristic pink with transparency */
  padding: 20px 40px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(255, 0, 110, 0.7);
  animation: glow 1.5s infinite alternate;

  @keyframes glow {
    from {
      box-shadow: 0 0 10px rgba(255, 0, 110, 0.7);
    }
    to {
      box-shadow: 0 0 20px rgba(255, 0, 110, 1);
    }
  }

  &:hover {
    box-shadow: 0 0 30px rgba(255, 0, 110, 1);
  }
`;

const CheckOutText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const AnimatedIcon = styled(FaArrowRight)`
  color: #fff;
  font-size: 1.5rem;
  animation: slideIn 1.5s infinite alternate;

  @keyframes slideIn {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(10px);
    }
  }
`;
